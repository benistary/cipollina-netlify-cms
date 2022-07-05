import type { AppProps } from "next/app";
import "normalize.css/normalize.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import globalStyles from "../styles/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return <Component {...pageProps} />;
}

export default MyApp;
