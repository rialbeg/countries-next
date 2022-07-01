import { ThemeProps } from "../MainComponent";
import { Container, Content } from "./style";
import { BsMoon, BsMoonFill } from "react-icons/bs";

interface NavBarProps {
  theme: ThemeProps;
}

export function Navbar({ theme }: NavBarProps) {
  const toggleTheme = () => {
    theme.theme == "light" ? theme.setTheme("dark") : theme.setTheme("light");
    theme.theme == "light"
      ? localStorage.setItem("theme", "dark")
      : localStorage.setItem("theme", "light");
  };
  return (
    <Container>
      <Content>
        <p className="title">Where in the world?</p>
        <div className="toggle-theme-container">
          {theme.theme === "light" ? (
            <BsMoon size={12} />
          ) : (
            <BsMoonFill size={12} />
          )}
          <p onClick={toggleTheme}>Dark mode</p>
        </div>
      </Content>
    </Container>
  );
}
