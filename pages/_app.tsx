import type { AppProps } from "next/app";

import "normalize.css/normalize.css";
import "../styles/bootstrap-grid.scss";
import globalStyles from "../styles/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return <Component {...pageProps} />;
}

export default MyApp;
