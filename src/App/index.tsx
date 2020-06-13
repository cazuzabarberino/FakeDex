import React from "react";
import Routes from "./routes";
import { GlobalStyle, theme } from "./global/styles";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
