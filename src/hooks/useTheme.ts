import { useContext } from 'react'

import { ThemeContext } from '@/providers/ThemeProvider'

export const useTheme = () => {
  const { themeDefault, changeTheme } = useContext(ThemeContext)

  return { themeDefault, changeTheme }
}

export default useTheme
