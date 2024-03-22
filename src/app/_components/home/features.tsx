import { LucideActivity, LucideNetwork } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function FeaturesHome() {
  return (
    <section className="relative py-20">
      <div className="container max-w-screen-xl">
        <header style={{ marginBottom: '3rem' }}>
          <Link href={`/`} className="border border-border rounded-full inline-flex items-center justify-center text-[14px] relative mb-6">
            <div className="absolute right-3 top-0 z-10 h-px w-[80px]">
            </div>
            <span className="inline-flex items-center gap-1 whitespace-nowrap px-6 py-3">
              Features
            </span>
          </Link>
          <h3 style={{ color: 'white', fontSize: '1.875rem', fontWeight: 'bold', maxWidth: '30%', marginBottom: '1rem' }}>
            First-class developer experience
          </h3>
          <p style={{ opacity: '0.8', fontSize: '1.125rem', maxWidth: '70%' }}>
            NotifyLog streamlines team routines with centralized event management, insights, and data-driven decision making.
          </p>
        </header>
        <main className="grid md:grid-cols-2 gap-8">
          <div className="">
            <Image alt="Imagem 1" src="/hr.webp" width={1280} height={720} className="mb-6" />
            <div className="rounded-md border max-w-9 border-indigo-900 bg-gradient-to-t to-[#2824d563] from-[#000] p-1.5 text-blue-700 dark:from-black dark:to-blue-400">
              <LucideActivity className="w-5 h-5" color="#FF0088" />
            </div>
            <h4 className="mb-2 mt-4 font-bold">Centralize events in one place</h4>
            <p className="opacity-80 mb-4">NotifyLog serves as a centralized hub for event tracking, allowing you to consolidate notifications from multiple sources. This centralization streamlines monitoring and decision-making, offering seamless integration with your existing workflows.</p>
          </div>
          <div className="">
            <Image alt="Imagem 1" src="/hero-01.webp" width={1280} height={720} className="mb-6" />
            <div className="flex items-center justify-center rounded-md border max-w-9 border-indigo-900 bg-gradient-to-t to-[#2824d563] from-[#000] p-1.5 text-blue-700 dark:from-black dark:to-blue-400">
              <LucideNetwork className="w-5 h-5" color="#FF0088" />
            </div>
            <h4 className="mb-2 mt-4 font-bold">Centralize events in one place</h4>
            <p className="opacity-80 mb-4">NotifyLog serves as a centralized hub for event tracking, allowing you to consolidate notifications from multiple sources. This centralization streamlines monitoring and decision-making, offering seamless integration with your existing workflows.</p>
          </div>
        </main>              
      </div>
    </section>
  )
}