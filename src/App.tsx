
import { useState } from 'react'
import SplashPage from './components/SplashPage'
import ERC20Page from './components/ERC20page'
import './App.css'
import Navbar from "./components/Navbar";

type Page = 'splash' | 'erc20'

export default function App() {
  const [page, setPage] = useState<Page>('splash')

  return (
    <div className="w-screen h-screen overflow-hidden">
      {page === 'splash' && (
        <SplashPage onComplete={() => setPage('erc20')} />
      )}
      {page === 'erc20' && (
         <Navbar />
        <ERC20Page />
      )}
    </div>
  )
}

export default App;

