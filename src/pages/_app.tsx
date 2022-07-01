import type { AppProps } from "next/app";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyle, lightTheme } from "../../styles/global";
import { MainComponent } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  let item;
  if (typeof window !== "undefined") {
    item = localStorage.getItem("theme");
  }

  const [theme, setTheme] = useState(item);

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
