/**
 * v0 by Vercel.
 * @see https://v0.dev/t/UmtUvR6FYRH
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="bg-gray-50 dark:bg-gray-950">
      <div className="space-y-6">
        <div className="border-b border-gray-200 dark:border-gray-800">
          <div className="container px-4 py-6">
            <header className="flex items-center justify-between">
              <Link className="flex items-center gap-2" href="#">
                <FlagIcon className="h-6 w-6" />
                <span className="font-semibold text-lg">NSDEV Creative</span>
              </Link>
              <nav className="flex items-center gap-6">
                <Link className="font-medium" href="#">
                  Home
                </Link>
                <Link className="font-medium" href="#">
                  Services
                </Link>
                <Link className="font-medium" href="#">
                  Portfolio
                </Link>
                <Link className="font-medium" href="#">
                  Contact
                </Link>
              </nav>
            </header>
          </div>
        </div>
        <div className="container px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tight">Transform Your Online Presence with NSDEV Creative</h1>
              <p className="text-gray-600 dark:text-gray-400">
                We are a web design and development agency that specializes in creating beautiful and functional
                websites for our clients. Let us help you make a great first impression online.
              </p>
              <div className="mt-8">
                <Link className="btn btn-lg" href="#">
                  Learn More
                </Link>
              </div>
            </div>
            <div>
              <img
                alt="Example image"
                className="mx-auto rounded-xl overflow-hidden aspect-video"
                height="400"
                src="/placeholder.svg"
                width="600"
              />
            </div>
          </div>
        </div>
        <section className="border-t border-gray-200 dark:border-gray-800">
          <div className="container px-4 py-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
              <div className="space-y-4">
                <img
                  alt="Example image"
                  className="mx-auto rounded-xl overflow-hidden aspect-[4/3]"
                  height="300"
                  src="/placeholder.svg"
                  width="400"
                />
                <h2 className="text-2xl font-bold tracking-tight">Website Design</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Our team of designers will create a stunning and user-friendly website that showcases your brand and
                  captures the attention of your visitors.
                </p>
              </div>
              <div className="space-y-4">
                <img
                  alt="Example image"
                  className="mx-auto rounded-xl overflow-hidden aspect-[4/3]"
                  height="300"
                  src="/placeholder.svg"
                  width="400"
                />
                <h2 className="text-2xl font-bold tracking-tight">Web Development</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  We specialize in building custom websites with the latest technologies, ensuring performance,
                  security, and scalability.
                </p>
              </div>
              <div className="space-y-4">
                <img
                  alt="Example image"
                  className="mx-auto rounded-xl overflow-hidden aspect-[4/3]"
                  height="300"
                  src="/placeholder.svg"
                  width="400"
                />
                <h2 className="text-2xl font-bold tracking-tight">Branding</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Let us help you create a strong and memorable brand identity with our branding services, including
                  logo design, color palettes, and more.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="border-t border-gray-200 dark:border-gray-800">
          <div className="container px-4 py-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">Our Portfolio</h2>
                <p className="max-w-prose text-gray-600 dark:text-gray-400">
                  Check out some of the amazing projects we've worked on for our clients.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 items-start">
                <img
                  alt="Example image"
                  className="rounded-lg object-cover aspect-[4/3]"
                  height="150"
                  src="/placeholder.svg"
                  width="200"
                />
                <img
                  alt="Example image"
                  className="rounded-lg object-cover aspect-[4/3]"
                  height="150"
                  src="/placeholder.svg"
                  width="200"
                />
                <img
                  alt="Example image"
                  className="rounded-lg object-cover aspect-[4/3]"
                  height="150"
                  src="/placeholder.svg"
                  width="200"
                />
                <img
                  alt="Example image"
                  className="rounded-lg object-cover aspect-[4/3]"
                  height="150"
                  src="/placeholder.svg"
                  width="200"
                />
                <img
                  alt="Example image"
                  className="rounded-lg object-cover aspect-[4/3]"
                  height="150"
                  src="/placeholder.svg"
                  width="200"
                />
                <img
                  alt="Example image"
                  className="rounded-lg object-cover aspect-[4/3]"
                  height="150"
                  src="/placeholder.svg"
                  width="200"
                />
              </div>
            </div>
          </div>
        </section>
        <footer className="bg-gray-100 dark:bg-gray-900">
          <div className="container px-4 py-12">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
                <p className="max-w-prose text-gray-600 dark:text-gray-400">
                  Ready to start your project? Contact us to discuss your ideas and goals.
                </p>
              </div>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input className="w-full" placeholder="Name" type="text" />
                <Input className="w-full" placeholder="Email" type="email" />
                <Input className="w-full" placeholder="Message" type="text" />
                <Button className="w-full" type="submit">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

function FlagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}
