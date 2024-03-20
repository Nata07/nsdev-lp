import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LucideActivity, LucideArrowUpRight, LucideBadgePoundSterling, LucideCake, LucideNetwork, LucideUser } from "lucide-react";
import { FaqItem } from "./_components/faq-item";
import { Line } from "./_components/line";
import Image from "next/image";
import { WhatsAppButton } from "./_components/button-wp";
import { ClientsSvg } from "@/components/svg/clients-svg";
import { Header } from "./_components/home/header";
import { Hero } from "./_components/home/hero";

export default function Home() {
  return (
    <div className="bg-[#02020F] min-h-screen text-white">
      <Header />
      {/* <div className="py-56 px-56 h-96 w-96 max-w-full overflow-hidden rounded-full left-0 -ml-56 opacity-10 blur-3xl bg-white absolute bg-gradient-to-l to-[#2824d5] from-[#FF0088]"></div>
      <div className="py-56 px-56 h-96 w-96 overflow-hidden rounded-full opacity-10 -mt-56 -mr-36 blur-3xl bg-white absolute right-0 bg-gradient-to-l to-[#2824d5] from-[#FF0088]"></div> */}
      {/* <span className="flex h-96 w-96 absolute opacity-10">
        <span className="animate-bounce absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
      </span> */}
      <main>
        <Hero />
        <section className="relative py-20">
          <div className="container max-w-screen-xl">
            <header style={{ marginBottom: '3rem' }}>
              <Link href={`/`} className="border border-border rounded-full inline-flex items-center justify-center text-[14px] relative mb-6">
                <div className="absolute right-3 top-0 z-10 h-px w-[80px]">
                </div>
                <span className="inline-flex items-center gap-1 whitespace-nowrap px-6 py-3">
                  Features
                </span>
              </Link>
              <h3 style={{ color: 'white', fontSize: '1.875rem', fontWeight: 'bold', maxWidth: '30%', marginBottom: '1rem' }}>
                First-class developer experience
              </h3>
              <p style={{ opacity: '0.8', fontSize: '1.125rem', maxWidth: '70%' }}>
                NotifyLog streamlines team routines with centralized event management, insights, and data-driven decision making.
              </p>
            </header>
            <main className="grid md:grid-cols-2 gap-8">
              <div className="">
                <Image alt="Imagem 1" src="/hr.webp" width={1280} height={720} className="mb-6" />
                <div className="rounded-md border max-w-9 border-indigo-900 bg-gradient-to-t to-[#2824d563] from-[#000] p-1.5 text-blue-700 dark:from-black dark:to-blue-400">
                  <LucideActivity className="w-5 h-5" color="#FF0088" />
                </div>
                <h4 className="mb-2 mt-4 font-bold">Centralize events in one place</h4>
                <p className="opacity-80 mb-4">NotifyLog serves as a centralized hub for event tracking, allowing you to consolidate notifications from multiple sources. This centralization streamlines monitoring and decision-making, offering seamless integration with your existing workflows.</p>
              </div>
              <div className="">
                <Image alt="Imagem 1" src="/hero-01.webp" width={1280} height={720} className="mb-6" />
                <div className="flex items-center justify-center rounded-md border max-w-9 border-indigo-900 bg-gradient-to-t to-[#2824d563] from-[#000] p-1.5 text-blue-700 dark:from-black dark:to-blue-400">
                  <LucideNetwork className="w-5 h-5" color="#FF0088" />
                </div>
                <h4 className="mb-2 mt-4 font-bold">Centralize events in one place</h4>
                <p className="opacity-80 mb-4">NotifyLog serves as a centralized hub for event tracking, allowing you to consolidate notifications from multiple sources. This centralization streamlines monitoring and decision-making, offering seamless integration with your existing workflows.</p>
              </div>
            </main>
              
          </div>
        </section>
        <Line />
        <section className="opacity-1 transform perspective-1200 py-20 overflow-hidden">
          <div className="animate-bounce py-56 px-56 h-96 w-96 rounded-full opacity-10 blur-3xl bg-white absolute -top-80 left-1/2 transform -translate-x-1/2 bg-gradient-to-l to-[#2824d5] from-[#FF0088]">
          </div>
          <div className="container max-w-screen-xl grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-white text-3xl font-bold max-w-[80%] font-gradient mb-4 mt-2">
                Curious Minds Want to Know: Your Queries Answered
              </h3>
            </div>
            <div>
              <div className="w-full space-y-4">
                <FaqItem
                  id="1"
                  question="Quais serviços a NSDEV oferece?"
                  answer="A NSDEV desenvolve soluções tecnológicas personalizadas, incluindo suporte completo no desenvolvimento de projetos."
                />
                <FaqItem
                  id="2"
                  question="Como a NSDEV garante a qualidade dos projetos?"
                  answer="Garantimos a entrega de projetos de alta qualidade e inovação através de uma equipe especializada e processos bem definidos."
                />
                <FaqItem
                  id="3"
                  question="A NSDEV oferece suporte pós-entrega?"
                  answer="Sim, oferecemos suporte completo em todas as etapas, incluindo pós-entrega, para garantir a satisfação total do cliente."
                />
                <FaqItem
                  id="4"
                  question="Quais as vantagens de escolher a NSDEV?"
                  answer="Oferecemos soluções personalizadas, equipe qualificada, suporte completo e compromisso com a inovação e qualidade."
                />
                <FaqItem
                  id="5"
                  question="Como iniciar um projeto com a NSDEV?"
                  answer="Entre em contato conosco para discutir suas necessidades e como podemos ajudar a transformar suas ideias em realidade."
                />
              </div>
            </div>
          </div>
        </section>
        <Line />
        <div className="py-20">
          <div className="container max-w-screen-xl grid md:grid-cols-[20rem_1fr] gap-12 items-start">
            <div className="">
              <h2 className="font-bold leading-normal text-start text-5xl">Nossa Metodologia</h2>
            </div>
            <div className="grid lg:grid-cols-2 space-y-4">
              <div className="esquerda md:pl-9">
                <div className="flex items-center justify-center w-full md:pl-5 mb-8">
                  <div className="border border-zinc-800 w-full">
                    <div className="w-full bg-[#0a0a0a/20]">
                      <div className="h-28 relative flex flex-col bg-[#2824d515]">
                        {/* <div className="border-b border-2 border-border h-px w-full"></div>
                        <div className="border-b border-2 border-border h-px w-full"></div> */}
                        <div className="absolute w-full px-10 h-full flex items-center justify-between">
                          <div className="border-l border-dashed border-zinc-800 h-full"></div>
                          <div className="border-l border-dashed border-zinc-800 h-full"></div>
                          <div className="border-l border-dashed border-zinc-800 h-full"></div>
                          <div className="border-l border-dashed border-zinc-800 h-full"></div>
                        </div>
                        <div className="flex flex-col h-full border-b border-zinc-800 py-8 justify-between items-center">
                          {/* <Line />
                          <Line /> */}
                          <div className="border-b border-dashed border-zinc-800 w-full"></div>
                          <div className="border-b border-dashed border-zinc-800 w-full"></div>
                        </div>
                        <div className="absolute flex w-full h-full items-center justify-center">
                          <div className="h-16 w-16 rounded-full border-dashed border border-zinc-800 text-center flex justify-center items-center">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-t to-[#2824d5] from-[#000] py-2 px-2 text-blue-700 dark:from-black dark:to-blue-400">
                                <h2 className="font-bold text-xl text-[#FF0088]">N</h2>
                            </div>
                          </div>
                        </div>

                        <div className="absolute w-10 h-8 -right-0.5 bg-[#02020F]">
                          <div className="" style={{
                            color: 'hsla(0, 0%, 100%, .4)',
                            width: '32px',
                            height: '32px',
                            position: 'absolute',
                            top: '-1px',
                            right: '0',
                            zIndex: 2,
                            borderBottom: '32px solid hsla(0, 0%, 100%, .4)',
                            borderRight: '32px solid #02020F',
                          }}>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full px-2 py-2">
                      <h4 className="font-bold text-xl">Negócios</h4>
                      <p className="text-slate-400 text-sm mt-2">
                        Antes de iniciar qualquer desenvolvimento, compreendemos o negócio do cliente e identificamos os objetivos, desafios e resultados esperados.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center w-full md:pl-5 mb-8">
                  <div className="border border-zinc-800 w-full">
                    <div className="w-full bg-[#0a0a0a/20]">
                      <div className="h-28 relative flex flex-col bg-[#FF008815]">
                        {/* <div className="border-b border-2 border-border h-px w-full"></div>
                        <div className="border-b border-2 border-border h-px w-full"></div> */}
                        <div className="absolute w-full px-10 h-full flex items-center justify-between">
                          <div className="border-l border-dashed border-zinc-800 h-full"></div>
                          <div className="border-l border-dashed border-zinc-800 h-full"></div>
                          <div className="border-l border-dashed border-zinc-800 h-full"></div>
                          <div className="border-l border-dashed border-zinc-800 h-full"></div>
                        </div>
                        <div className="flex flex-col h-full border-b border-zinc-800 py-8 justify-between items-center">
                          {/* <Line />
                          <Line /> */}
                          <div className="border-b border-dashed border-zinc-800 w-full"></div>
                          <div className="border-b border-dashed border-zinc-800 w-full"></div>
                        </div>
                        <div className="absolute flex w-full h-full items-center justify-center">
                          <div className="h-16 w-16 rounded-full border-dashed border border-zinc-800 text-center flex justify-center items-center">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-t to-[#2824d5] from-[#02020F] py-2 px-2 text-blue-700 dark:from-black dark:to-blue-400">
                                <h2 className="font-bold text-xl text-[#FF0088]">D</h2>
                            </div>
                          </div>
                        </div>

                        <div className="absolute w-10 h-8 -right-0.5 bg-[#02020F]">
                          <div className="" style={{
                            color: 'hsla(0, 0%, 100%, .4)',
                            width: '32px',
                            height: '32px',
                            position: 'absolute',
                            top: '-1px',
                            right: '0',
                            zIndex: 2,
                            borderBottom: '32px solid hsla(0, 0%, 100%, .4)',
                            borderRight: '32px solid #02020F',
                          }}>
                            <div style={{
                              // position: 'absolute',
                              // background: '#27272a',
                              // top: 0,
                              // height: 'calc(32px)',
                              // width: '1px',
                              // right: '-1px',
                              // transformOrigin: 'bottom',
                              // transform: 'rotate(-45deg) scaleY(1.4)',
                              // zIndex: 99,
                            }} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full px-4 py-2">
                      <h4 className="font-bold text-xl">Design</h4>
                      <p className="text-slate-400 text-sm mt-2">O design é uma parte essencial do processo de desenvolvimento. 
                        Nos comprometemos a criar interfaces intuitivas e atraentes, garantindo uma experiência do usuário excepcional 
                        em todos os pontos de contato com o produto desenvolvido.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center w-full md:pl-5 mb-8">
                  <div className="border border-zinc-800 w-full">
                    <div className="w-full bg-[#0a0a0a/20]">
                      <div className="h-28 relative flex flex-col bg-[#2824d515] ">
                        {/* <div className="border-b border-2 border-border h-px w-full"></div>
                        <div className="border-b border-2 border-border h-px w-full"></div> */}
                        <div className="absolute w-full px-10 h-full flex items-center justify-between">
                          <div className="border-l border-dashed border-zinc-800 h-full"></div>
                          <div className="border-l border-dashed border-zinc-800 h-full"></div>
                          <div className="border-l border-dashed border-zinc-800 h-full"></div>
                          <div className="border-l border-dashed border-zinc-800 h-full"></div>
                        </div>
                        <div className="flex flex-col h-full border-b border-zinc-800 py-8 justify-between items-center">
                          {/* <Line />
                          <Line /> */}
                          <div className="border-b border-dashed border-zinc-800 w-full"></div>
                          <div className="border-b border-dashed border-zinc-800 w-full"></div>
                        </div>
                        <div className="absolute flex w-full h-full items-center justify-center">
                          <div className="h-16 w-16 rounded-full border-dashed border border-zinc-800 text-center flex justify-center items-center">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-t to-[#2824d5] from-[#02020F] py-2 px-2 text-blue-700 dark:from-black dark:to-blue-400">
                                <h2 className="font-bold text-xl text-[#FF0088]">V</h2>
                            </div>
                          </div>
                        </div>

                        <div className="absolute w-10 h-8 -right-0.5 bg-[#02020F]">
                          <div className="" style={{
                            color: 'hsla(0, 0%, 100%, .4)',
                            width: '32px',
                            height: '32px',
                            position: 'absolute',
                            top: '-1px',
                            right: '0',
                            zIndex: 2,
                            borderBottom: '32px solid hsla(0, 0%, 100%, .4)',
                            borderRight: '32px solid #02020F',
                          }}>
                            <div style={{
                              // position: 'absolute',
                              // background: '#27272a',
                              // top: 0,
                              // height: 'calc(32px)',
                              // width: '1px',
                              // right: '-1px',
                              // transformOrigin: 'bottom',
                              // transform: 'rotate(-45deg) scaleY(1.4)',
                              // zIndex: 99,
                            }} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full px-4 py-2">
                      <h4 className="font-bold text-xl">Visão</h4>
                      <p className="text-slate-400 text-sm mt-2"> Nossa visão vai além do desenvolvimento de soluções técnicas. 
                        Priorizamos uma parceria sólida com nossos clientes, visando não apenas o sucesso imediato, mas também a longevidade e o crescimento contínuo. 
                        Trabalhando em conjunto, buscamos alcançar resultados, moldando um futuro de sucesso para o seu negócio.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-between gap-4">
                <div>
                  <div className="flex items-center justify-center w-full md:pl-5 mb-8">
                    <div className="border border-zinc-800 w-full">
                      <div className="w-full bg-[#0a0a0a/20]">
                        <div className="h-28 relative flex flex-col bg-[#FF008815]">
                          {/* <div className="border-b border-2 border-border h-px w-full"></div>
                          <div className="border-b border-2 border-border h-px w-full"></div> */}
                          <div className="absolute w-full px-10 h-full flex items-center justify-between">
                            <div className="border-l border-dashed border-zinc-800 h-full"></div>
                            <div className="border-l border-dashed border-zinc-800 h-full"></div>
                            <div className="border-l border-dashed border-zinc-800 h-full"></div>
                            <div className="border-l border-dashed border-zinc-800 h-full"></div>
                          </div>
                          <div className="flex flex-col h-full border-b border-zinc-800 py-8 justify-between items-center">
                            {/* <Line />
                            <Line /> */}
                            <div className="border-b border-dashed border-zinc-800 w-full"></div>
                            <div className="border-b border-dashed border-zinc-800 w-full"></div>
                          </div>
                          <div className="absolute flex w-full h-full items-center justify-center">
                            <div className="h-16 w-16 rounded-full border-dashed border border-zinc-800 text-center flex justify-center items-center">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-t to-[#2824d5] from-[#02020F] py-2 px-2 text-blue-700 dark:from-black dark:to-blue-400">
                                  <h2 className="font-bold text-xl text-[#FF0088]">S</h2>
                              </div>
                            </div>
                          </div>

                          <div className="absolute w-10 h-8 -right-0.5 bg-[#02020F]">
                            <div className="" style={{
                              color: 'hsla(0, 0%, 100%, .4)',
                              width: '32px',
                              height: '32px',
                              position: 'absolute',
                              top: '-1px',
                              right: '0',
                              zIndex: 2,
                              borderBottom: '32px solid hsla(0, 0%, 100%, .4)',
                              borderRight: '32px solid #02020F',
                            }}>
                              <div style={{
                                // position: 'absolute',
                                // background: '#27272a',
                                // top: 0,
                                // height: 'calc(32px)',
                                // width: '1px',
                                // right: '-1px',
                                // transformOrigin: 'bottom',
                                // transform: 'rotate(-45deg) scaleY(1.4)',
                                // zIndex: 99,
                              }} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full px-4 py-2">
                        <h4 className="font-bold text-xl">Soluções</h4>
                        <p className="text-slate-400 text-sm mt-2">
                          Com base na compreensão detalhada do negócio do cliente, projetamos e desenvolvemos soluções sob medida para atender às suas necessidades exclusivas e 
                          tudo adaptado para alcançar os objetivos específicos do cliente.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center w-full md:pl-5 mb-8">
                    <div className="border border-zinc-800 w-full">
                      <div className="w-full bg-[#0a0a0a/20]">
                        <div className="h-28 relative flex flex-col bg-[#2824d515]">
                          {/* <div className="border-b border-2 border-border h-px w-full"></div>
                          <div className="border-b border-2 border-border h-px w-full"></div> */}
                          <div className="absolute w-full px-10 h-full flex items-center justify-between">
                            <div className="border-l border-dashed border-zinc-800 h-full"></div>
                            <div className="border-l border-dashed border-zinc-800 h-full"></div>
                            <div className="border-l border-dashed border-zinc-800 h-full"></div>
                            <div className="border-l border-dashed border-zinc-800 h-full"></div>
                          </div>
                          <div className="flex flex-col h-full border-b border-zinc-800 py-8 justify-between items-center">
                            {/* <Line />
                            <Line /> */}
                            <div className="border-b border-dashed border-zinc-800 w-full"></div>
                            <div className="border-b border-dashed border-zinc-800 w-full"></div>
                          </div>
                          <div className="absolute flex w-full h-full items-center justify-center">
                            <div className="h-16 w-16 rounded-full border-dashed border border-zinc-800 text-center flex justify-center items-center">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-t to-[#2824d5] from-[#02020F] py-2 px-2 text-blue-700 dark:from-black dark:to-blue-400">
                                  <h2 className="font-bold text-xl text-[#FF0088]">E</h2>
                              </div>
                            </div>
                          </div>

                          <div className="absolute w-10 h-8 -right-0.5 bg-[#02020F]">
                            <div className="" style={{
                              color: 'hsla(0, 0%, 100%, .4)',
                              width: '32px',
                              height: '32px',
                              position: 'absolute',
                              top: '-1px',
                              right: '0',
                              zIndex: 2,
                              borderBottom: '32px solid hsla(0, 0%, 100%, .4)',
                              borderRight: '32px solid #02020F',
                            }}>
                              <div style={{
                                // position: 'absolute',
                                // background: '#27272a',
                                // top: 0,
                                // height: 'calc(32px)',
                                // width: '1px',
                                // right: '-1px',
                                // transformOrigin: 'bottom',
                                // transform: 'rotate(-45deg) scaleY(1.4)',
                                // zIndex: 99,
                              }} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full px-4 py-2">
                        <h4 className="font-bold text-xl">Entrega</h4>
                        <p className="text-slate-400 text-sm mt-2">A NSDEV adota uma abordagem ágil para o desenvolvimento, priorizando entregas incrementais e feedback contínuo do cliente. 
                          Isso permite ajustes ao longo do processo e garante que o produto final atenda plenamente às expectativas e necessidades do cliente.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-end space-y-6 w-full h-full md:pl-5 mb-8">
                  <div className="border-l border-t border-zinc-800 w-full flex flex-col py-4 items-end justify-end space-y-6 mt-auto h-full">
                    <h4 className="font-bold text-xl ">Bora fazer seu negócio decolar? 🚀</h4>
                    <Button className="h-14 bg-gradient-to-b to-[#2824d563] from-[#2824d532] hover:opacity-80 font-bold">
                      Quero decolar
                      <LucideArrowUpRight color="#FF0088" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Line />
        <section className="py-20">
          <div className="container max-w-screen-xl mx-auto px-4">
            <div className="border border-transparent bg-gradient-to-b from-gray-600 to-gray-600/30 bg-origin-border overflow-hidden rounded">
              <div className="rounded flex flex-col items-center justify-between gap-6 bg-gradient-to-r to-[#FF0088] from-[#2824d5] p-6 lg:flex-row lg:p-10">
                <h2 className="text-center text-2xl font-medium text-white lg:max-w-[488px] lg:text-left lg:text-3xl">
                  Transforme sua empresa e aumente seus resultados
                </h2>
                <div className="flex flex-col items-center gap-6 lg:flex-row">
                  <Button className="h-14 w-56 bg-gradient-to-b to-[#2824d563] from-[#2824d532] hover:opacity-80 font-bold">
                      Quero decolar
                      <LucideArrowUpRight color="#FF0088" />
                    </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Line />
        <section className="py-20">
          <div className="container max-w-screen-xl mx-auto px-4">
            <h3 className="text-white text-3xl font-bold mb-8">O que nossos clientes dizem</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  id: 1,
                  name: "João Silva",
                  role: "CEO da InovaTech",
                  testimonial: "A NSDEV transformou completamente a maneira como gerenciamos nossos projetos. Sua equipe é incrivelmente atenciosa e profissional.",
                },
                {
                  id: 2,
                  name: "Maria Oliveira",
                  role: "Gerente de Projetos da TechSolutions",
                  testimonial: "Desde que começamos a trabalhar com a NSDEV, vimos uma melhoria significativa em nossa eficiência operacional. Eles realmente entendem o que é necessário para fazer um projeto ter sucesso.",
                },
                {
                  id: 3,
                  name: "Carlos Andrade",
                  role: "Diretor de Inovação da CreativMind",
                  testimonial: "A abordagem personalizada da NSDEV para o desenvolvimento de software é inigualável. Eles realmente se dedicam a entender as necessidades do cliente.",
                },
              ].map(({ id, name, role, testimonial }) => (
                <div key={id} className="bg-zinc-900 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                  <p className="text-white text-opacity-80 text-sm mb-4">{testimonial}</p>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                        <LucideUser className="text-white" size={24} />
                      </div>
                    </div>
                    <div>
                      <p className="text-white font-bold">{name}</p>
                      <p className="text-zinc-400 text-sm">{role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container max-w-screen-xl mx-auto px-4">
            <h3 className="text-white text-3xl font-bold mb-8">O que fazemos</h3>
            <p className="text-white text-opacity-80 mb-6">Juntamos várias técnicas para ajudar o seu projeto a ter o sucesso que merece</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-zinc-900 p-6 rounded-lg shadow-lg">
                <h4 className="text-white font-bold mb-2">I.D.</h4>
                <p className="text-zinc-400 text-sm">Design Inteligente é onde prototipamos todo o seu projeto focando em resolver problemas reais dos usuários.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg shadow-lg">
                <h4 className="text-white font-bold mb-2">LGPD</h4>
                <p className="text-zinc-400 text-sm">Desenvolvemos o seu sistema dentro da Compliance da LGPD, construímos os fluxos de acordo com a Lei Geral de Proteção de dados</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg shadow-lg">
                <h4 className="text-white font-bold mb-2">LANÇAMENTO</h4>
                <p className="text-zinc-400 text-sm">Projetamos uma estrutura de lançamento que escale junto com sua estratégia de marketing.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg shadow-lg">
                <h4 className="text-white font-bold mb-2">CTO</h4>
                <p className="text-zinc-400 text-sm">Fazemos o papel de CTO temporário do seu projeto deixando você focado no que realmente importa.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg shadow-lg">
                <h4 className="text-white font-bold mb-2">A/B</h4>
                <p className="text-zinc-400 text-sm">Através de técnicas de ux research, conseguimos entender quais recursos realmente o seu sistema precisa.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg shadow-lg">
                <h4 className="text-white font-bold mb-2">UX/UI</h4>
                <p className="text-zinc-400 text-sm">Além de desenvolver, o nosso forte é construir projetos que sejam intuitivos e incrivelmente bonitos.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg shadow-lg">
                <h4 className="text-white font-bold mb-2">SEGURANÇA</h4>
                <p className="text-zinc-400 text-sm">Levamos a segurança dos dados do seu app/sistema muito a sério. Usamos a mesma estrutura de servidores das Big techs.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-950 py-20" id="build-your-future">
          <div className="mx-auto flex w-full max-w-[78.5rem] flex-col items-center justify-center px-5">
            <div className="flex w-full flex-col items-center">
              <div className="group/tag w-fit border border-transparent bg-gradient-to-b from-gray-600 to-gray-600/30 bg-origin-border overflow-hidden rounded">
                <div className="flex items-center bg-black w-fit p-2 max-h-8 lg:px-4 lg:h-9 rounded">
                  <span className="text-xs lg:text-sm text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40 font-medium font-mono">Construa o futuro_</span>
                </div>
              </div>
              <h2 className="mt-6 max-w-xs text-center text-2xl font-medium text-white lg:max-w-[34.3125rem] lg:text-4xl">Junte-se a maior comunidade de devs da américa latina</h2>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-[60px] lg:grid-cols-4">
              <div>
                <div className="border border-transparent bg-gradient-to-b from-gray-600 to-gray-600/30 bg-origin-border overflow-hidden rounded w-full h-full">
                  <div className="p-6 rounded w-full h-full flex flex-col gap-6 bg-gray-950 transition-colors hover:bg-gray-900">
                    <div className="w-fit h-fit border border-transparent bg-gradient-to-b from-gray-600 to-gray-600/30 bg-origin-border overflow-hidden rounded">
                      <div className="flex items-center justify-center bg-gradient-to-b from-gray-800 to-gray-800/20 p-2 w-10 h-10">
                        {/* <Image alt="" loading="lazy" width="32" height="32" decoding="async" src="/_next/static/media/users.b21ae441.svg" style={{ color: 'transparent' }} /> */}
                        <ClientsSvg width={32} height={32} />
                      </div>
                    </div>
                    <strong className="block text-3xl font-medium text-white">+40 clientes</strong>
                    <p className="max-w-[272px] text-base text-gray-200">Impactados por nossas consultorias ou serviços</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="border border-transparent bg-gradient-to-b from-gray-600 to-gray-600/30 bg-origin-border overflow-hidden rounded w-full h-full">
                  <div className="p-6 rounded w-full h-full flex flex-col gap-6 bg-gray-950 transition-colors hover:bg-gray-900">
                    <div className="w-fit h-fit border border-transparent bg-gradient-to-b from-gray-600 to-gray-600/30 bg-origin-border overflow-hidden rounded">
                      <div className="flex items-center justify-center bg-gradient-to-b from-gray-800 to-gray-800/20 p-2 w-10 h-10">
                        <img alt="" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" src="/_next/static/media/devices.d2888805.svg" style={{ color: 'transparent' }} />
                      </div>
                    </div>
                    <strong className="block text-3xl font-medium text-white">+600 mil</strong>
                    <p className="max-w-[272px] text-base text-gray-200">Devs e parceiros na plataforma Rocketseat</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="border border-transparent bg-gradient-to-b from-gray-600 to-gray-600/30 bg-origin-border overflow-hidden rounded w-full h-full">
                  <div className="p-6 rounded w-full h-full flex flex-col gap-6 bg-gray-950 transition-colors hover:bg-gray-900">
                    <div className="w-fit h-fit border border-transparent bg-gradient-to-b from-gray-600 to-gray-600/30 bg-origin-border overflow-hidden rounded">
                      <div className="flex items-center justify-center bg-gradient-to-b from-gray-800 to-gray-800/20 p-2 w-10 h-10">
                        <img alt="" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" src="/_next/static/media/discord.adba5b82.svg" style={{ color: 'transparent' }} />
                      </div>
                    </div>
                    <strong className="block text-3xl font-medium text-white">+220 mil</strong>
                    <p className="max-w-[272px] text-base text-gray-200">Devs na comunidade aberta no Discord</p>
                    <a rel="noopener noreferrer" target="_blank" className="group flex items-center justify-center rounded-[0.625rem] text-sm font-bold uppercase leading-[16.41px] text-white transition-colors md:w-fit disabled:cursor-not-allowed disabled:opacity-75 py-[1.125rem] max-h-[3.25rem] bg-gray-800 hover:bg-rocketseat-dark w-full px-3 gap-1.5" href="https://discord.gg/bacwY2gDCF">entrar na comunidade<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5 text-xl"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a>
                  </div>
                </div>
              </div>
              <div>
                <div className="border border-transparent bg-gradient-to-b from-gray-600 to-gray-600/30 bg-origin-border overflow-hidden rounded w-full h-full">
                  <div className="p-6 rounded w-full h-full flex flex-col gap-6 bg-gray-950 transition-colors hover:bg-gray-900">
                    <div className="w-fit h-fit border border-transparent bg-gradient-to-b from-gray-600 to-gray-600/30 bg-origin-border overflow-hidden rounded">
                      <div className="flex items-center justify-center bg-gradient-to-b from-gray-800 to-gray-800/20 p-2 w-10 h-10">
                        <img alt="" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" src="/_next/static/media/youtube.be009e56.svg" style={{ color: 'transparent' }} />
                      </div>
                    </div>
                    <strong className="block text-3xl font-medium text-white">+320 mil</strong>
                    <p className="max-w-[272px] text-base text-gray-200">Inscritos no canal do YouTube</p>
                    <a rel="noopener noreferrer" target="_blank" className="group flex w-full items-center justify-center px-6 rounded-[0.625rem] text-sm font-bold uppercase leading-[16.41px] text-white transition-colors md:w-fit disabled:cursor-not-allowed disabled:opacity-75 py-[1.125rem] max-h-[3.25rem] bg-gray-800 hover:bg-rocketseat-dark mt-auto gap-1.5" href="https://www.youtube.com/rocketseat">assistir conteúdos<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5 text-xl"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative bg-gradient-rocketseat py-20 mt-40 bg-gradient-to-tl to-[#2824d528] from-[#FF008828]">
          <Image alt="Logo" loading="lazy" width="200" height="251" decoding="async" className="absolute left-[50%] top-[-142px] z-10 translate-x-[-50%]" src="/logo-line.svg" />
          <Image alt="Background" loading="lazy" decoding="async" fill className="object-cover object-top" src="/background-retangulo.svg" />
          <div className="relative z-10 mx-auto flex w-full max-w-[1256px] flex-col items-center justify-center px-5">
            <h2 className="text-center text-4xl font-bold text-white">Vamos começar seu novo projeto?</h2>
            <p className="mt-4 text-center text-gray-100 lg:text-lg">Acelere para o seu próximo nível de negócios.</p>
            <div className="mt-10 flex flex-col items-center gap-6 md:flex-row">
              <button className="group w-full justify-center px-6 gap-2 rounded-[0.625rem] text-sm font-bold leading-[16.41px] transition-colors md:w-fit disabled:cursor-not-allowed disabled:opacity-75 py-[1.125rem] max-h-[3.25rem] bg-white text-rocketseat-dark hover:bg-white/90 flex items-center uppercase" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:rv:" data-state="closed">
                planos e condições
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </button>
              <a className="group flex w-full items-center justify-center px-6 gap-2 rounded-[0.625rem] text-sm font-bold uppercase leading-[16.41px] text-white transition-colors md:w-fit disabled:cursor-not-allowed disabled:opacity-75 py-[1.125rem] max-h-[3.25rem] bg-transparent hover:bg-gray-800 flex gap-2 sm:justify-between" href="https://rseat.in/rocketseat-vendas" rel="noopener noreferrer" target="_blank">
                <svg className="fill-success-light" fill="none" height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.629 4.008a8.607 8.607 0 00-6.133-2.543A8.682 8.682 0 002.98 14.473l-1.23 4.492 4.598-1.207a8.646 8.646 0 004.144 1.055h.004c4.777 0 8.754-3.891 8.754-8.672 0-2.317-.984-4.493-2.621-6.133zm-6.133 13.344a7.195 7.195 0 01-3.672-1.004l-.261-.157-2.727.715.727-2.66-.172-.273a7.184 7.184 0 01-1.102-3.836c0-3.973 3.234-7.207 7.211-7.207 1.926 0 3.734.75 5.094 2.113 1.36 1.363 2.195 3.172 2.191 5.098 0 3.976-3.316 7.21-7.289 7.21zm3.953-5.399c-.215-.11-1.281-.633-1.48-.703-.2-.074-.344-.11-.489.11-.144.218-.558.703-.687.85-.125.145-.254.165-.469.056-1.273-.637-2.11-1.137-2.949-2.579-.223-.382.223-.355.637-1.183.07-.145.035-.27-.02-.379-.055-.11-.488-1.176-.668-1.61-.176-.421-.355-.363-.488-.37-.125-.008-.27-.008-.414-.008a.803.803 0 00-.578.27c-.2.218-.758.741-.758 1.808 0 1.066.777 2.098.883 2.242.11.145 1.527 2.332 3.703 3.273 1.375.594 1.914.645 2.601.543.418-.062 1.282-.523 1.461-1.03.18-.509.18-.942.125-1.032-.05-.098-.195-.152-.41-.258z"></path>
                </svg>
                <div className="flex flex-col">
                  <span className="text-start text-[10px] uppercase text-gray-100">Tem alguma dúvida?</span>
                  <small className="text-sm/6 font-bold uppercase text-white">fale com nosso time</small>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section className="container max-w-screen-xl flex flex-col items-center justify-center text-center py-20">
          <a className="hover:opacity-60">
            <Image alt="NSDEV" src="/logo.svg" width={32} height={32} loading="lazy" />
          </a>
          <p className="text-md font-bold md:max-w-[30%] mt-4 mb-2">
            Desenvolver é so uma parte do processo.
          </p>
          <span className="text-xs text-zinc-400">Estratégia, design e tecnologia.</span>
        </section>
      </main>
      {/* <Line /> */}
      <footer className="py-10 text-sm">
        <div className="container max-w-screen-xl flex flex-col md:flex-row text-center md:text-left justify-between opacity-60">
          <p className="mb-8 md:mb-0">© {new Date().getFullYear()} NSDEV Creative. All rights reserved.</p>
          <p className="mb-8 md:mb-0">CNPJ: 52.834.193/0001-80</p>
        </div>
      </footer>
      <WhatsAppButton />
    </div>
  );
}
