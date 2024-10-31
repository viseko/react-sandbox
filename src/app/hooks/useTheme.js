import { useState, useEffect } from "react";

export default function useTheme(themeDefault) {
  const [theme, setTheme] = useState(() => (
    localStorage.getItem("theme") || themeDefault
  ));

  useEffect(()=> {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];
}