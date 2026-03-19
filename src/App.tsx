import { useState } from 'react'
// import SplashPage from './components/SplashPage'
import TokenInteractionPage from "./pages/TokenInteractionPage";
import ERC20Page from './components/ERC20page';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

type Page = 'splash' | 'main'

export default function App() {
  // const [page, setPage] = useState<Page>('splash')

  return (
    <>
      {/* {page === 'splash' && (
        <SplashPage onComplete={() => setPage('main')} />
      )} */}

      {/* {page === 'main' && ( */}
        <>
          <Navbar />
          <ERC20Page />
          <TokenInteractionPage tokenDetail={{
            name: "Group B Token",
            symbol: "GRP-B",
            decimals: 18,
            totalSupply: "100000000"
          }}/>
          <Footer/>
        </>
      {/* )} */}
    </>
  );
};
