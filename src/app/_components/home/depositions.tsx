import { LucideUser } from "lucide-react";
import { TitleSection } from "./title-section";

export function Depositions() {
  return (
    <section className="py-20">
      <div className="container max-w-screen-xl mx-auto px-4">
        <TitleSection title="O que nossos clientes dizem" />
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
  )
}