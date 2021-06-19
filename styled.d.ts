import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      warning: string;
      danger: string;
      success: string;
      white: string;
      gray: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
      };
    };
    screens: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    fontSize: {
      xs: string[];
      sm: string[];
      base: string[];
      lg: string[];
      xl: string[];
      '2xl': string[];
      '3xl': string[];
      '4xl': string[];
      '5xl': string[];
    };
    fontFamily: {
      sans: string[];
    };
    borderRadius: {
      base: string;
    };
  }
}
