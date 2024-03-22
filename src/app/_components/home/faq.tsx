import { FaqItem } from "../faq-item";

export function Faq() {
  return (
    <section className="opacity-1 transform perspective-1200 py-20 overflow-hidden">
      <div className="animate-bounce py-56 px-56 h-96 w-96 rounded-full opacity-10 blur-3xl bg-white absolute -top-80 left-1/2 transform -translate-x-1/2 bg-gradient-to-l to-[#2824d5] from-[#FF0088]">
      </div>
      <div className="container max-w-screen-xl grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h3 className="text-white text-3xl font-bold max-w-[80%] font-gradient mb-4 mt-2">
            Perguntas frequentes
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
  )
}