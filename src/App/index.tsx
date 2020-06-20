import React from "react";
import Routes from "./routes";
import { GlobalStyle, theme } from "./global/styles";
import { ThemeProvider } from "styled-components";
import Providers from "./Providers";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Providers>
        <Routes />
      </Providers>
    </ThemeProvider>
  );
}

export default App;
