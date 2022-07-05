import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyle, lightTheme } from "../../styles/global";
import { MainComponent } from "../components";
import NProgress from "nprogress";
import "../../public/nprogress.css";

function MyApp({ Component, pageProps }: AppProps) {
  let item;
  if (typeof window !== "undefined") {
    item = localStorage.getItem("theme");
  }

  const [theme, setTheme] = useState(item);

  const router = useRouter();

  useEffect(() => {
    const handleStart = (url: string) => {
      console.log(`Loading: ${url}`);
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return (
    <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
      <MainComponent theme={{ theme, setTheme }}>
        <Component {...pageProps} />
        <GlobalStyle />
      </MainComponent>
    </ThemeProvider>
  );
}

export default MyApp;
