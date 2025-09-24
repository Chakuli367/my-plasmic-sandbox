import * as React from "react";

export interface BubblyButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const BubblyButton: React.FC<BubblyButtonProps> = ({ children, onClick, style }) => {
  return (
    <div
      onClick={onClick}
      style={{
        padding: "12px 24px",
        borderRadius: 24,
        background: "#f472b6",
        color: "#fff",
        fontWeight: 600,
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        transition: "all 0.2s",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        ...style
      }}
    >
      {children}
    </div>
  );
};

export default BubblyButton;
