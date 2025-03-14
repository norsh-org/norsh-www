/**
 * Global Context Module
 *
 * This module provides the global context for managing the theme state.
 *
 * @author Danthur Lice
 * @version 1.0.0
 * @since 1.0.0
 */

import { createContext, useContext, useState, ReactNode } from "react";

/**
 * Interface representing the global context properties.
 * @property {boolean} isDarkTheme - Indicates whether the dark theme is active.
 * @property {(isDark: boolean) => void} setIsDarkTheme - Function to update the dark theme status.
 */
interface GlobalContextProps {
  isDarkTheme: boolean;
  setIsDarkTheme: (isDark: boolean) => void;
}

/**
 * GlobalContext is used to store and provide the theme state across the application.
 */
const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

/**
 * GlobalProvider component that wraps its children with GlobalContext.
 *
 * @param {object} props - Component properties.
 * @param {ReactNode} props.children - Child components that require access to the global context.
 * @returns {JSX.Element} A provider for the global context.
 */
export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <GlobalContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};

/**
 * Custom hook to use the GlobalContext.
 *
 * @returns {GlobalContextProps} The current global context.
 * @throws {Error} Throws an error if the hook is used outside of a GlobalProvider.
 */
export const useGlobal = (): GlobalContextProps => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobal must be used within a GlobalProvider");
  }
  return context;
};
