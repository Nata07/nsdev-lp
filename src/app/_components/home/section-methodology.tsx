import { Button } from "@/components/ui/button";
import { LucideArrowUpRight } from "lucide-react";
import methodology from "../../../../methodology.json"
import { MethodologyItem } from "./methodology-item";
import { ButtonWpp } from "./button-home";

export function SectionMethodology() {
  return (
    <section className="py-20">
      <div className="container max-w-screen-xl grid md:grid-cols-[20rem_1fr] gap-12 items-start">
        <div className="">
          <h2 className="font-bold leading-normal text-start text-5xl">Nossa Metodologia</h2>
        </div>
        <div className="grid lg:grid-cols-2 space-y-4">
          <div className="left">
            {methodology.left.map(item => (
              <MethodologyItem key={item.slug} slug={item.slug} title={item.title} description={item.description} backgroundColor="#FF0088" />
            ))}
          </div>
          <div className="flex flex-col items-start justify-between gap-4">
            <div className="right">
              {methodology.right.map(item => (
                <MethodologyItem key={item.slug} slug={item.slug} title={item.title} description={item.description} backgroundColor="#FF0088" />
              ))}
            </div>
            <div className="flex flex-col items-end justify-end space-y-6 w-full h-full md:pl-5 mb-8">
              <div className="border-l border-t border-zinc-800 w-full flex flex-col py-4 items-end justify-end space-y-6 mt-auto h-full">
                <h4 className="font-bold text-xl ">Bora fazer seu negócio decolar? 🚀</h4>
                {/* <Button className="h-14 bg-gradient-to-b to-[#2824d563] from-[#2824d532] hover:opacity-80 font-bold">
                  Quero decolar
                  <LucideArrowUpRight color="#FF0088" />
                </Button> */}
                <ButtonWpp title="Quero decolar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}