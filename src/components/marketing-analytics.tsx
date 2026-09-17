import Script from "next/script";

const googleMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const yandexMetrikaId = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID;

export function MarketingAnalytics() {
  return (
    <>
      {googleMeasurementId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(googleMeasurementId)}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleMeasurementId}');
            `}
          </Script>
        </>
      ) : null}

      {yandexMetrikaId ? (
        <>
          <Script id="yandex-metrika" strategy="afterInteractive">
            {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=${encodeURIComponent(yandexMetrikaId)}', 'ym');
            ym(${yandexMetrikaId}, 'init', {
              ssr: true,
              webvisor: true,
              clickmap: true,
              ecommerce: 'dataLayer',
              referrer: document.referrer,
              url: location.href,
              accurateTrackBounce: true,
              trackLinks: true
            });
          `}
          </Script>
          <noscript>
            <div>
              {/* Yandex's noscript fallback requires a plain tracking pixel. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://mc.yandex.ru/watch/${encodeURIComponent(yandexMetrikaId)}`}
                style={{ position: "absolute", left: "-9999px" }}
                alt=""
              />
            </div>
          </noscript>
        </>
      ) : null}
    </>
  );
}
