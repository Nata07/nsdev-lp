import Image from "next/image";

export function SectionClients() {
  return (
    <section className="py-20 flex items-center justify-center">
      <div className="container max-w-screen-xl gap-12 items-start">
        <div className="relative mx-auto flex w-full flex-col justify-between gap-10 px-5 md:flex-row">
          <div className="divide-y divide-gray-700">
            <p className="text-sm font-bold text-gray-200 lg:text-base">Empresas que confiaram em nossos serviços</p>
            <Image alt="Solar, Kelco, DED TECH, Bluefit" loading="lazy" width="543" height="35" decoding="async" className="mt-4 pt-4" src="/clients-home.svg" />
          </div>
          <div className="flex items-end gap-6">
            <p className="max-w-[448px] text-sm text-gray-200 lg:text-base">Algumas das empresas que ajudamos a resolver problemas reais com nossos serviços.</p>
          </div>
        </div>
      </div>
    </section>
  )
}