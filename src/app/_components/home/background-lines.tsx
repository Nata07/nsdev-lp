export function HeroBackgroundLines() {
  return (
    <>
      <div className="z-0 absolute top-0 left-1/2 transform -translate-x-1/2 mx-auto w-full max-w-[76rem] h-full">
        <div className="hidden md:block absolute top-[13rem] h-px w-full bg-zinc-900" />
        <div className="hidden md:block absolute top-[17.1rem] h-px w-full bg-zinc-900" />
        <div className="absolute left-0 h-full w-px bg-zinc-900" />
        <div className="absolute right-0 h-full w-px bg-zinc-900" />
      </div>
      <div className="z-0 absolute top-0 left-1/2 transform -translate-x-1/2 mx-auto w-full max-w-6xl h-full">
        <div className="absolute left-0 h-full w-px bg-zinc-900" />
        <div className="absolute right-0 h-full w-px bg-zinc-900" />
      </div>
    </>
  )
}