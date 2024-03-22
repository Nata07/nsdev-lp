import Image from "next/image";
import { ButtonWpp } from "./button-home";

export function BannerProject() {
  return (
    <section className="relative bg-gradient-rocketseat py-20 mt-40 bg-gradient-to-tl to-[#2824d580] from-[#FF008880]">
      <Image alt="Logo" loading="lazy" width="200" height="251" decoding="async" className="absolute left-[50%] top-[-142px] z-10 translate-x-[-50%]" src="/logo-line.svg" />
      <Image alt="Background" loading="lazy" decoding="async" fill className="object-cover object-top" src="/background-retangulo.svg" />
      <div className="relative z-10 mx-auto flex w-full max-w-[1256px] flex-col items-center justify-center px-5">
        <h2 className="text-center text-4xl font-bold text-white">Vamos começar seu novo projeto?</h2>
        <p className="mt-4 text-center text-gray-100 lg:text-lg">Acelere para o seu próximo nível de negócios.</p>
        <div className="mt-10 flex flex-col items-center gap-6 md:flex-row">
          {/* <button className="group w-full justify-center px-6 gap-2 rounded-[0.625rem] text-sm font-bold leading-[16.41px] transition-colors md:w-fit disabled:cursor-not-allowed disabled:opacity-75 py-[1.125rem] max-h-[3.25rem] bg-white text-rocketseat-dark hover:bg-white/90 flex items-center uppercase" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:rv:" data-state="closed">
            planos e condições
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button> */}
          <ButtonWpp title="Fale com nossa equipe" />
        </div>
      </div>
    </section>
  )
}