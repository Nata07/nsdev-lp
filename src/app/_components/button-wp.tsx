'use client'

import { WhatsAppSvg } from '@/components/svg/whatsapp';

export function WhatsAppButton() {
  const handleWpp = () => {
    window.open('https://api.whatsapp.com/send?phone=5549999963858&text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20falar%20sobre%20meu%20projeto', '_blank');
  }
  return (
    <div className="fixed z-30 bottom-8 right-8">
      <a className="fixed bottom-8 right-8 z-30 rounded-2xl border border-success-light bg-[#29e0a9] p-2 hover:border-white cursor-pointer" onClick={handleWpp} rel="noopener noreferrer" target="_blank" title="Fale com a gente no WhatsApp">
        <WhatsAppSvg width={36} height={36} />
      </a>
    </div>
  );
};

