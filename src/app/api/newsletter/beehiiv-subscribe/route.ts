import { NextResponse } from 'next/server';

// Credenciales obtenidas desde variables de entorno
const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY || process.env.NEXT_PUBLIC_BEEHIIV_API_KEY;
const BEEHIIV_PUB_ID = process.env.BEEHIIV_PUB_ID || process.env.NEXT_PUBLIC_BEEHIIV_PUB_ID;
const BEEHIIV_API_URL = 'https://api.beehiiv.com/v2';

export async function POST(request: Request) {
  try {
    // Verificar que las credenciales estén configuradas
    if (!BEEHIIV_API_KEY || !BEEHIIV_PUB_ID) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: 'Beehiiv API not properly configured. Please check environment variables.'
        }),
        { status: 500 }
      );
    }

    // Obtener los datos del cuerpo de la solicitud
    const subscriberData = await request.json();

    // Validar el email (campo obligatorio)
    if (!subscriberData.email) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: 'Email is required'
        }),
        { status: 400 }
      );
    }

    // Agregar parámetros por defecto recomendados por la API de Beehiiv
    const requestData = {
      ...subscriberData,
      reactivate_existing: subscriberData.reactivate_existing ?? true, // Reactivar suscriptores que se dieron de baja
      send_welcome_email: subscriberData.send_welcome_email ?? true, // Enviar email de bienvenida configurado en Beehiiv
    };

    // Realizar la solicitud a la API de Beehiiv
    const response = await fetch(
      `${BEEHIIV_API_URL}/publications/${BEEHIIV_PUB_ID}/subscriptions`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${BEEHIIV_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      }
    );

    // Leer la respuesta como texto primero para manejar errores no JSON
    const responseText = await response.text();
    let responseData: any;

    // Intentar parsear como JSON, pero manejar errores si no es JSON válido
    try {
      responseData = responseText ? JSON.parse(responseText) : {};
    } catch (parseError) {
      console.error('Error parsing Beehiiv response as JSON:', parseError);
      console.error('Raw Beehiiv response text:', responseText);
      // Si no se puede parsear y la respuesta no fue OK, devolver un error genérico
      if (!response.ok) {
        return new NextResponse(
          JSON.stringify({
            success: false,
            message: `Error ${response.status}: ${response.statusText}. Non-JSON response received.`,
            rawResponse: responseText // Incluir respuesta cruda para depuración
          }),
          { status: response.status }
        );
      }
      // Si fue OK pero no se pudo parsear (inesperado), devolver error
      responseData = { success: false, message: 'Could not parse successful response from Beehiiv.' };
    }

    // Si la respuesta HTTP no fue exitosa (status >= 400)
    if (!response.ok) {
      console.error('Error from Beehiiv API:', responseData);
      const errorMessage = responseData?.error || responseData?.message || `Error ${response.status}: ${response.statusText}`;

      // Comprobar si es un error de duplicado (email ya registrado)
      const isDuplicate = errorMessage.includes("already subscribed") ||
        errorMessage.includes("already exists") ||
        errorMessage.includes("already active") ||
        responseData?.code === "existing_subscription" ||
        response.status === 409; // Conflict status for existing subscribers

      if (isDuplicate) {
        // Devolver éxito para emails ya registrados
        return new NextResponse(
          JSON.stringify({
            success: true,
            alreadySubscribed: true,
            message: "¡Este email ya estaba registrado! No te preocupes, ya estás en la lista de espera.",
            data: { email: subscriberData.email, status: "active" }
          }),
          { status: 200 } // Devolver 200 OK aunque ya existiera
        );
      }

      // Para otros tipos de errores, devolver el error
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: errorMessage,
          details: responseData
        }),
        { status: response.status }
      );
    }

    // Si la respuesta HTTP fue exitosa (status 2xx)
    // Devolver la respuesta exitosa (puede ser el objeto de suscripción o el de 'alreadySubscribed' si se manejó arriba)
    return new NextResponse(
      JSON.stringify({
        success: true,
        data: responseData // Contiene los datos de la suscripción creada
      }),
      { status: 200 }
    );
  } catch (error) {
    // Manejar cualquier error inesperado
    console.error('Unexpected error in Beehiiv subscription handler:', error);

    return new NextResponse(
      JSON.stringify({
        success: false,
        message: error instanceof Error ? error.message : 'An unexpected error occurred'
      }),
      { status: 500 }
    );
  }
}
