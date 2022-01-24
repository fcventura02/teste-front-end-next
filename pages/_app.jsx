import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../src/css/global";
import theme from "../src/css/theme";
import icon from "../src/assets/img/favicon.png";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <link rel="shortcut icon" href={icon.src} type="image/x-icon" />
          <title>Agricultura Digital</title>
          <meta name="description" content="É Natural ser digital." />

          <meta property="og:type" content="company" />
          <meta
            property="og:url"
            content="https://agriculturadigital.vercel.app/"
          />
          <meta
            property="og:site_name"
            content="New Holland Brasil Agriculture"
          />
          <meta property="og:title" content="Agricultura Digital" />
          <meta property="og:description" content="É Natural ser digital." />
          <meta
            property="og:image"
            content="https://agriculturadigital.vercel.app/_next/static/media/banner.81b2047f.png"
          />

          <meta property="twitter:card" content="Summary" />
          <meta
            property="twitter:url"
            content="https://agriculturadigital.vercel.app/"
          />
          <meta property="twitter:title" content="Agricultura Digital" />
          <meta
            property="twitter:description"
            content="É Natural ser digital."
          />
          <meta
            property="twitter:image"
            content="https://agriculturadigital.vercel.app/_next/static/media/banner.81b2047f.png"
          />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
