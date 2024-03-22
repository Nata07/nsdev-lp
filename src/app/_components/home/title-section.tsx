type TitleSectionProps = {
  title: string
}

export function TitleSection({ title }: TitleSectionProps) {
  return (
    <div className="space-y-1 mb-8">
      <h3 className="font-bold leading-normal text-start text-5xl">{title}</h3>
      <div className="p-[0.5px] max-w-24 bg-gradient-to-l to-[#2824d585] from-[#FF008885]" />
    </div>
  )
}