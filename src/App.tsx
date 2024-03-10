import { FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import About from '@/pages/About'
import Home from '@/pages/Home'
import Rainbow from '@/pages/Rainbow'

const App: FC = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rainbow" element={<Rainbow />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
