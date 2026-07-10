import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

const WhatsAppButton = () => {
  const href = whatsappUrl(
    "Olá, gostaria de agendar uma consulta com o escritório Ferri, Maines & Fernandes."
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;
