import { TitleSection } from "./title-section";

export function ServicesHome() {
  return (
    <section className="py-20">
      <div className="container max-w-screen-xl mx-auto px-4">
        <TitleSection title="O que fazemos" />
        <p className="text-white text-opacity-80 mb-6">Juntamos várias técnicas para ajudar o seu projeto a ter o sucesso que merece</p>
        <div className="flex flex-col gap-8 md:grid grid-cols-3">
          <div className="bg-[#2824d515] md:col-span-2 p-6 rounded-lg shadow-lg">
            <h4 className="text-white font-bold mb-2">Parceria</h4>
            <p className="text-zinc-400 text-sm">
              Transforme sua visão em realidade com nossa parceria exclusiva. 
              Na NSDEV, assumimos a responsabilidade pela parte técnica do seu negócio para que você possa se concentrar no que faz de melhor: impulsionar vendas e estratégias de negócios. 
              Combinando nossa expertise tecnológica e compromisso com o sucesso do seu empreendimento, vamos além da simples prestação de serviços - nos tornamos verdadeiros parceiros na realização dos seus objetivos. 
              Deixe-nos cuidar da tecnologia enquanto você conquista o mercado.</p>
          </div>
          <div className="bg-[#2824d515] p-6 rounded-lg lg:col-span-1 shadow-lg">
            <h4 className="text-white font-bold mb-2">Descoberta</h4>
            <p className="text-zinc-400 text-sm">
              Essa fase, entendemos as prioridades e necessidades do seu negócio, definindo as dores e desenhando as soluções necessárias.
            </p>
          </div>
          <div className="bg-[#2824d515] p-6 rounded-lg lg:col-span-1 shadow-lg">
            <h4 className="text-white font-bold mb-2">Design</h4>
            <p className="text-zinc-400 text-sm">Além de desenvolver, temos uma forte experiencia em projetar e construir projetos que sejam intuitivos e incrivelmente bonitos.</p>
          </div>
          <div className="bg-[#2824d515] p-6 rounded-lg lg:col-span-1 shadow-lg">
            <h4 className="text-white font-bold mb-2">CTO</h4>
            <p className="text-zinc-400 text-sm">Fazemos o papel de CTO temporário do seu projeto deixando você focado no que realmente importa.</p>
          </div>
          <div className="bg-[#2824d515] p-6 rounded-lg lg:col-span-1 shadow-lg">
            <h4 className="text-white font-bold mb-2">LGPD</h4>
            <p className="text-zinc-400 text-sm">Desenvolvemos o seu sistema dentro da Compliance da LGPD. Levamos a segurança dos dados do seu app/sistema muito a sério. Usamos a mesma estrutura de servidores das Big techs.</p>
          </div>
          <div className="bg-[#2824d515] p-6 rounded-lg lg:col-span-1 shadow-lg">
            <h4 className="text-white font-bold mb-2">Desenvolvimento</h4>
            <p className="text-zinc-400 text-sm">Somos especialista em desenvolvimento, tanto high code, como no-code. Usamos as melhores tecnologias que atendem as necessidades do projeto.</p>
          </div>
          <div className="bg-[#2824d515] col-span-2 p-6 rounded-lg shadow-lg">
            <h4 className="text-white font-bold mb-2">Entrega</h4>
            <p className="text-zinc-400 text-sm">Agora é hora de colocar sua aplicação no ar! E claro, não te deixamos na mão! Desenvolvemos toda uma documentação para que você tenha tudo em mãos quando precisar. Conte com nosso suporte para resolver as questões técnicas para você!.</p>
          </div>
        </div>
      </div>
    </section>
  )
}