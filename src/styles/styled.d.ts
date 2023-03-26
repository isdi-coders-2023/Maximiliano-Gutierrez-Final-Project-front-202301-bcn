import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      primary: string;
      secondary: string;
      tetiary: string;
    };
    colors: {
      regLoginColorButton: string;
      mainColorButton: string;
      siginSignupColor: string;
    };
    sizes: {
      buttonCreate: string;
      buttonLogin: string;
    };
  }
}
