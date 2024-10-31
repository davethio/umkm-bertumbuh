// src/components/ContentSection.tsx
import React from "react";

interface ContentSectionProps {
  title: string;
  description: string;
  image: string;
  customStyle?: React.CSSProperties;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  description,
  image,
  customStyle,
}) => (
  <section style={{ ...sectionStyle, ...customStyle }}>
    <div style={textContainerStyle}>
      <h3 style={titleStyle}>{title}</h3>
      <p style={descriptionStyle}>{description}</p>
    </div>
    <div style={imageContainerStyle}>
      <img src={image} alt="Conversation" style={imageStyle} />
    </div>
  </section>
);

const sectionStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#00c4b3", // Teal color
  padding: "2rem",
  borderRadius: "60px 0px 60px 0px", // Default border radius
  marginBottom: "2rem",
  maxWidth: "80%",
  marginLeft: "auto",
  marginRight: "auto",
  position: "relative",
};

const textContainerStyle: React.CSSProperties = {
  textAlign: "center",
  marginBottom: "1.5rem",
  color: "#ffffff",
};

const titleStyle: React.CSSProperties = {
  margin: 0,
  fontSize: "2rem",
  fontWeight: "bold",
};

const descriptionStyle: React.CSSProperties = {
  margin: "0.5rem 0 0 0",
  fontSize: "1rem",
  opacity: 0.9,
};

const imageContainerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  marginTop: "1rem",
};

const imageStyle: React.CSSProperties = {
  width: "90%",
  maxWidth: "500px",
  height: "auto",
  borderRadius: "15px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
};

export default ContentSection;
