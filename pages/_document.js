import config from "@config/config.json";
import { Head, Html, Main, NextScript } from "next/document";
import Script from 'next/script'

const Document = () => {
  // destructuring items from config object
  const { favicon } = config.site;
  return (
    <Html lang="en">
      <Head>
        <Script id="google-analytics" strategy="afterInteractive">
          {
            `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NRQCGD32');
            `
          }
        </Script>
        {/* favicon */}
        <link
          rel="shortcut icon"
          type="image/png"
          sizes="32x32"
          href={favicon}
        />
        {/* theme meta */}
        <meta name="theme-name" content="next-boilerplate" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#000"
        />
      </Head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NRQCGD32" height="0" width="0" style="display: none; visibility: hidden;" />`,
          }}
        />
        <Main />
        {/* <TwSizeIndicator /> */}
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
