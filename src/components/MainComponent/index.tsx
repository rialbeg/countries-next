import { ReactNode } from "react";
import { Navbar } from "../Navbar";

export interface ThemeProps {
  theme: string;
  setTheme: (theme: string) => void;
}

interface MainComponentProps {
  children: ReactNode;
  theme: ThemeProps;
}

export function MainComponent({ children, theme }: MainComponentProps) {
  return (
    <>
      <Navbar theme={theme} />
      <>{children}</>
    </>
  );
}
