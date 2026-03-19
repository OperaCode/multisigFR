const useCall = () => {
  const balanceOf = (address: string) => {
    alert(`balanceOf called with: ${address}`);
  };

  const allowance = (owner: string, spender: string) => {
    alert(`allowance called with: ${[owner, spender].join(", ")}`);
  };

  const mint = (address: string, amount: string) => {
    alert(`mint called with: ${[address, amount].join(", ")}`);
  };

  const transfer = (to: string, amount: string) => {
    alert(`transfer called with: ${[to, amount].join(", ")}`);
  };

  const transferFrom = (from: string, to: string, amount: string) => {
    alert(`transferFrom called with: ${[from, to, amount].join(", ")}`);
  };
  
  const approve = (spender: string, amount: string) => {
    alert(`approve called with: ${[spender, amount].join(", ")}`);
  }
  
  return {
    balanceOf,
    allowance,
    mint,
    transfer,
    transferFrom,
    approve
  };
}

export default useCall;