import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    element: string;
    text: string;
    input: string;
  }
}
