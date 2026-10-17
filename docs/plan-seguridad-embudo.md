# Plan: cerrar los hallazgos de seguridad de la landing

Origen: escaneo de Claude Security del 2026-10-17 sobre el commit `67d48ba` (esfuerzo medio, 5 hallazgos verificados 3/3). El informe completo está fuera de este repo, en `~/nexlio/youtube/raw/repos-grabacion/05-informe-seguridad/CLAUDE-SECURITY-RESULTS.md`. Sale en el vídeo de los repos de GitHub (con la ruta del panel tapada), así que **hay que cerrarlo antes de publicar el vídeo**.

## Paso 0 · Hoy mismo, sin tocar código (5 minutos)

El riesgo real de F1/F2 depende de la contraseña que haya en producción.

1. En el VPS (`ssh arquitectos-ia`), mirar `ADMIN_PASSWORD` en `/etc/arquitectos-ia/landing.env`. Si es la de `.env.example`, corta o la eligió una persona, cambiarla por una larga y aleatoria:
   ```bash
   openssl rand -base64 32
   ```
2. `systemctl restart arquitectos-ia-landing` y comprobar que `/embudo` pide la nueva.
3. Si se sospecha que alguien entró: revisar en los logs de nginx los `401` y `200` a `/embudo` (sobre todo `/embudo/exportar`) y avisar según RGPD si hubo acceso a la lista.

## Paso 1 · Frenar los intentos en nginx (F1, F2)

En `/etc/nginx/sites-enabled/arquitectos-ia.conf` (no está en el repo):

- **Opción A (recomendada, la más simple):** que `/embudo` solo responda desde tu IP o tu VPN (`allow <tu IP>; deny all;` en un `location /embudo`). Si tu IP de casa cambia, usar la opción B.
- **Opción B:** límite de peticiones solo para `/embudo`: una `limit_req_zone` por IP (p. ej. 5 peticiones por minuto con `burst` pequeño) y `limit_req` en `location /embudo`, devolviendo 429.

Después: `nginx -t && systemctl reload nginx`, y probar que 20 intentos seguidos con contraseña mala acaban en 429 (o en 403 desde otra IP).

## Paso 2 · Endurecer el middleware (F1, F2) — `src/middleware.ts`

- Exigir también un usuario fijo (`ADMIN_USER`), no solo la contraseña.
- Comparar usuario y contraseña en tiempo constante. El middleware corre en el runtime Edge, sin `crypto.timingSafeEqual`: hacer un SHA-256 de lo recibido y de lo esperado con `crypto.subtle.digest` y comparar los dos resúmenes byte a byte sin salir antes.
- Si `ADMIN_PASSWORD` falta, es corta (menos de 24 caracteres) o es igual al valor de `.env.example`, responder 503 a `/embudo` y registrar el error, en vez de dejar entrar con una contraseña débil.
- A más largo plazo: sustituir la autenticación básica por un login con sesión (y 2FA), como el de la plataforma.

## Paso 3 · CSV sin fórmulas (F3) — `src/app/embudo/exportar/route.ts`

- En `csvCell`: si el valor empieza por `=`, `+`, `-`, `@`, tabulador o retorno de carro, anteponerle una comilla simple `'`.
- Entrecomillar siempre todas las celdas y añadir `\r` a los caracteres que obligan a entrecomillar.
- Opcional: en `cleanUtm` (`src/app/api/leads/route.ts`) rechazar o quitar esos caracteres al guardar.

## Paso 4 · Doble confirmación del alta (F4, F5) — `src/lib/leads.ts` y `src/app/api/leads/route.ts`

- Quitar el `ON CONFLICT (email) DO UPDATE SET unsubscribed_at = NULL` de `upsertLead`: un alta pública no debe anular una baja.
- Double opt-in: el lead nuevo se guarda como pendiente (columna `confirmed_at`, migración nueva), se envía un enlace de confirmación de un solo uso con el `token` que ya existe, y solo cuenta como suscrito al confirmarlo. Para quien se dio de baja: correo de "¿quieres volver?" con el mismo mecanismo.
- `listSubscribedLeads`, el contador y los envíos masivos pasan a filtrar también por `confirmed_at IS NOT NULL`. Decidir qué hacer con los leads actuales (darlos por confirmados, porque se apuntaron con consentimiento).
- F5 (tiempo de respuesta): mandar el correo después de responder, con `after()` de `next/server`, para que lo nuevo y lo ya existente tarden lo mismo.

## Paso 5 · Comprobar y desplegar

1. `pnpm build` en local y probar a mano: `/embudo` con usuario o contraseña mala → 401; exportar un CSV con un lead de prueba cuya UTM empiece por `=` → la celda sale como texto; un alta nueva → correo de confirmación; repetir el alta de alguien dado de baja → no se reactiva.
2. Commit y push (Adrià). Desplegar según el procedimiento del VPS (scp de los ficheros cambiados a `current/src/...` con owner `agent`, `next build` con las variables de `landing.env` y `systemctl restart arquitectos-ia-landing`). La migración de `confirmed_at` va antes del build.
3. Volver a pasar Claude Security sobre los cambios: `/claude-security scan my branch at high`.

## Orden y estado

| Paso | Hallazgos | Urgencia | Estado |
|---|---|---|---|
| 0. Contraseña larga en producción | F1, F2 | Hoy | Hecho 2026-10-17: contraseña larga y aleatoria + usuario fijo. Logs de nginx revisados: sin accesos ajenos al panel ni a la exportación |
| 1. nginx: solo tu IP o límite | F1, F2 | Esta semana, antes del vídeo | Hecho 2026-10-17 (opción B): límite por IP con 429. También en `/api/leads` |
| 2. Middleware | F1, F2 | Antes del vídeo | Desplegado 2026-10-17 (usuario + contraseña en tiempo constante, 503 si es débil) |
| 3. CSV | F3 | Antes del vídeo | Desplegado 2026-10-17 |
| 4. Double opt-in | F4, F5 | Cuando se pueda (toca base de datos y correos) | Desplegado 2026-10-17; migración `migrations/001-confirmed-at.sql` lanzada antes. Correos de confirmación con tope total y tiempo entre envíos (hallazgo del reescaneo) |
| 5. Comprobar y desplegar | todos | Tras cada paso | Desplegado 2026-10-17 (rsync a `next`, build, prueba en :3005 con envío real a `delivered@resend.dev`, cambio de carpetas; la versión anterior queda en `previous`). Commit y push hechos (`040cdaf`, `ffa7f9b`). Reescaneo con Claude Security a esfuerzo alto sobre `67d48ba..ffa7f9b`: 0 hallazgos, verificado (2026-10-17) |

Con los pasos 0–3 hechos, en el vídeo se puede decir "ya están arregladas" de la puerta y del Excel. El paso 4 se puede contar como "lo estoy arreglando".
