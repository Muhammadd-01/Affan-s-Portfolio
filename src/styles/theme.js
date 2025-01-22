import { createGlobalStyle } from "styled-components"

export const lightTheme = {
  body: "#f1f1f1",
  text: "#121212",
  primary: "#6200ee",
  secondary: "#03dac6",
  background: "linear-gradient(135deg, #ffffff 0%, #e6f7ff 100%)",
}

export const darkTheme = {
  body: "#121212",
  text: "#f1f1f1",
  primary: "#bb86fc",
  secondary: "#03dac6",
  background: "linear-gradient(135deg, #2c3e50 0%, #000000 100%)",
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: 'Roboto', sans-serif;
    transition: all 0.3s linear;
  }

  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
  }

  button {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.body};
    border: none;
    cursor: pointer;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    transition: all 0.3s ease;

    &:hover {
      background: ${({ theme }) => theme.secondary};
    }
  }
`

