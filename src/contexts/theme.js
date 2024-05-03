import { createContext, useContext } from "react";

export const ThemeContext = createContext(
    // takes only one Object 
  {
    // this will have initial value of the variables
    // THEY WILL BE OVERWRITTEN BY APP.JSX
    themeMode: "dark",
    darkTheme: () => {},
    lightTheme: () => {},
  },
);

export const ThemeProvider = ThemeContext.Provider;

// can also add ane export coustom hooks

// we are creating this hook so that we dont have to import usecontext,theme everytime and we can use it directly from this hook
export default function useTheme() {
  // usetheme func name
  return useContext(ThemeContext);
}
