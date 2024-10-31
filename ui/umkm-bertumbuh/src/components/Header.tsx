// src/components/Header.tsx
import React from "react";
import logo from "../assets/images/logo.svg";

const Header: React.FC = () => (
  <header style={headerStyle}>
    <img src={logo} alt="UMKM Bertumbuh Logo" style={logoStyle} />
    <nav>
      <a href="#faq" style={linkStyle}>
        FAQ
      </a>
      <a href="#support" style={linkStyle}>
        Bantuan
      </a>
      <a href="#start" style={startButtonStyle}>
        Memulai
      </a>
    </nav>
  </header>
);

const headerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
  backgroundColor: "#5e2ca5",
};

const logoStyle: React.CSSProperties = {
  height: "60px",
};

const linkStyle: React.CSSProperties = {
  margin: "0 1rem",
  color: "#ffffff",
  textDecoration: "none",
};

const startButtonStyle: React.CSSProperties = {
  backgroundColor: "rgb(0, 196, 179)",
  padding: "0.5rem 1rem",
  borderRadius: "8px",
  color: "#ffffff",
  textDecoration: "none",
};

export default Header;
