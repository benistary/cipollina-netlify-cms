import {
  DefaultSeo,
  LocalBusinessJsonLd,
  LogoJsonLd,
  SocialProfileJsonLd,
} from "next-seo";
import type { AppProps } from "next/app";
import "normalize.css/normalize.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import globalStyles from "../styles/globalStyles";
import SEO from "../next-seo.config";
import { externalRoutes, originUrl } from "../routes";
import { contact } from "../constants";
import informationsData from "../content/informations.json";

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
      <LocalBusinessJsonLd
        type="Restaurant"
        id={originUrl}
        name={SEO.title}
        description={SEO.description}
        url={originUrl}
        telephone={contact.telephone}
        address={contact.address}
        geo={{
          latitude: "48.15109553292037",
          longitude: "17.874659299999994",
        }}
        sameAs={[externalRoutes.facebook, externalRoutes.instagram]}
        openingHours={informationsData.openingHours}
      />
      {/* <OrganizationJsonLd
        type="Organization"
        logo={`${process.env.NEXT_PUBLIC_ORIGIN_URL}assets/logo.jpg`}
        legalName={nextSeoAdditionalConfig.legalName}
        name={nextSeoConfig.title || nextSeoConfig.defaultTitle || ""}
        address={nextSeoAdditionalConfig.address}
        contactPoint={nextSeoAdditionalConfig.contactPoint}
        url={process.env.NEXT_PUBLIC_ORIGIN_URL || ""}
        sameAs={[
          "https://www.facebook.com/zivaviera",
          "https://www.instagram.com/zivaviera/",
          "https://www.youtube.com/channel/UCTJq6NtgRAzjPyKCtow6DwQ",
          "https://twitter.com/ZivaViera",
          "https://open.spotify.com/show/3dcd5fotNxNnhGpNAxn7Lo",
          "https://anchor.fm/zivaviera",
          "https://podcasts.apple.com/sk/podcast/%C5%BEiv%C3%A1-viera-podcast/id1538069113",
        ]}
      /> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
