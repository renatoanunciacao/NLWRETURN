import { Widget } from "./components/Widget";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { Theme } from "./components/Theme";
export function App() {
  return (
    <ThemeContextProvider>
      <Theme />
    </ThemeContextProvider>
  );
}
