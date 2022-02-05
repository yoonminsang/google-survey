/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
// import { Theme } from '@mui/material/styles';

interface CustomTheme {
  mobile: string;
  tablet: string;
  desktop: string;
  grey: string;
  lightGrey: string;
  darkGrey: string;
  white: string;
}

declare module '@mui/material/styles' {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}

// import 'styled-components';

// declare module 'styled-components' {
//   export interface DefaultTheme {
//     mobile: string;
//     tablet: string;
//     desktop: string;
//     grey: string;
//     lightGrey: string;
//     darkGrey: string;
//     white: string;
//   }
// }
