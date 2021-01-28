import { useEffect } from "react";

import useLocalStorage from "@shenglong/use-localstorage";

type ThemeType = "light" | "dark";

interface Options {
  key: string;
  defaultTheme: ThemeType
}

function useTheme(options?: Partial<Options>) {
  const { key = "theme", defaultTheme = "light" } = options || {};
  const [theme, setTheme] = useLocalStorage<ThemeType>(key, defaultTheme);

  function addDarkClass() {
    (document.documentElement?.classList)?.add?.("dark");
  }
  function removeDarkClass() {
    (document.documentElement?.classList)?.remove?.("dark");
  }

  function changeTheme() {
    if (theme === "light") {
      addDarkClass();
      setTheme("dark");
    } else {
      removeDarkClass();
      setTheme("light");
    }
  }

  useEffect(() => {
    if (theme === "dark") {
      addDarkClass();
    } else {
      removeDarkClass();
    }
    // eslint-disable-next-line
  }, []);

  return { theme, changeTheme }
};

export default useTheme;
