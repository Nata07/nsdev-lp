/**
 * v0 by Vercel.
 * @see https://v0.dev/t/PGXn4qvhrFY
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Avatar } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function LPDefault() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <div className="border-b border-gray-200 dark:border-gray-800">
        <div className="px-4 py-6 md:py-8 lg:px-6 xl:px-8">
          <div className="flex items-center justify-between">
            <Link className="inline-flex items-center space-x-2" href="#">
              <img
                alt="NSDEV Creative"
                className="rounded-lg"
                height={32}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "32/32",
                  objectFit: "cover",
                }}
                width={32}
              />
              <span className="text-lg font-semibold tracking-tight">NSDEV Creative</span>
            </Link>
            <nav className="hidden space-x-4 text-sm font-medium lg:flex">
              <Link className="text-gray-900 dark:text-gray-100" href="#">
                Home
              </Link>
              <Link className="text-gray-500 dark:text-gray-500" href="#">
                Services
              </Link>
              <Link className="text-gray-500 dark:text-gray-500" href="#">
                Portfolio
              </Link>
              <Link className="text-gray-500 dark:text-gray-500" href="#">
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link
                className="text-gray-500 rounded-lg dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 p-2"
                href="#"
              >
                <span className="sr-only">View notifications</span>
                <div className="w-4 h-4" />
              </Link>
              <div>
                <div className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                  {/* <Avatar alt="Avatar" className="w-8 h-8 border" src="/images/placeholder-avatar.jpg" /> */}
                  <span className="sr-only">Toggle menu</span>
                </div>
                <div>
                  <div>
                    <div className="w-4 h-4 mr-2" />
                    Profile
                  </div>
                  <div>
                    <div className="w-4 h-4 mr-2" />
                    Settings
                  </div>
                  <div />
                  <div>
                    <div className="w-4 h-4 mr-2" />
                    Logout
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:hidden">
              <div>
                <div className="p-2 -mr-2 rounded-lg">
                  <div className="w-5 h-5" />
                  <span className="sr-only">Toggle menu</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="grid items-center min-h-screen gap-12 text-center lg:gap-20">
        <div className="container px-4 py-16 md:py-24 lg:py-32">
          <div className="space-y-6 lg:space-y-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl md:leading-[3.5rem]">
              Beautifully Crafted Websites
            </h1>
            <p className="mx-auto text-gray-500 md:w-[700px] dark:text-gray-400">
              We design and develop stunning, high-performance websites that elevate your brand and captivate your
              audience.
            </p>
            <form className="mx-auto md:max-w-[500px]">
              <div className="flex flex-col items-center rounded-lg border border-gray-200 dark:border-gray-800 md:flex-row">
                <Input
                  className="w-full max-w-[300px] border-0 rounded-none rounded-lg md:rounded-l-lg md:rounded-r-none"
                  placeholder="Enter your email"
                  required
                  type="email"
                />
                <Button className="rounded-lg md:rounded-l-none" type="submit">
                  Get Started
                </Button>
              </div>
            </form>
          </div>
        </div>
        <section className="w-full py-12 bg-gray-50 dark:bg-gray-900">
          <div className="container grid max-w-6xl gap-8 px-4 md:gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4 md:space-y-6">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Our Services</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl md:max-w-[500px] lg:text-gray-400">
                We offer a range of services to meet your digital needs, from custom web design to scalable web
                development.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 md:gap-10">
              <div className="flex flex-col items-center space-y-1 md:items-start md:space-y-2">
                <img
                  alt="Web Design"
                  className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg"
                  height={96}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "96/96",
                    objectFit: "cover",
                  }}
                  width={96}
                />
                <div className="space-y-2">
                  <h3 className="font-semibold">Web Design</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Create a stunning first impression with our custom web design services.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-1 md:items-start md:space-y-2">
                <img
                  alt="Web Development"
                  className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg"
                  height={96}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "96/96",
                    objectFit: "cover",
                  }}
                  width={96}
                />
                <div className="space-y-2">
                  <h3 className="font-semibold">Web Development</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Build a powerful online presence with our scalable web development solutions.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-1 md:items-start md:space-y-2">
                <img
                  alt="SEO Optimization"
                  className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg"
                  height={96}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "96/96",
                    objectFit: "cover",
                  }}
                  width={96}
                />
                <div className="space-y-2">
                  <h3 className="font-semibold">SEO Optimization</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Improve your search rankings and drive organic traffic with our SEO optimization.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-1 md:items-start md:space-y-2">
                <img
                  alt="UX/UI Design"
                  className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg"
                  height={96}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "96/96",
                    objectFit: "cover",
                  }}
                  width={96}
                />
                <div className="space-y-2">
                  <h3 className="font-semibold">UX/UI Design</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Deliver an exceptional user experience with our expert UX/UI design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="grid items-center py-12 gap-8 md:py-20 lg:gap-12">
          <div className="container px-4">
            <div className="flex flex-col items-center space-y-2 text-center md:space-y-4 md:items-start md:flex-row md:justify-between md:text-left">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Our Portfolio</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl md:max-w-[500px] lg:text-gray-400">
                  See the stunning websites we ve created for our clients.
                </p>
              </div>
              <nav className="flex items-center justify-center gap-4 md:gap-8 lg:justify-end">
                <Link
                  className="inline-flex items-center text-sm font-medium rounded-lg px-3 py-2 bg-gray-100 dark:bg-gray-800"
                  href="#"
                >
                  All
                </Link>
                <Link className="inline-flex items-center text-sm font-medium rounded-lg px-3 py-2" href="#">
                  Web Design
                </Link>
                <Link className="inline-flex items-center text-sm font-medium rounded-lg px-3 py-2" href="#">
                  Web Development
                </Link>
                <Link className="inline-flex items-center text-sm font-medium rounded-lg px-3 py-2" href="#">
                  UX/UI Design
                </Link>
              </nav>
            </div>
          </div>
          <div className="container px-4">
            <div className="grid max-w-6xl gap-4 md:gap-8 lg:gap-12">
              <div className="relative group">
                <img
                  alt="Project 1"
                  className="rounded-lg object-cover"
                  height={225}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/225",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 transition-opacity bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900/0 group-hover:opacity-50">
                  <Button className="rounded-full" variant="outline">
                    <div className="w-4 h-4 mr-2" />
                    View
                  </Button>
                </div>
              </div>
              <div className="relative group">
                <img
                  alt="Project 2"
                  className="rounded-lg object-cover"
                  height={225}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/225",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 transition-opacity bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900/0 group-hover:opacity-50">
                  <Button className="rounded-full" variant="outline">
                    <div className="w-4 h-4 mr-2" />
                    View
                  </Button>
                </div>
              </div>
              <div className="relative group">
                <img
                  alt="Project 3"
                  className="rounded-lg object-cover"
                  height={225}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/225",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 transition-opacity bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900/0 group-hover:opacity-50">
                  <Button className="rounded-full" variant="outline">
                    <div className="w-4 h-4 mr-2" />
                    View
                  </Button>
                </div>
              </div>
              <div className="relative group">
                <img
                  alt="Project 4"
                  className="rounded-lg object-cover"
                  height={225}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/225",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 transition-opacity bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900/0 group-hover:opacity-50">
                  <Button className="rounded-full" variant="outline">
                    <div className="w-4 h-4 mr-2" />
                    View
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 border-t border-gray-200 dark:border-gray-800">
          <div className="container grid items-center gap-8 px-4 md:gap-12 lg:grid-cols-2">
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Client Testimonials</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Don t just take our word for it. Here s what our clients have to say about working with us.
              </p>
            </div>
            <div className="grid gap-4 md:gap-8">
              <div className="flex items-center space-x-4">
                {/* <Avatar className="w-12 h-12" src="/images/placeholder-avatar.jpg" /> */}
                <div className="space-y-1.5">
                  <h3 className="font-semibold">Sarah Johnson</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Marketing Manager</p>
                </div>
              </div>
              <div className="prose max-w-none">
                <p>
                  NSDEV Creative exceeded our expectations. The website they designed not only looked fantastic but
                  also improved user engagement. We saw a noticeable increase in conversions after launching the new
                  site. Their team was professional, responsive, and a pleasure to work with
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12">
          <div className="container grid items-center gap-8 px-4 md:gap-12 lg:grid-cols-2">
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Get In Touch</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Ready to start your next project? Contact us to discuss your requirements.
              </p>
            </div>
            <form className="grid gap-4 md:gap-8">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" required type="email" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Enter your message" required />
              </div>
              <Button type="submit">Submit</Button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}

