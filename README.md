# MultisigLabs — Multisig Wallet Frontend

A decentralized multisig wallet interface built with React, TypeScript, and Tailwind CSS v4, running on **Ethereum Sepolia testnet**.

## 🎨 Features

- ✅ Landing page with contract and signer overview
- ✅ Home dashboard with live stats and transaction queue
- ✅ Transactions page with real-time queue and history tabs
- ✅ Approve transactions — initiator approval + signer approval flow
- ✅ Create transactions with redirect to approve page
- ✅ Change signer (owner only)
- ✅ Transfer ownership (owner only)
- ✅ Simulated wallet address switcher (simulate different signers)
- ✅ LocalStorage-persisted transaction state (survives page refresh)
- ✅ Reactive store — all pages update in real time on every action
- ✅ Responsive layout — sidebar on desktop, drawer on mobile
- ✅ Settings restricted to contract owner only
- ✅ Dark theme with mint green (`#7FFFD4`) accents
- ✅ Ready for live ABI + wagmi integration (dual-mode service)

## 📁 Project Structure

```
src/
├── abis/
│   └── index.ts                  ← Multisig + ERC20 ABIs
├── components/
│   ├── buttons/
│   │   └── Button.tsx
│   ├── cards/
│   │   ├── StatsCard.tsx
│   │   └── TransactionCard.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   └── Layout.tsx
│   └── wallet/
│       ├── AddressSwitcher.tsx   ← Simulate different signers
│       └── WalletButton.tsx      ← Real MetaMask connect (live mode)
├── config/
│   └── wagmi.ts                  ← Wagmi + Sepolia config
├── context/
│   └── WalletContext.tsx         ← Global connected address state
├── hooks/
│   ├── useAccounts.ts
│   ├── useTransactions.ts        ← Subscribes to transactionStore
│   ├── useWallet.ts              ← Wagmi wallet connection
│   ├── useContract.ts            ← On-chain reads (balance, signers)
│   └── useModal.ts
├── pages/
│   ├── Landing.tsx
│   ├── Home.tsx
│   ├── Transactions.tsx
│   ├── CreateTransaction.tsx
│   ├── ApproveTransaction.tsx
│   ├── ChangeSigner.tsx
│   └── ChangeOwner.tsx
├── services/
│   └── multisigService.ts        ← Dual-mode: simulation + live contract calls
├── store/
│   └── transactionStore.ts       ← Reactive localStorage-backed store
├── types/
│   └── IMultisig.ts
├── utils/
│   └── mockData.ts               ← Single account + 4 owners, no mock txns
├── App.tsx
├── main.tsx
└── index.css
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- MetaMask (for live mode)

### Installation

```bash
# Install dependencies
npm install

# Install required packages
npm install react-router-dom wagmi viem @tanstack/react-query
npm install -D @types/react-router-dom
```

### Development

```bash
npm run dev
# Open http://localhost:5173
```

### Production Build

```bash
npm run build
# Output in dist/
```

## 🔑 Contract Addresses (Sepolia)

Update these in `src/utils/mockData.ts` once deployed:

```ts
export const mockAccount: Account = {
  name: 'MultisigLabs',
  address: '0xYOUR_MULTISIG_CONTRACT',   // Multisig.sol deployment
  tokenAddress: '0xYOUR_ERC20_CONTRACT', // ERC20 token deployment
  threshold: 2,
  // ...
};
```

> The ERC20 token is deployed first, then passed as `_token` to the Multisig constructor which mints `10,000,000e18` tokens to itself on deployment.

## 🎯 Transaction Flow

```
1. Signer creates transaction  →  /new-transaction
         ↓
2. Redirected to /approve?txId=xxx&role=initiator
         ↓
3. Initiator clicks "Approve as Initiator"  (approveTxnWithId)
         ↓
4. Other signers visit /approve, see pending tx, click "Approve"  (approveTransaction)
         ↓
5. When confirmations >= threshold → auto-executes, status → "executed"
```

## 🏗️ Write Functions (6 Simulated)

| # | UI Action | Contract Function | Access |
|---|-----------|------------------|--------|
| 1 | Create Transaction | `createATransaction(to, amount)` | Any signer |
| 2 | Approve as Initiator | `approveTxnWithId(txnId)` | Initiator only |
| 3 | Approve as Signer | `approveTransaction(txnId)` | Any signer |
| 4 | Cancel Transaction | `cancelTxn(txnId)` | Initiator only |
| 5 | Change Signer | `changeSigner(old, new)` | Owner only |
| 6 | Transfer Ownership | `changeOwner(newOwner)` | Owner only |

## 🔄 Simulation vs Live Mode

The service is **dual-mode** — it runs simulation by default, switches to live contract calls automatically when a wallet is connected on Sepolia.

```ts
// Simulation (no wallet needed)
await multisigService.createTransaction(accountId, to, value, data, address);

// Live (pass clients from useWallet())
await multisigService.createTransaction(accountId, to, value, data, address, {
  walletClient,
  publicClient,
  contractAddress: '0x...',
});
```

Pages auto-detect which mode to use based on `isConnected && !isWrongNetwork`.

## 💾 Data Persistence

Transactions are stored in `localStorage` under key `multisig_transactions_v1` as a JSON array. They survive page refreshes and browser restarts until explicitly cleared.

```js
// Clear all transaction data from browser console:
localStorage.removeItem('multisig_transactions_v1'); location.reload();
```

Or use the **Reset Data** button on the Home page.

## 👥 Simulated Signers

Switch between signers using the **address switcher** in the top-right header to simulate different wallet addresses approving transactions:

| # | Name | Role |
|---|------|------|
| ★ | Henry P | Contract owner (Settings access) |
| 2 | Signer 22 | Signer |
| 3 | Signer 8 | Signer |
| 4 | Alice K | Signer |

> Settings (Change Signer, Transfer Ownership) are only visible when acting as the contract owner (★ Henry P).

## 🎨 Color Scheme

```css
/* src/index.css */
@theme {
  --color-primary: #7fffd4;
  --color-primary-hover: #6eeec3;
  --color-primary-active: #5dddb2;
}
```

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#000000` | Page background |
| Card | `#1a1a1a` | Cards, panels |
| Surface | `#111111` | Sidebar, header |
| Primary | `#7FFFD4` | CTAs, active states, accents |
| Text | `#FFFFFF` | Headings |
| Muted | `#9CA3AF` | Secondary text |

## 🔌 Going Live (Next Steps)

1. Deploy ERC20 token on Sepolia → get `tokenAddress`
2. Deploy `Multisig.sol` passing `[signerAddresses]` and `tokenAddress` → get `address`
3. Update `src/utils/mockData.ts` with real addresses
4. Update `mockOwners` with real signer wallet addresses
5. Connect MetaMask — the UI switches to live mode automatically
6. Use `useContract.ts` hooks to read live balance and signers on-chain

## 🐛 Troubleshooting

**Tailwind styles not working**
- Ensure `@import "tailwindcss";` is the first line of `index.css`
- No `tailwind.config.js` needed — Tailwind v4 uses `@theme` in CSS
- Restart dev server after CSS changes

**Transactions not showing after refresh**
- Check `localStorage` → Application tab → `multisig_transactions_v1`
- If missing, the store initialised before `seedMockData()` ran — check `main.tsx` calls `seedMockData()` before `ReactDOM.createRoot()`

**Settings not visible**
- Switch to **Henry P** (★ owner) in the address switcher top-right

**"Only owners can create transactions" error**
- The connected address must be one of the 4 signers in `mockOwners`
- Switch to a valid signer in the address switcher

## 📝 License

MIT