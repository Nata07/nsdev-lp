import Image from "next/image";
import { ButtonWpp } from "./button-home";

export function Header() {
  return (
    <header className="border-b border-zinc-900 sticky top-0 bg-[#02020F] z-20">
      <div className="container max-w-screen-xl flex items-center justify-between h-[8vh]">
        <a className="hover:opacity-60">
          <Image alt="NSDEV" src="/logo.svg" width={40} height={40} loading="lazy" />
        </a>

        <div className="flex items-center p-px bg-gradient-to-r to-[#FF0088] from-[#2824d5] h-[58px] rounded-md w-auto">
          <ButtonWpp title="COMEÇAR PROJETO AGORA" />
        </div>
      </div>
    </header>
  )
}