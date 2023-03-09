import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      primary: string;
      secondary: string;
    };
    colors: {
      regLoginColorButton: string;
      mainColorButton: string;
      siginSignupColor: string;
    };
  }
}
