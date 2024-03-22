type MethodologyItemProps = {
  slug: string;
  title: string;
  description: string;
}

export function MethodologyItem({ slug, title, description }: MethodologyItemProps) {
  return (
    <div className="flex items-center justify-center w-full md:pl-5 mb-8 shadow-lg transform transition duration-500 hover:scale-105">
      <div className="border border-zinc-800 w-full">
        <div className="w-full bg-[#0a0a0a/20]">
          <div className="h-28 relative flex flex-col bg-[#2824d515]">
            <div className="absolute w-full px-10 h-full flex items-center justify-between">
              <div className="border-l border-dashed border-zinc-800 h-full"></div>
              <div className="border-l border-dashed border-zinc-800 h-full"></div>
              <div className="border-l border-dashed border-zinc-800 h-full"></div>
              <div className="border-l border-dashed border-zinc-800 h-full"></div>
            </div>
            <div className="flex flex-col h-full border-b border-zinc-800 py-8 justify-between items-center">
              <div className="border-b border-dashed border-zinc-800 w-full"></div>
              <div className="border-b border-dashed border-zinc-800 w-full"></div>
            </div>
            <div className="absolute flex w-full h-full items-center justify-center">
              <div className="h-16 w-16 rounded-full border-dashed border border-zinc-800 text-center flex justify-center items-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-t to-[#2824d5] from-[#000] py-2 px-2 text-blue-700 dark:from-black dark:to-blue-400">
                    <h2 className="font-bold text-xl text-[#FF0088]">{slug}</h2>
                </div>
              </div>
            </div>

            <div className="absolute w-10 h-8 -right-0.5 bg-[#02020F]">
              <div className="" style={{
                color: 'hsla(0, 0%, 100%, .4)',
                width: '32px',
                height: '32px',
                position: 'absolute',
                top: '-1px',
                right: '0',
                zIndex: 2,
                borderBottom: '32px solid hsla(0, 0%, 100%, .4)',
                borderRight: '32px solid #02020F',
              }}>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-4 py-2">
          <h4 className="font-bold text-xl">{title}</h4>
          <p className="text-slate-400 text-sm mt-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}