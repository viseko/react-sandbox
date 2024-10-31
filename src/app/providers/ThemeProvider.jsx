import { createContext} from "react";
import useTheme from "../hooks/useTheme";

const ThemeContext = createContext();

export default function ThemeProvider({children}) {
  const [theme, setTheme] = useTheme("light");

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
};

export {ThemeContext}