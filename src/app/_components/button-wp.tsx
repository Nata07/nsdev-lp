import { WhatsAppSvg } from '@/components/svg/whatsapp';
import { LucidePhoneCall } from 'lucide-react';
import React from 'react';

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-4 right-4 animate-pulse">
      <button className="bg-green-500 text-white py-4 px-4 rounded-full shadow-md shadow-[#FF008815]">
        <a href="https://api.whatsapp.com/send?phone=5549999963858&text=Olá,%20quero%20decolar%20meu%20negócio" target="_blank" rel="noopener noreferrer">
          <WhatsAppSvg width={32} height={32} />
        </a>
      </button>
    </div>
  );
};

export default WhatsAppButton;

