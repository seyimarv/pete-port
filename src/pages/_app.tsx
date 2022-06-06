import { theme } from "@themes/theme";
import GlobalStyle from "GlobalStyle";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";


function MyApp({ Component, pageProps }: AppProps) {

  return (
     <ThemeProvider theme={theme}>
       <GlobalStyle />
       <Component {...pageProps}/>
     </ThemeProvider>
  );
}

export default MyApp;
