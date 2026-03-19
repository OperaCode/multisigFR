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

        <div className="token-interactions">
          <div className="interaction-tile">
            <span className="details">
              <p>transfer</p>
              <span>send an amount of token to a user's address</span>
            </span>

            <span className="interaction-container">
              <input placeholder="0x1234...abc"/>
              <input placeholder="1000"/>
              <button>Call</button>
            </span>
          </div>

          <div className="interaction-tile">
            <span className="details">
              <p>approve</p>
              <span>aan amount of token to a user's address</span>
            </span>

            <span className="interaction-container">
              <input placeholder="0x1234...abc"/>
              <input placeholder="1000"/>
              <button>Call</button>
            </span>
          </div>
        </div>
        </div>
    </main>
  );
};

export default MainPage;