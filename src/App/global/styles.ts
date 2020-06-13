import { createGlobalStyle, DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary: string;
    secondary: string;
    confirm: string;
    cancel: string;
  }
}

export const theme: DefaultTheme = {
  primary: "#c0392b",
  secondary: "#2c3e50",
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
    background: ${({ theme }) => theme.primary};
  }

  button {
    cursor: pointer;
  }

`;
