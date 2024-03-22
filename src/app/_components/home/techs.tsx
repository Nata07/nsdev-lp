import { LucideAArrowDown, LucideRectangleVertical } from "lucide-react";
import { TitleSection } from "./title-section";
import { ReactSVG } from "@/components/svg/react";
import { ReactNativeSbg } from "@/components/svg/react-native-svg";
import { XanoSvg } from "@/components/svg/xano-svg";
import { BubbleSvg } from "@/components/svg/bubble-svg";
import { JSSvg } from "@/components/svg/js-svg";
import { HtmlSvg } from "@/components/svg/html-svg";
import { NodeSvg } from "@/components/svg/node-svg";
import { TailwindSvg } from "@/components/svg/tailwind-svg";
import { FigmaSvg } from "@/components/svg/figma";
import { AwsSvg } from "@/components/svg/aws-svg";

export function TechsHome() {
  return (
    <section className="py-20">
      <div className="container max-w-screen-xl">
        <TitleSection title="Nossa estrutura" />
        <p className="text-white text-opacity-80 mb-6">Trabalhamos com as melhores tecnologias do mercado, usadas pelas BigTechs.</p>
        <div className="grid grid-cols-5 grid-rows-2">
          <div className="w-auto h-28 flex-col space-y-4 flex p-auto items-center justify-center text-center border border-zinc-600">
            <ReactSVG width={24} height={24} />
            <span>React</span>
          </div>
          <div className="flex flex-col space-y-4 w-auto p-auto items-center text-center justify-center border border-zinc-600">
            <ReactNativeSbg width={24} height={24} />
            <span>React Native</span>
          </div>
          <div className="flex flex-col space-y-2 w-auto p-auto items-center justify-center border border-zinc-600">
            <XanoSvg width={24} height={24} />
            <span>Xano</span>
          </div>
          <div className="flex flex-col space-y-4 w-auto p-auto items-center justify-center text-center border border-zinc-600">
            <BubbleSvg width={24} height={24} />
            <span>Bubble</span>
          </div>
          <div className="flex flex-col space-y-4 w-auto p-auto items-center justify-center text-center border border-zinc-600">
            <JSSvg width={24} height={24} />
            <span>Javascript</span>
          </div>
          <div className="flex flex-col space-y-4 w-auto p-auto items-center justify-center text-center border border-zinc-600">
            <HtmlSvg width={24} height={24} />
            <span>HTML5</span>
          </div>
          <div className="flex flex-col space-y-4 w-auto p-auto items-center justify-center text-center border border-zinc-600">
            <NodeSvg width={24} height={24} />
            <span>Node.js</span>
          </div>
          <div className="flex flex-col space-y-4 w-auto p-auto items-center justify-center text-center border border-zinc-600">
            <TailwindSvg width={24} height={24} />
            <span>Tailwind</span>
          </div>
          <div className="flex flex-col space-y-4 w-auto p-auto items-center justify-center text-center border border-zinc-600">
            <AwsSvg width={24} height={24} />
            <span>AWS</span>
          </div>
          <div className="flex flex-col space-y-4 w-auto p-auto items-center justify-center text-center border border-zinc-600">
            <FigmaSvg width={24} height={24} />
            <span>Figma</span>
          </div>
        </div>
      </div>
    </section>
  )
}