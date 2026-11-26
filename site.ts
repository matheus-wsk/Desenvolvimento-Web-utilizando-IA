export const WHATSAPP_NUMBER = '5511999999999';

export const WHATSAPP_MESSAGE =
  'Olá! Vim pelo site da Lumina Odontologia e gostaria de agendar uma avaliação inicial.';

export function whatsappLink(message: string = WHATSAPP_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
