import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TokenRegistry from './components/TokenRegistry';
import TokenInteractionPage from "./pages/TokenInteractionPage";
import type { ITokenDetail } from "./interface/ITokenDetail";

export default function App() {
  const [activeToken, setActiveToken] = useState<ITokenDetail | null>(null);

  return (
    <>
          <Navbar />
          {/* <ERC20Page /> */}

          {activeToken ? (
            <TokenInteractionPage
              tokenDetail={activeToken}
              onBack={() => setActiveToken(null)}
            />
          ) : (
            <TokenRegistry onTestToken={(tokenDetail) => setActiveToken(tokenDetail)} />
          )}
          <Footer/>
        </>
  );
};
