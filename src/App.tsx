import ERC20Page from './components/ERC20page';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TokenRegistry from './components/TokenRegistry';

export default function App() {

  return (
    <>
          <Navbar />
          <ERC20Page />
          
          <TokenRegistry/>
          <Footer/>
        </>
  );
};