import ChamadaIformacaoSection from "@/components/ChamadaInformacaoSection";
import ExpandButton from "@/components/ExpandButton";
import ExtraContentSection from "@/components/ExtraContentSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PublicoAlvoSection from "@/components/PublicoAlvoSection";
import { useState } from "react";

export default function Home() {

  const [expandir, setExpandir] = useState(false);

  return (
    <>
      <Header />
      <HeroSection />
      <PublicoAlvoSection />
      <ChamadaIformacaoSection />
      <ExpandButton onClick={() => setExpandir(!expandir)} isExpanded={expandir}/>
      { expandir && <ExtraContentSection /> }
      <Footer />
    </>
  );
}
