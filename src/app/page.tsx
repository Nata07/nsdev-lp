import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LucideActivity, LucideArrowBigRightDash, LucideArrowUpRight, LucideBadgePoundSterling, LucideCake, LucideNetwork, LucideUser } from "lucide-react";
import { FaqItem } from "./_components/faq-item";
import { Line } from "./_components/line";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import WhatsAppButton from "./_components/button-wp";

export default function Home() {
  return (
    <div className="bg-[#02020F] min-h-screen text-white">
      <header className="border-b border-zinc-900 sticky top-0 bg-[#02020F] z-20">
        <div className="container max-w-screen-xl flex items-center justify-between h-[8vh]">
          <a className="hover:opacity-60">
            <Image alt="NSDEV" src="/logo.svg" width={40} height={40} loading="lazy" />
          </a>

          <div>menu</div>
        </div>
      </header>
      {/* <div className="py-56 px-56 h-96 w-96 max-w-full overflow-hidden rounded-full left-0 -ml-56 opacity-10 blur-3xl bg-white absolute bg-gradient-to-l to-[#2824d5] from-[#FF0088]"></div>
      <div className="py-56 px-56 h-96 w-96 overflow-hidden rounded-full opacity-10 -mt-56 -mr-36 blur-3xl bg-white absolute right-0 bg-gradient-to-l to-[#2824d5] from-[#FF0088]"></div> */}
      {/* <span className="flex h-96 w-96 absolute opacity-10">
        <span className="animate-bounce absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
      </span> */}
      <main>
        <div className="relative pt-20 md:pt-36 background-animate text-center">
          <div className="relative z-10">
            <div className="px-6">
              <div className="relative inline-flex overflow-hidden rounded-full p-px">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#2824d5_0%,#2824d563,#bebebe_100%)]" />
                <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-[#02020F] px-6 py-3 text-sm text-gray-50 backdrop-blur-3xl">
                  Estratégia, design e tecnologia 🚀
                </span>
              </div>
              {/* <a className="border border-border/30 rounded-full inline-flex items-center justify-center text-[14px] relative mb-6 hover:bg-secondary/10">              
                <span className="inline-flex items-center gap-1 whitespace-nowrap px-6 py-3">Estratégia, design e tecnologia 🚀</span>
              </a> */}
              <div className="mx-auto py-6 md:max-w-[55rem] font-book font-styling font-display font-effect-hero font-gradient font-bold text-center text-4xl md:text-6xl md:leading-[4.2rem]">
                <h1>Empower Your Business with Realtime Event Tracking</h1>
              </div>
              <p className="mt-4 max-w-[30rem] mx-auto md:max-w-xl text-zinc-500 dark:text-primary/80 md:leading-normal text-xl">
                Gain insights and oversee your product s performance with NotifyLog s streamlined event tracking. Make smarter decisions backed by valuable data.
              </p>
              <div className="px-12 mt-8 flex justify-center items-center flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-10">
                <Link href="/">
                  <Button className="bg-transparent relative text-xl h-12 w-40 p-[1px] overflow-hidden rounded-full">
                    <div className="relative rounded-full bg-black/30 border border-border backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm font-semibold hover:brightness-150 transition ease-in-out">Start</div>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="invisible md:visible mt-8 md:mt-20 w-full h-px bg-zinc-900" />
          <div className="z-0 absolute top-0 left-1/2 transform -translate-x-1/2 mx-auto w-full max-w-[76rem] h-full">
            <div className="hidden md:block absolute top-[13rem] h-px w-full bg-zinc-900" />
            <div className="hidden md:block absolute top-[17.1rem] h-px w-full bg-zinc-900" />
            <div className="absolute left-0 h-full w-px bg-zinc-900" />
            <div className="absolute right-0 h-full w-px bg-zinc-900" />
          </div>
          <div className="z-0 absolute top-0 left-1/2 transform -translate-x-1/2 mx-auto w-full max-w-6xl h-full">
            <div className="absolute left-0 h-full w-px bg-zinc-900" />
            <div className="absolute right-0 h-full w-px bg-zinc-900" />
          </div>
        </div>
        <section className="relative py-10">
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
      <Line />
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
