import type { AppProps } from "next/app";
import { useEffect } from "react";

import "normalize.css/normalize.css";
import "../styles/bootstrap-grid.scss";
import globalStyles from "../styles/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  useEffect(() => {
    if (window && window.location.hash.includes("_token=")) {
      window.location.replace("/admin/" + window.location.hash);
    }
  });

  return <Component {...pageProps} />;
}

export default MyApp;
