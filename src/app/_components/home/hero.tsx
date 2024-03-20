import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HeroHat } from "./hero-hat";
import { HeroBackgroundLines } from "./background-lines";

export function Hero() {
  return (
    <div className="relative pt-20 md:pt-36 background-animate text-center">
      <div className="relative z-10">
        <div className="px-6">
          <HeroHat />
          <div className="mx-auto py-6 md:max-w-[55rem] font-book font-styling font-display font-effect-hero font-gradient font-bold text-center text-4xl md:text-6xl md:leading-[4.2rem]">
            <h1>Transforme sua empresa e aumente seus resultados</h1>
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
      <HeroBackgroundLines />
    </div>
  )
}