import type React from "react";

interface ListTileProps {
  title: string;
  tag: "VIEW" | "WRITE";
  isExpanded: boolean;
  onToggle: () => void;
  placeholders: string[] | null;
}

const ListTile: React.FC<ListTileProps> = ({
  title,
  tag,
  isExpanded,
  onToggle,
  placeholders,
}) => {
  return (
    <div className={`interaction-tile ${isExpanded ? "tile--expanded" : ""}`}>
      <div className="tile-header" onClick={onToggle}>
        <div className="tile-title-group">
          <span className="tile-title">{title}</span>
          <span
            className={`tile-tag ${tag === "VIEW" ? "tag-view" : "tag-write"}`}
          >
            {tag}
          </span>
        </div>
        <span className="tile-arrow">▼</span>
      </div>

      <div className="tile-accordion-wrapper">
        <div className="tile-accordion-inner">
          <div className="tile-expanded-content">
            {tag === "VIEW" ? (
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  width: "100%",
                  flexWrap: "wrap",
                }}
              >
                {placeholders?.map((placeholder, index) => (
                  <input
                    key={index}
                    className="load-token-input"
                    style={{ flex: 1, height: "40px" }}
                    placeholder={placeholder}
                  />
                ))}
                <button className="call-button">Call</button>
              </div>
            ) : (
              <div className="interaction-container">
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    width: "100%",
                    flexWrap: "wrap",
                  }}
                >
                  <input
                    className="load-token-input"
                    style={{ flex: 1, height: "40px" }}
                    placeholder="address"
                  />
                  <input
                    className="load-token-input"
                    style={{ flex: 1, height: "40px" }}
                    placeholder="amount"
                  />
                  {title == "transferFrom" && (
                    <input
                      className="load-token-input"
                      style={{ flex: 1, height: "40px" }}
                      placeholder="amount"
                    />
                  )}

                  <button
                    className="call-button"
                    style={{
                      background: "var(--accent-purple)",
                      boxShadow: "0 0 12px rgba(168, 85, 247, 0.4)",
                    }}
                  >
                    Call
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListTile;
