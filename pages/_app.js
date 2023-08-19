import "@/styles/globals.css";
import Layout from "@/components/layout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Ubuntu } from "next/font/google";
import Head from "next/head";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export let theme = createTheme({
  typography: {
    fontFamily: "inherit",
  },
});

export default function App({ Component, pageProps }) {
  return (
    <main className={ubuntu.className}>
      <Head>
        <title>Sagar Rana | Portfolio</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Layout>
          <ToastContainer
            position="bottom-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Slide}
          />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </main>
  );
}
