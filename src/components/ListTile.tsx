import type React from "react";
import { useState } from "react";

interface ListTileProps {
  title: string;
  tag: "VIEW" | "WRITE";
  isExpanded?: boolean;
}

const ListTile: React.FC<ListTileProps> = ({ title, tag, isExpanded: initialExpanded = false }) => {
  const [isExpanded, setIsExpanded] = useState(initialExpanded);

  return (
    <div className="interaction-tile">
      <div className="tile-header" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="tile-title-group">
          <span className="tile-title">{title}</span>
          <span className={`tile-tag ${tag === "VIEW" ? "tag-view" : "tag-write"}`}>
            {tag}
          </span>
        </div>
        <span className="tile-arrow">{isExpanded ? "▲" : "▼"}</span>
      </div>

      {isExpanded && (
        <div className="tile-expanded-content">
          {tag === "VIEW" ? (
            <button className="call-button">Call</button>
          ) : (
            <div className="interaction-container">
              {/* Add inputs here if needed for specific functions */}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ListTile;
