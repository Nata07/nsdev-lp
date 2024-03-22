import { Line } from "./_components/line";
import Image from "next/image";
import { WhatsAppButton } from "./_components/button-wp";
import { Header } from "./_components/home/header";
import { Hero } from "./_components/home/hero";
import { Faq } from "./_components/home/faq";
import { SectionMethodology } from "./_components/home/section-methodology";
import { SectionClients } from "./_components/home/section-clients";
import { BannerHome } from "./_components/home/banner";
import { ServicesHome } from "./_components/home/services";
import { TechsHome } from "./_components/home/techs";
import { BannerProject } from "./_components/home/banner-project";
import { Footer } from "./_components/home/footer";

export default function Home() {
  return (
    <div className="bg-[#02020F] min-h-screen text-white">
      <Header />
      <main>
        <Hero />
        <Line />
        <SectionClients />
        <Line />
        <SectionMethodology />
        <Line />
        <ServicesHome />
        <Line />
        <TechsHome />
        <Line />
        <BannerHome />
        <Faq />
        <BannerProject />
        <section className="container max-w-screen-xl flex flex-col items-center justify-center text-center py-20">
          <a className="hover:opacity-60">
            <Image alt="NSDEV" src="/logo.svg" width={32} height={32} loading="lazy" />
          </a>
          <p className="text-md font-bold md:max-w-[30%] mt-4 mb-2">
            Desenvolver é so uma parte do processo.
          </p>
          <span className="text-xs text-zinc-400">Estratégia, design e tecnologia.</span>
        </section>
        <Footer />  
      </main>
      <WhatsAppButton />
    </div>
  );
}
