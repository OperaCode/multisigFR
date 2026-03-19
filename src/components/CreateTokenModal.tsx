import React, { useState } from "react";

interface CreateTokenModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreateTokenModal({
  isOpen,
  onClose,
}: CreateTokenModalProps) {
  const [form, setForm] = useState({
    tokenName: "",
    symbol: "",
    decimals: "18",
    initialSupply: "1000000",
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.style.borderColor = "rgba(0,229,255,0.35)";
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(10,15,30,0.75)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      {/* Modal Card */}
      <div
        className="w-full max-w-[480px] rounded-2xl overflow-hidden"
        style={{
          background: "linear-gradient(145deg, var(--bg-light), #111827)",
          boxShadow:
            "0 25px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)",
        }}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        <div className="p-6 md:p-8">
          {/* close button */}
          <div className="flex items-center justify-between mb-5 cursor-pointer">
            <span
              className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full"
              style={{
                background: "linear-gradient(90deg, var(--accent-cyan), #00bcd4)",
                color: "var(--bg-darkest)",
              }}
            >
              Step 01: Input
            </span>
            <button
              onClick={onClose}
              className="w-7 h-7 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ background: "rgba(255,255,255,0.08)", outlineColor: "var(--accent-blue)" }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M1 1l10 10M11 1L1 11"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Title */}
          <h2 className="text-white text-2xl md:text-[1.65rem] font-bold mb-1 tracking-tight">
            Create Token
          </h2>
          <p className="text-[var(--text-muted)] text-sm mb-6 md:mb-7">
            Configure your ERC-20 asset parameters.
          </p>

          {/* Form fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-semibold tracking-widest uppercase text-[var(--text-muted)]">
                Token Name
              </label>
              <input
                type="text"
                name="tokenName"
                value={form.tokenName}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="e.g. Neon Sapphire"
                className="w-full rounded-lg px-3 md:px-4 py-2 md:py-3 text-sm text-white placeholder-[#4a5568] outline-none transition-colors focus:outline-2 focus:outline-offset-2"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-card)",
                  outlineColor: "var(--accent-blue)",
                }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-semibold tracking-widest uppercase text-[var(--text-muted)]">
                Symbol
              </label>
              <input
                type="text"
                name="symbol"
                value={form.symbol}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="e.g. NSPH"
                className="w-full rounded-lg px-3 md:px-4 py-2 md:py-3 text-sm text-white placeholder-[#4a5568] outline-none transition-colors focus:outline-2 focus:outline-offset-2"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-card)",
                  outlineColor: "var(--accent-blue)",
                }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-semibold tracking-widest uppercase text-[var(--text-muted)]">
                Decimals
              </label>
              <input
                type="number"
                name="decimals"
                value={form.decimals}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="w-full rounded-lg px-3 md:px-4 py-2 md:py-3 text-sm text-white outline-none transition-colors focus:outline-2 focus:outline-offset-2"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-card)",
                  outlineColor: "var(--accent-blue)",
                }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-semibold tracking-widest uppercase text-[var(--text-muted)]">
                Initial Supply
              </label>
              <input
                type="number"
                name="initialSupply"
                value={form.initialSupply}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="w-full rounded-lg px-3 md:px-4 py-2 md:py-3 text-sm text-white outline-none transition-colors focus:outline-2 focus:outline-offset-2"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-card)",
                  outlineColor: "var(--accent-blue)",
                }}
              />
            </div>
          </div>

          {/* Deploy button */}
          <button
            className="w-full py-3 md:py-4 rounded-xl text-[var(--bg-darkest)] font-bold text-sm tracking-wide hover:brightness-110 transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-95"
            style={{
              background: "linear-gradient(90deg, var(--accent-cyan), #00bcd4)",
              boxShadow: "0 4px 24px rgba(0,229,255,0.25)",
              outlineColor: "var(--accent-blue)",
            }}
          >
            Deploy Token
          </button>
        </div>
      </div>
    </div>
  );
}
