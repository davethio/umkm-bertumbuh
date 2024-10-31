// src/App.tsx
import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ContentSection from "./components/ContentSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import GlobalStyles from "./styles/GlobalStyles";

import conversationImage1 from "./assets/images/Chatbot.png";
import conversationImage2 from "./assets/images/Chatbot.png";
import conversationImage3 from "./assets/images/Chatbot.png";

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <Header />
      <HeroSection />
      <main style={{ flex: 1, width: "100%" }}>
        <ContentSection
          title="Dapatkan Ide Bisnis Baru sesuai Personalisasi."
          description="Dengarkan Kisah Sukses Experts."
          image={conversationImage1}
          customStyle={{
            borderRadius: "150px 0px 60px 0px",
            backgroundColor: "#00c4b3",
            padding: "2rem",
            marginRight: "0%",
            marginTop: "150px",
          }}
        />
        <ContentSection
          title="Modelkan Strategi Bisnis UMKM Anda."
          description="Konsultasikan Keadaan dan Solusi Kedepannya."
          image={conversationImage2}
          customStyle={{
            borderRadius: "0px 150px 0px 150px",
            backgroundColor: "#00c4b3",
            padding: "2rem",
            marginLeft: "0%",
            marginTop: "200px",
          }}
        />
        <ContentSection
          title="Mengotomasi Penjelasan dan Peramalan Finansial Mendalam."
          description="Menganalisa Varians Anggaran."
          image={conversationImage3}
          customStyle={{
            borderRadius: "150px 150px 150px 150px",
            backgroundColor: "#00c4b3",
            padding: "2rem",
            marginTop: "200px",
          }}
        />
      </main>
      <FAQSection />
      <Footer />
    </div>
  </>
);

export default App;
