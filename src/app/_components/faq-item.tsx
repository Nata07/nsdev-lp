import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type FaqItemProps = {
  question: string;
  answer: string;
  id: string;
}

export function FaqItem({ question, answer, id }: FaqItemProps) {
  return (
    <Accordion type="single" collapsible className="py-2 px-4 border border-zinc-900 rounded-lg">
      <AccordionItem value={id}>
        <AccordionTrigger className="text-left">{question}</AccordionTrigger>
        <AccordionContent>
          <div className="flex text-left">
            {answer}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}