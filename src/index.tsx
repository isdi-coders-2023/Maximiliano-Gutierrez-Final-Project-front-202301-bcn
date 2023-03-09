import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ThemeProvider } from "styled-components";
import App from "./App";
import "typeface-caladea";
import "@fontsource/montserrat";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/Theme";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyles />
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
