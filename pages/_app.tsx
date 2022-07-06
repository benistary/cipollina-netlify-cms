import { DefaultSeo, LogoJsonLd, SocialProfileJsonLd } from "next-seo";
import type { AppProps } from "next/app";
import "normalize.css/normalize.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import globalStyles from "../styles/globalStyles";
import SEO from "../next-seo.config";
import { externalRoutes, originUrl } from "../routes";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <>
      <DefaultSeo {...SEO} />
      <SocialProfileJsonLd
        type="Organization"
        name="Pizza Cipollina"
        url={originUrl}
        sameAs={[externalRoutes.facebook, externalRoutes.instagram]}
      />
      <LogoJsonLd logo={`${originUrl}icons/logo.jpg`} url={originUrl} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
