import { useEffect, useState } from "react";
import { ethers } from "ethers";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export function useWallet() {
  const [account, setAccount] = useState<string | null>(null);

  // connect wallet
  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("MetaMask is not installed");
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      setAccount(accounts[0]);
    } catch (err) {
      console.error(err);
    }
  };

  // auto detect already connected wallet
  const checkConnection = async () => {
    if (!window.ethereum) return;

    const provider = new ethers.BrowserProvider(window.ethereum);
    const accounts = await provider.listAccounts();

    if (accounts.length > 0) {
      setAccount(accounts[0].address);
    }
  };

  useEffect(() => {
    checkConnection();
  }, []);

  return { account, connectWallet };
}