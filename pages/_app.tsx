import React from "react";
import { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";

const Body = createGlobalStyle`
html {
  --text-color = #1a1a1a;
}

body {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;

  color: var(--text-color);
  font-family: "Segoe UI", sans-serif;
}
`;

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Body />
    <Component {...pageProps} />
  </>
);

export default App;
