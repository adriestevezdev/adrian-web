"use client";

import { useEffect } from "react";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import "@/app/cookieconsent-custom.css";
import * as CookieConsent from "vanilla-cookieconsent";

export default function CookieConsentComponent() {
  useEffect(() => {
    CookieConsent.run({
      disablePageInteraction: true,
      guiOptions: {
        consentModal: {
          layout: "box",
          position: "middle center",
          flipButtons: false,
          equalWeightButtons: false,
        },
        preferencesModal: {
          layout: "box",
          position: "right",
          flipButtons: false,
          equalWeightButtons: true,
        },
      },

      onFirstConsent: ({ cookie }) => {
        console.log("First consent given");
      },

      onConsent: ({ cookie }) => {
        console.log("Consent updated");
      },

      onChange: ({ cookie, changedCategories, changedServices }) => {
        console.log("Cookie consent changed", changedCategories);
      },

      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        analytics: {
          enabled: false,
          autoClear: {
            cookies: [
              {
                name: /^_fbp$/,
              },
              {
                name: /^_fbc$/,
              },
              {
                name: /^fr$/,
              },
            ],
          },
          services: {
            meta_pixel: {
              label: "Meta Pixel (Facebook)",
              onAccept: () => {
                // Meta Pixel se cargará automáticamente
                console.log("Meta Pixel accepted");
              },
              onReject: () => {
                console.log("Meta Pixel rejected");
              },
            },
          },
        },
      },

      language: {
        default: "es",
        translations: {
          es: {
            consentModal: {
              title: "Usamos cookies 🍪",
              description:
                "Esta web utiliza cookies esenciales para su correcto funcionamiento y cookies de análisis para entender cómo interactúas con ella. Las cookies de análisis solo se establecerán con tu consentimiento.",
              acceptAllBtn: "Aceptar todas",
              acceptNecessaryBtn: "Rechazar todas",
              showPreferencesBtn: "Gestionar preferencias",
            },
            preferencesModal: {
              title: "Gestionar preferencias de cookies",
              acceptAllBtn: "Aceptar todas",
              acceptNecessaryBtn: "Rechazar todas",
              savePreferencesBtn: "Guardar selección",
              closeIconLabel: "Cerrar",
              sections: [
                {
                  title: "Uso de cookies",
                  description:
                    "Utilizamos cookies para garantizar las funcionalidades básicas del sitio web y mejorar tu experiencia en línea.",
                },
                {
                  title: "Cookies estrictamente necesarias",
                  description:
                    "Estas cookies son esenciales para el correcto funcionamiento del sitio web. Sin estas cookies, el sitio web no funcionaría correctamente.",
                  linkedCategory: "necessary",
                },
                {
                  title: "Cookies de análisis y publicidad",
                  description:
                    "Estas cookies nos permiten medir el rendimiento de nuestras campañas publicitarias y personalizar la experiencia del usuario.",
                  linkedCategory: "analytics",
                  cookieTable: {
                    headers: {
                      name: "Nombre",
                      domain: "Servicio",
                      description: "Descripción",
                      expiration: "Expiración",
                    },
                    body: [
                      {
                        name: "_fbp",
                        domain: "Meta Pixel",
                        description:
                          "Cookie establecida por Meta Pixel para rastrear conversiones y eventos",
                        expiration: "90 días",
                      },
                      {
                        name: "_fbc",
                        domain: "Meta Pixel",
                        description:
                          "Cookie establecida por Meta Pixel para rastrear clics en anuncios",
                        expiration: "90 días",
                      },
                      {
                        name: "fr",
                        domain: "Facebook",
                        description:
                          "Cookie utilizada por Facebook para publicidad personalizada",
                        expiration: "90 días",
                      },
                    ],
                  },
                },
                {
                  title: "Más información",
                  description:
                    'Para cualquier consulta relacionada con nuestra política de cookies, por favor <a href="/privacy">contáctanos</a>.',
                },
              ],
            },
          },
        },
      },
    });
  }, []);

  return null;
}
