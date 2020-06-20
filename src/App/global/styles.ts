import { createGlobalStyle, DefaultTheme } from "styled-components";

interface colorThemeInterface {
  dark: string;
  light: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    primary: colorThemeInterface;
    secondary: colorThemeInterface;
    confirm: string;
    cancel: string;
  }
}

export const theme: DefaultTheme = {
  primary: {
    dark: "#2c3e50",
    light: "#34495e",
  },
  secondary: {
    dark: "#c0392b",
    light: "#e74c3c",
  },
  confirm: "#2ecc71",
  cancel: "#e74c3c",
};

export const GlobalStyle = createGlobalStyle`

  *{
    margin : 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    font-size: 16px;
    color: white;
    background: ${({ theme }) => theme.primary.light};
  }

  button {
    cursor: pointer;
  }

`;
