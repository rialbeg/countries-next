import type { AppProps } from "next/app";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyle, lightTheme } from "../../styles/global";
import { MainComponent } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("light");

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
