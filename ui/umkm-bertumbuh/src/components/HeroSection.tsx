// src/components/HeroSection.tsx
import React from "react";
import Icon from "../assets/images/icon.png";

const sectionStyle: React.CSSProperties = {
  backgroundColor: "#5e2ca5",
  color: "#fff",
  textAlign: "center",
  width: "100vw",
  padding: "4rem 0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  height: "60vh",
  position: "relative",
};

const contentContainerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  backgroundColor: "#00c4b3",
  borderTopRightRadius: "60px",
  padding: "3rem 2rem",
  width: "90vw",
  maxWidth: "1200px",
  position: "absolute",
  left: 0,
  marginRight: "5vw",
  minHeight: "200px",
};

const iconStyle: React.CSSProperties = {
  height: "150px",
  marginRight: "1rem",
};

const titleStyle: React.CSSProperties = {
  margin: 0,
  fontSize: "2rem",
};

const descriptionStyle: React.CSSProperties = {
  margin: 0,
  fontSize: "1.5rem",
};

const additionalTextStyle: React.CSSProperties = {
  margin: 0,
  fontSize: "1rem",
  opacity: 0.8,
};

const HeroSection: React.FC = () => (
  <section style={sectionStyle}>
    <div style={contentContainerStyle}>
      <img src={Icon} alt="Icon" style={iconStyle} />

      <div>
        <h2 style={titleStyle}>
          Memajukan Bisnis UMKM Anda, dari Pendirian hingga Ekspor
        </h2>
        <p style={descriptionStyle}>
          Teman & expert konsultasi harian yang didukung AI untuk pengembangan
          strategi bisnis UMKM Anda.
        </p>
        <p style={additionalTextStyle}>
          Diatrh dari kisah-kisah sukses UMKM, strategi bisnis lulusan MBA,
          pengalaman dari experts, MVP, BMC, dan berbagai ilmu lainnya.
        </p>
      </div>
    </div>
  </section>
);

export default HeroSection;
