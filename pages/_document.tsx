import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { getCssText } from "../stitches.config";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <link
            rel="preload"
            href="/fonts/Merriweather-Bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Merriweather-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Merriweather-Light.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Montserrat-Bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Montserrat-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Montserrat-Light.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `
@font-face {
  font-family: 'Merriweather';
  src: url(/fonts/Merriweather-Bold.woff2) format('woff2'),
    url(/fonts/Merriweather-Bold.woff) format('woff');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Merriweather';
  src: url(/fonts/Merriweather-Regular.woff2) format('woff2'),
    url(/fonts/Merriweather-Regular.woff) format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Merriweather';
  src: url(/fonts/Merriweather-Light.woff2) format('woff2'),
    url(/fonts/Merriweather-Light.woff) format('woff');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Montserrat';
  src: url(/fonts/Montserrat-Bold.woff2) format('woff2'),
    url(/fonts/Montserrat-Bold.woff) format('woff');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Montserrat';
  src: url(/fonts/Montserrat-Regular.woff2) format('woff2'),
    url(/fonts/Montserrat-Regular.woff) format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Montserrat';
  src: url(/fonts/Montserrat-Light.woff2) format('woff2'),
    url(/fonts/Montserrat-Light.woff) format('woff');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}
`,
            }}
          />

          <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script
            id="netlify-identity"
            dangerouslySetInnerHTML={{
              __html: `
               if (typeof window !== "undefined" && window.netlifyIdentity) {
                window.netlifyIdentity.on("init", user => {
                  if (!user) {
                    window.netlifyIdentity.on("login", () => {
                      document.location.href = "/admin/";
                    });
                  }
                });
              }
          `,
            }}
          />
        </body>
      </Html>
    );
  }
}
export default MyDocument;