/* eslint-disable @next/next/no-title-in-document-head */
import "styles/globals.css";
import "styles/main.css";
import "animate.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Head>
        <title>Dims | Dev</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Hi, I'm Dimas Triana. I'm a Front End Developer & UI Designer."
        />
        <meta
          name="keywords"
          content="Dimas Triana, Dimas, Triana,dimstry, dimas, triana, dimas triana Front End Developer"
        />
        <meta name="author" content="Dimas Triana" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="HandheldFriendly" content="True" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
