"use client";

import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "5549984123389"; // Número real do escritório
  const message =
    "Olá, gostaria de agendar uma consulta com o escritório Ferri, Maines & Fernandes.";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    // Use a programmatic anchor click to open in a new tab with rel attributes.
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={28} />
    </button>
  );
};

export default WhatsAppButton;
