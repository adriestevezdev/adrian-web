"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import * as CookieConsent from "vanilla-cookieconsent";

export default function MetaPixel() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // Verificar si ya hay consentimiento al cargar
    const checkConsent = () => {
      const accepted = CookieConsent.acceptedService(
        "meta_pixel",
        "analytics"
      );
      setHasConsent(accepted);
    };

    // Verificar consentimiento inicial
    checkConsent();

    // Escuchar cambios en el consentimiento
    const handleConsentChange = () => {
      checkConsent();
    };

    window.addEventListener("cc:onConsent", handleConsentChange);
    window.addEventListener("cc:onChange", handleConsentChange);

    return () => {
      window.removeEventListener("cc:onConsent", handleConsentChange);
      window.removeEventListener("cc:onChange", handleConsentChange);
    };
  }, []);

  // Solo cargar Meta Pixel si hay consentimiento
  if (!hasConsent) {
    return null;
  }

  return (
    <>
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1265042991231774');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1265042991231774&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
    </>
  );
}
