import React from "react";
import "../main-page.css";

const MainPage: React.FC = () => {
  return (
    <main>
      <div className="main-page">
        <div className="main-header">
          <div>
            <h2>
              Token interaction
            </h2>
            <p>
              Inspect token stats and stage ERC20 actions (UI-only).
            </p>
          </div>
          <div className="token">
            <p>Token</p>
            <span>0x000000000000000000000000000000000000</span>
          </div>
        </div>

        <div className="token-stats">
          <span>
            <p>Name</p>
            <span>Mock Token</span>
          </span>
          <span>
            <p>Synbol</p>
            <span>MOCK</span>
          </span>
          <span>
            <p>Decimals</p>
            <span>18</span>
          </span>
          <span>
            <p>Total Supply</p>
            <span>100000000.00</span>
          </span>
        </div>
        
        </div>
    </main>
  );
};

export default MainPage;