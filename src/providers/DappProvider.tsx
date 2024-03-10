import { FC, ReactNode } from 'react'

import { WagmiProvider } from 'wagmi'

import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { config } from '@/config/wagmi'
import { useLanguage } from '@/hooks/useLanguage'
import { useTheme } from '@/hooks/useTheme'

const queryClient = new QueryClient()

const DappProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { currLanguageCode } = useLanguage()
  const { themeDefault } = useTheme()
  // console.log(JSON.stringify(darkTheme(), null, 2))
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          locale={currLanguageCode}
          theme={themeDefault}
          appInfo={{
            learnMoreUrl: 'https://ethereum.org/en/learn/'
          }}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default DappProvider
