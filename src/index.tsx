import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ThemeProvider } from "styled-components";
import "typeface-caladea";
import "@fontsource/montserrat";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/Theme";
import { RouterProvider } from "react-router";
import { router } from "./routers/routes";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
