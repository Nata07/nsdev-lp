'use client'

import { Button } from "@/components/ui/button";
import { handleWpp } from "@/utils/handle-wpp";
import { LucideArrowUpRight } from "lucide-react";

type ButtonWppProps = {
  title: string 
}

export function ButtonWpp({ title }: ButtonWppProps) {
  return(
    <Button onClick={handleWpp} className="h-14 w-auto bg-gradient-to-b cursor-pointer gap-2 to-[#2824d563] from-[#2824d532] hover:opacity-80 font-bold">
      {title}
      <LucideArrowUpRight color="#FF0088" />
    </Button>
  )
}