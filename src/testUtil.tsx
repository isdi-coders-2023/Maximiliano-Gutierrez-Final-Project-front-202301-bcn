import { PreloadedState } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { RootState, setupStore, store } from "./store/store";
import { RouterProvider } from "react-router";
import { ThemeProvider } from "styled-components";
import { getComponentRouter, router } from "./routers/routes";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "../src/styles/Theme";

const renderWithProviders = (
  ui: React.ReactElement,
  preloadedState?: PreloadedState<RootState>
) => {
  const testStore = preloadedState ? setupStore(preloadedState) : store;

  const Wrapper = ({ children }: PropsWithChildren): JSX.Element => {
    return (
      <Provider store={testStore}>
        <ThemeProvider theme={theme}>
          {children}
          <GlobalStyles />
        </ThemeProvider>
      </Provider>
    );
  };

  return render(ui, { wrapper: Wrapper });
};

export const renderRouterWithProviders = (
  ui?: React.ReactElement,
  preloadedState?: PreloadedState<RootState>
) => {
  const routerWithProvider = ui ? getComponentRouter(ui) : router;

  return renderWithProviders(
    <RouterProvider router={routerWithProvider}></RouterProvider>,
    preloadedState
  );
};

export default renderWithProviders;
