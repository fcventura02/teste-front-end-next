import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../src/css/global";
import theme from "../src/css/theme";
import icon from "../src/assets/img/favicon.png"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <link rel="shortcut icon" href={icon.src} type="image/x-icon" />
          <title>Agricultura Digital</title>
          <meta name="description" content="É Natural ser digital." />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
