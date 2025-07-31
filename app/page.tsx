"use client";

import { useState } from "react";
import ContactModal from "@/components/ContactModal";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home(): JSX.Element {
  const [contactModal, setContactModal] = useState<boolean>(false);

  if (contactModal) {
    return <ContactModal setContactModal={setContactModal} />;
  }

  return (
    <>
      <Header setContactModal={setContactModal} />
      <Hero setContactModal={setContactModal} />
    </>
  );
}
