// src/components/FAQSection.tsx
import React from "react";

const FAQSection: React.FC = () => (
  <section id="faq" style={sectionStyle}>
    <h4 style={headingStyle}>Tanya Jawab</h4>
    <div style={faqContainerStyle}>
      {faqItems.map((faq, index) => (
        <div key={index} style={faqCardStyle}>
          <p style={questionStyle}>{faq.question}</p>
          <p style={answerStyle}>{faq.answer}</p>
        </div>
      ))}
      <div style={contactCardStyle}>
        <p>Hubungi contact center kami jika ada pertanyaan lebih lanjut.</p>
        <button style={contactButtonStyle}>Kontak Kami</button>
      </div>
    </div>
  </section>
);

const sectionStyle: React.CSSProperties = {
  backgroundColor: "#5e2ca5",
  color: "#fff",
  padding: "2rem",
  textAlign: "center",
};

const headingStyle: React.CSSProperties = {
  marginBottom: "1.5rem",
  fontSize: "1.5rem",
};

const faqContainerStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "1rem",
  maxWidth: "900px",
  margin: "0 auto",
  justifyItems: "center",
};

const faqCardStyle: React.CSSProperties = {
  backgroundColor: "#00c4b3",
  padding: "1rem",
  borderRadius: "10px",
  width: "100%",
  maxWidth: "250px",
  color: "#fff",
  textAlign: "left",
};

const questionStyle: React.CSSProperties = {
  fontWeight: "bold",
  marginBottom: "1rem",
};

const answerStyle: React.CSSProperties = {
  fontSize: "0.9rem",
  opacity: 0.9,
};

const contactCardStyle: React.CSSProperties = {
  backgroundColor: "#5e2ca5",
  color: "#fff",
  padding: "1rem",
  borderRadius: "10px",
  border: "2px solid #00c4b3",
  width: "100%",
  maxWidth: "250px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const contactButtonStyle: React.CSSProperties = {
  marginTop: "1rem",
  backgroundColor: "#ffdd00",
  color: "#5e2ca5",
  padding: "0.5rem 1rem",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
};

const faqItems = [
  {
    question: "Apa itu AI?",
    answer:
      "AI adalah kecerdasan buatan yang dapat membantu dalam menganalisa data dan memberikan saran berbasis informasi tersebut.",
  },
  {
    question: "Apakah data saya aman?",
    answer:
      "Data Anda dijaga dengan standar keamanan tinggi dan hanya digunakan untuk kepentingan layanan ini.",
  },
  {
    question: "Apakah percakapan saya privat?",
    answer:
      "Ya, semua percakapan Anda bersifat privat dan hanya dapat diakses oleh Anda dan sistem AI.",
  },
  {
    question: 'Bagaimana AI "UMKM Bertumbuh" bekerja?',
    answer:
      'AI "UMKM Bertumbuh" memberikan saran dan bantuan dalam pengembangan bisnis berdasarkan data dan pengalaman bisnis sukses.',
  },
  {
    question: "Bagaimana jika saya belum pernah membuat bisnis UMKM sendiri?",
    answer:
      "AI dapat membantu Anda memulai dengan ide dan strategi yang sesuai untuk pemula dalam bisnis UMKM.",
  },
];

export default FAQSection;
