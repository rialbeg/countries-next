import { ThemeProps } from "../MainComponent";

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
    <div>
      <p>Where in the world?</p>
      <div>
        <a href="#" onClick={toggleTheme}>
          Dark mode
        </a>
      </div>
    </div>
  );
}
