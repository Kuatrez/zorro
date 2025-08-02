"use client";

import { useState } from "react";
import ContactModal from "@/components/ContactModal";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import Services from "@/components/Service";
import Fleet from "@/components/Fleet";
import Materials from "@/components/Materials";
import Contacts from "@/components/Contacts";

export default function Home() {
  const [contactModal, setContactModal] = useState<boolean>(false);

  if (contactModal) {
    return <ContactModal setContactModal={setContactModal} />;
  }

  return (
    <>
      <Header setContactModal={setContactModal} />
      <Hero setContactModal={setContactModal} />
      <Services />
      <Materials setContactModal={setContactModal} />
      <Fleet setContactModal={setContactModal} />
      <Contacts />
      <Faq />
      <Footer />
    </>
  );
}
