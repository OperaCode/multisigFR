import { useState } from "react";
import CreateTokenModal from "./CreateTokenModal";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        className="w-full flex items-center justify-between px-6 md:px-10 py-0 relative z-50"
        style={{
          background: "rgba(10,15,30,0.72)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          borderBottom: "1px solid rgba(0,229,255,0.08)",
          height: "58px",
          boxShadow: "0 1px 0 rgba(0,229,255,0.06), 0 4px 32px rgba(0,0,0,0.4)",
        }}
      >
        {/* Left — Logo */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Diamond logo mark */}
          <div className="relative flex items-center justify-center w-8 h-8 flex-shrink-0">
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, rgba(0,229,255,0.15), rgba(0,100,255,0.08))",
                border: "1px solid rgba(0,229,255,0.3)",
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                boxShadow: "0 0 12px rgba(0,229,255,0.15)",
              }}
            />
            <span
              className="relative font-black text-[10px] tracking-wider"
              style={{
                color: "#00e5ff",
                textShadow: "0 0 8px rgba(0,229,255,0.6)",
                fontFamily: "'Courier New', monospace",
              }}
            >
              GB
            </span>
          </div>
          <div className="flex flex-col leading-none hidden sm:flex">
            <span
              className="text-[15px] font-bold tracking-[0.08em]"
              style={{
                color: "#dde6f0",
                fontFamily: "'Courier New', monospace",
              }}
            >
              GROUP<span style={{ color: "var(--accent-cyan)" }}>B</span>
            </span>
            <span
              className="text-[8px] tracking-[0.22em] uppercase"
              style={{ color: "rgba(0,229,255,0.4)" }}
            >
              ERC-20 Factory
            </span>
          </div>
        </div>

        {/* Center — Nav links */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {["Factory", "Dashboard", "Docs", "Audit"].map((item, i) => (
            <button
              key={item}
              type="button"
              className="relative px-4 py-1.5 text-[12px] tracking-[0.1em] uppercase font-medium transition-all duration-200"
              style={{
                color: i === 0 ? "var(--accent-cyan)" : "rgba(156,163,201,0.7)",
                fontFamily: "'Courier New', monospace",
                background: i === 0 ? "rgba(0,229,255,0.06)" : "transparent",
                border: i === 0 ? "1px solid rgba(0,229,255,0.2)" : "1px solid transparent",
                borderRadius: "4px",
              }}
              onMouseEnter={e => {
                if (i !== 0) {
                  e.currentTarget.style.color = "var(--accent-cyan)"
                  e.currentTarget.style.borderColor = "rgba(0,229,255,0.15)"
                  e.currentTarget.style.background = "rgba(0,229,255,0.04)"
                }
              }}
              onMouseLeave={e => {
                if (i !== 0) {
                  e.currentTarget.style.color = "rgba(156,163,201,0.7)"
                  e.currentTarget.style.borderColor = "transparent"
                  e.currentTarget.style.background = "transparent"
                }
              }}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Right — Network + CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Network badge */}
          <div
            className="flex items-center gap-2 px-3 py-1.5"
            style={{
              background: "rgba(0,229,255,0.04)",
              border: "1px solid rgba(0,229,255,0.12)",
              borderRadius: "4px",
            }}
          >
            <span
              className="w-[6px] h-[6px] rounded-full flex-shrink-0"
              style={{
                background: "#00e5ff",
                boxShadow: "0 0 6px rgba(0,229,255,0.8)",
                animation: "navPulse 2s ease-in-out infinite",
              }}
            />
            <span
              className="text-[10px] tracking-[0.18em] uppercase"
              style={{ color: "rgba(0,229,255,0.6)", fontFamily: "'Courier New', monospace" }}
            >
              Sepolia
            </span>
          </div>

          {/* CTA button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="relative flex items-center gap-2 px-5 py-2 text-[11px] tracking-[0.18em] uppercase font-bold transition-all duration-200 overflow-hidden group"
            style={{
              background: "rgba(0,229,255,0.08)",
              border: "1px solid rgba(0,229,255,0.35)",
              color: "var(--accent-cyan)",
              fontFamily: "'Courier New', monospace",
              clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
              boxShadow: "0 0 20px rgba(0,229,255,0.08), inset 0 0 20px rgba(0,229,255,0.03)",
              textShadow: "0 0 10px rgba(0,229,255,0.5)",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "rgba(0,229,255,0.14)"
              e.currentTarget.style.borderColor = "rgba(0,229,255,0.6)"
              e.currentTarget.style.boxShadow = "0 0 28px rgba(0,229,255,0.2), inset 0 0 28px rgba(0,229,255,0.06)"
              e.currentTarget.style.textShadow = "0 0 16px rgba(0,229,255,0.9)"
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "rgba(0,229,255,0.08)"
              e.currentTarget.style.borderColor = "rgba(0,229,255,0.35)"
              e.currentTarget.style.boxShadow = "0 0 20px rgba(0,229,255,0.08), inset 0 0 20px rgba(0,229,255,0.03)"
              e.currentTarget.style.textShadow = "0 0 10px rgba(0,229,255,0.5)"
            }}
          >
            {/* shimmer on hover */}
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background: "linear-gradient(105deg, transparent 30%, rgba(0,229,255,0.08) 50%, transparent 70%)",
              }}
            />
            <span
              className="w-[5px] h-[5px] rounded-full flex-shrink-0"
              style={{
                background: "var(--accent-cyan)",
                boxShadow: "0 0 6px var(--accent-cyan)",
              }}
            />
            Create Token
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col justify-center gap-[5px] p-2 transition-all"
          style={{ background: "transparent", border: "none" }}
          aria-label="Toggle mobile menu"
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              className="block transition-all duration-300"
              style={{
                width: i === 1 ? "14px" : "20px",
                height: "1.5px",
                background: "var(--accent-cyan)",
                boxShadow: "0 0 4px rgba(0,229,255,0.5)",
                transform: isMobileMenuOpen
                  ? i === 0 ? "rotate(45deg) translateY(6.5px)"
                  : i === 1 ? "scaleX(0)"
                  : "rotate(-45deg) translateY(-6.5px)"
                  : "none",
                opacity: isMobileMenuOpen && i === 1 ? 0 : 1,
                marginLeft: i === 1 ? "auto" : "0",
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className="md:hidden w-full overflow-hidden transition-all duration-300"
        style={{
          maxHeight: isMobileMenuOpen ? "300px" : "0",
          background: "rgba(8,12,24,0.96)",
          backdropFilter: "blur(18px)",
          borderBottom: isMobileMenuOpen ? "1px solid rgba(0,229,255,0.08)" : "none",
        }}
      >
        <div className="flex flex-col gap-1 p-4">
          {["Factory", "Dashboard", "Docs", "Audit"].map((item, i) => (
            <button
              key={item}
              type="button"
              className="text-left px-4 py-3 text-[12px] tracking-[0.1em] uppercase font-medium transition-all duration-200"
              style={{
                color: i === 0 ? "var(--accent-cyan)" : "rgba(156,163,201,0.7)",
                fontFamily: "'Courier New', monospace",
                background: i === 0 ? "rgba(0,229,255,0.06)" : "transparent",
                border: "1px solid",
                borderColor: i === 0 ? "rgba(0,229,255,0.15)" : "transparent",
                borderRadius: "4px",
              }}
            >
              {item}
            </button>
          ))}
          <div className="pt-3 flex flex-col gap-2 border-t" style={{ borderColor: "rgba(0,229,255,0.08)" }}>
            <div className="flex items-center gap-2 px-4 py-2">
              <span className="w-[6px] h-[6px] rounded-full" style={{ background: "#00e5ff", boxShadow: "0 0 6px rgba(0,229,255,0.8)" }} />
              <span className="text-[10px] tracking-[0.18em] uppercase" style={{ color: "rgba(0,229,255,0.5)", fontFamily: "'Courier New', monospace" }}>
                Sepolia Testnet
              </span>
            </div>
            <button
              onClick={() => { setIsModalOpen(true); setIsMobileMenuOpen(false); }}
              className="w-full py-3 text-[11px] tracking-[0.18em] uppercase font-bold"
              style={{
                background: "rgba(0,229,255,0.08)",
                border: "1px solid rgba(0,229,255,0.3)",
                color: "var(--accent-cyan)",
                fontFamily: "'Courier New', monospace",
                borderRadius: "4px",
                textShadow: "0 0 10px rgba(0,229,255,0.5)",
              }}
            >
              Create Token
            </button>
          </div>
        </div>
      </div>

      <CreateTokenModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <style>{`
        @keyframes navPulse {
          0%, 100% { box-shadow: 0 0 6px rgba(0,229,255,0.8); opacity: 1; }
          50%       { box-shadow: 0 0 14px rgba(0,229,255,1), 0 0 24px rgba(0,229,255,0.4); opacity: 0.7; }
        }
      `}</style>
    </>
  );
}