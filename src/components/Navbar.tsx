import type React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="tf-navbar">
      <div className="tf-navbar-left">
        <div className="tf-logo-mark" />
        <span className="tf-logo-text">Token Factory</span>
      </div>

      <nav className="tf-navbar-links" aria-label="Main navigation">
        <button type="button" className="tf-nav-link tf-nav-link--active">
          Factory
        </button>
        <button type="button" className="tf-nav-link">
          Dashboard
        </button>
        <button type="button" className="tf-nav-link">
          Docs
        </button>
        <button type="button" className="tf-nav-link">
          Audit
        </button>
      </nav>

      <div className="tf-navbar-right">
        <div className="tf-network-pill">
          <span className="tf-network-dot" />
          <span className="tf-network-label">Mainnet</span>
        </div>
        <button type="button" className="tf-primary-button">
          Connect Wallet
        </button>
      </div>
    </header>
  );
};

export default Navbar;

