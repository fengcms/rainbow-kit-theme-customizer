import { FC, ReactNode, createContext, useState } from 'react'

import { lightTheme } from '@rainbow-me/rainbowkit'

export const ThemeContext = createContext({
  themeDefault: lightTheme(),
  changeTheme: (_: any) => null
})

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [themeDefault, setThemeDefault] = useState<any>(lightTheme())
  const changeTheme = (value: any) => {
    setThemeDefault(value)
    return null
  }

  return <ThemeContext.Provider value={{ themeDefault, changeTheme }}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
