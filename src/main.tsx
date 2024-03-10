import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from '@/App.tsx'
import '@/i18n'
import DappProvider from '@/providers/DappProvider'
import LanguageProvider from '@/providers/LanguageProvider'
import ThemeProvider from '@/providers/ThemeProvider'
import '@/style/style.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <DappProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </DappProvider>
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>
)
