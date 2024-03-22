import { ButtonWpp } from "./button-home";

export function BannerHome() {
  return (
    <section className="py-20">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="border border-transparent bg-gradient-to-b from-gray-600 to-gray-600/30 bg-origin-border overflow-hidden rounded">
          <div className="rounded flex flex-col items-center justify-between gap-6 bg-gradient-to-r to-[#FF0088] from-[#2824d5] p-6 lg:flex-row lg:p-10">
            <h2 className="text-center text-2xl font-medium text-white lg:max-w-[488px] lg:text-left lg:text-3xl">
              Transforme sua empresa e aumente seus resultados
            </h2>
            <ButtonWpp title="COMEÇAR PROJETO AGORA" />
          </div>
        </div>
      </div>
    </section>
  )
}