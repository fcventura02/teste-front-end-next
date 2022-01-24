import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../src/css/global";
import theme from "../src/css/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
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
