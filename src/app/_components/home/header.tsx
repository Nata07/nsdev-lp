import Image from "next/image";

export function Header() {
  return (
    <header className="border-b border-zinc-900 sticky top-0 bg-[#02020F] z-20">
      <div className="container max-w-screen-xl flex items-center justify-between h-[8vh]">
        <a className="hover:opacity-60">
          <Image alt="NSDEV" src="/logo.svg" width={40} height={40} loading="lazy" />
        </a>

        <div>menu</div>
      </div>
    </header>
  )
}