export const SITE_URL = "https://www.ferrimainesefernandes.com";

export const SITE_NAME = "Ferri, Maines & Fernandes Advogados Associados";

export const PHONE_DISPLAY = "(49) 3222-8979";
export const PHONE_E164 = "+554932228979";

export const WHATSAPP_NUMBER = "5549984123389";
export const WHATSAPP_DISPLAY = "(49) 98412-3389";

export const ADDRESS = {
  street: "R. Emíliano Ramos, 490 - Centro",
  city: "Lages",
  state: "SC",
  postalCode: "88502-216",
};

export const INSTAGRAM_URL = "https://www.instagram.com/fmfadvogadoss/";

export const EMAIL = "advogadosfmf@gmail.com";

export function whatsappUrl(message: string, number: string = WHATSAPP_NUMBER) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export const CITIES_SERVED = [
  "Lages",
  "São Joaquim",
  "Otacílio Costa",
  "Correia Pinto",
  "Campo Belo do Sul",
  "São José do Cerrito",
  "Painel",
  "Capão Alto",
  "Bocaina do Sul",
  "Urubici",
  "Urupema",
];
