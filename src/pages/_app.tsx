import { Fragment } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

import MainLayout from "~/layouts/MainLayout";

import "../assets/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps<{ Layout: any }>) {
  // useEffect(() => {
  //   // Remove the server-side injected CSS.
  //   const jssStyles = document.querySelector("#jss-server-side");
  //   if (jssStyles) {
  //     jssStyles.parentElement?.removeChild(jssStyles);
  //   }
  // }, []);

  const Layout = (Component as any).Layout || MainLayout;

  return (
    <Fragment>
      <Head>
        <title>Collab Clips</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Fragment>
  );
}

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    lightgrey: Palette["primary"];
    border: Palette["primary"];
  }
  interface PaletteOptions {
    lightgrey: PaletteOptions["primary"];
    border: PaletteOptions["primary"];
  }
}

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 375,
      sm: 768,
      md: 1024,
      lg: 1280,
      xl: 1440,
    },
  },
  palette: {
    primary: {
      main: "#1f2533",
    },
    lightgrey: {
      main: "#f4f4f4",
    },
    border: {
      main: "#f2f2f2",
    },
  },
  typography: {
    fontFamily: [
      "Regular",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      "sans-serif",
    ].join(","),
  },
  overrides: {
    MuiInputBase: {
      input: {
        padding: "0",
        height: "auto",
      },
    },
  },
});

export default MyApp;
