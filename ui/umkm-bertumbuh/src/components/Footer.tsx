// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => (
  <footer style={footerStyle}>
    <div style={footerContainerStyle}>
      <div style={footerColumnStyle}>
        <h4 style={footerHeadingStyle}>Navigasi</h4>
        <p>FAQ</p>
      </div>

      <div style={footerColumnStyle}>
        <h4 style={footerHeadingStyle}>BIT3 TEAM</h4>
        <p>UMKM Bertumbuh dibangun di atas Azure OpenAI</p>
        <p style={subtextStyle}>
          Dilatih dari kisah-kisah sukses UMKM, strategi bisnis lulusan MBA,
          pengalaman dari experts, MVP, BMC, dan berbagai ilmu lainnya.
        </p>
      </div>

      <div style={footerColumnStyle}>
        <h4 style={footerHeadingStyle}>GovAI Hackathon</h4>
        <p>
          "Human Centered AI for Governance and Policy" oleh Kementerian
          Keuangan Republik Indonesia
        </p>
      </div>
    </div>
  </footer>
);

const footerStyle: React.CSSProperties = {
  backgroundColor: "#5e2ca5",
  color: "#ffffff",
  padding: "2rem",
  textAlign: "center",
};

const footerContainerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  maxWidth: "1200px",
  margin: "0 auto",
  textAlign: "left",
  flexWrap: "wrap",
  gap: "1rem",
};

const footerColumnStyle: React.CSSProperties = {
  flex: "1",
  minWidth: "200px",
  padding: "1rem",
};

const footerHeadingStyle: React.CSSProperties = {
  color: "#00c4b3",
  fontSize: "1.2rem",
  marginBottom: "0.5rem",
};

const subtextStyle: React.CSSProperties = {
  opacity: 0.7,
  fontSize: "0.9rem",
};

export default Footer;
