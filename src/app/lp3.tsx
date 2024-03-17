/**
 * v0 by Vercel.
 * @see https://v0.dev/t/CaT1i9wMiCk
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function LP3() {
  return (
    <div className="bg-gray-50 dark:bg-gray-950">
      <div className="space-y-6">
        <header className="pt-6 lg:pt-12 pb-6 lg:pb-14">
          <div className="container px-4">
            <div className="flex items-center justify-between">
              <Link className="flex space-x-4 items-center" href="#">
                <span className="sr-only">NSDEV Creative</span>
                <img
                  alt="NSDEV Creative"
                  className="rounded-full"
                  height="40"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40"
                />
                <span className="font-semibold text-lg tracking-tight">NSDEV Creative</span>
              </Link>
              <nav className="hidden lg:flex items-center space-x-4 text-sm font-medium">
                <Link className="text-gray-900 dark:text-gray-100 px-1" href="#">
                  Home
                </Link>
                <Link className="text-gray-900 dark:text-gray-100 px-1" href="#">
                  Services
                </Link>
                <Link className="text-gray-900 dark:text-gray-100 px-1" href="#">
                  Portfolio
                </Link>
                <Link className="text-gray-900 dark:text-gray-100 px-1" href="#">
                  Contact
                </Link>
              </nav>
              <div className="hidden lg:flex items-center space-x-4">
                <Link
                  className="text-sm font-medium leading-none text-gray-900 dark:text-gray-100 hover:underline"
                  href="#"
                >
                  Contact Us
                </Link>
              </div>
              <div className="lg:hidden">
                <button className="rounded-md p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
                  <span className="sr-only">Toggle menu</span>
                  <MenuIcon className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </header>
        <main className="overflow-hidden">
          <div className="bg-gray-50 dark:bg-gray-950">
            <div className="container px-4">
              <div className="grid gap-12 lg:gap-20 items-center space-y-6 lg:space-y-0 lg:grid-cols-2 pb-12 lg:pb-24">
                <div className="space-y-4">
                  <h1 className="text-3xl lg:text-5xl font-bold tracking-tight">
                    We design & build beautiful web experiences
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400 max-w-[600px]">
                    Elevate your brand with stunning websites, crafted with care and precision.
                  </p>
                  <Link
                    className="inline-block rounded-lg btn border-0 gradient-to-r from-[#ff5a5f] to-[#ff1a1f] shadow-[3px_3px_10px_0px_#ff1a1f_0.15] hover:from-[#ff5a5f] hover:to-[#ff1a1f] translate-y-[2px] scale-95 dark:from-[#ff5a5f] dark:to-[#ff1a1f] dark:shadow-[3px_3px_10px_0px_#ff5a5f_0.15]"
                    href="#"
                  >
                    Get In Touch
                  </Link>
                </div>
                <div className="flex justify-center">
                  <img
                    alt="Example Image"
                    className="w-full rounded-lg object-cover aspect-video"
                    height="300"
                    src="/placeholder.svg"
                    width="600"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-900">
            <div className="container px-4 py-12 lg:py-20">
              <div className="grid gap-12 lg:gap-16 items-center space-y-6 lg:space-y-0 lg:grid-cols-2">
                <div className="flex flex-col justify-center space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight">Our Services</h2>
                  <p className="max-w-[500px] text-gray-600 dark:text-gray-400">
                    We offer a range of services to help your business succeed online.
                  </p>
                </div>
                <div className="grid gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <div className="flex flex-col items-center space-y-2">
                    <img
                      alt="Web Design"
                      className="rounded-xl object-cover"
                      height="120"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "120/120",
                        objectFit: "cover",
                      }}
                      width="120"
                    />
                    <div className="flex flex-col items-center space-y-2">
                      <h3 className="text-xl font-semibold">Web Design</h3>
                      <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                        Beautiful, user-friendly designs
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <img
                      alt="Web Development"
                      className="rounded-xl object-cover"
                      height="120"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "120/120",
                        objectFit: "cover",
                      }}
                      width="120"
                    />
                    <div className="flex flex-col items-center space-y-2">
                      <h3 className="text-xl font-semibold">Web Development</h3>
                      <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                        Custom-built, responsive websites
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <img
                      alt="SEO"
                      className="rounded-xl object-cover"
                      height="120"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "120/120",
                        objectFit: "cover",
                      }}
                      width="120"
                    />
                    <div className="flex flex-col items-center space-y-2">
                      <h3 className="text-xl font-semibold">SEO</h3>
                      <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                        Improve your search engine rankings
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container px-4 py-12 lg:py-20">
            <div className="grid gap-12 lg:gap-16 items-center space-y-6 lg:space-y-0 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">Our Process</h2>
                <p className="max-w-[500px] text-gray-600 dark:text-gray-400">
                  We follow a proven process to deliver exceptional results for our clients.
                </p>
              </div>
              <div className="grid gap-4 md:gap-8 lg:gap-12">
                <div className="flex items-center space-x-4">
                  <div className="text-2xl font-semibold">1</div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">Discovery</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      We learn about your business and goals to inform the rest of the process.
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-2xl font-semibold">2</div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">Design</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Our team creates a stunning design that captures your brand and engages your audience.
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-2xl font-semibold">3</div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">Development</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      The design comes to life as our developers build a high-quality, functional website.
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-2xl font-semibold">4</div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">Launch</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Your new website goes live, ready to make a great impression on your visitors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-900">
            <div className="container px-4 py-12 lg:py-20">
              <div className="grid gap-12 lg:gap-16 items-center space-y-6 lg:space-y-0 lg:grid-cols-2">
                <div className="flex flex-col justify-center space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight">Why Choose Us</h2>
                  <p className="max-w-[500px] text-gray-600 dark:text-gray-400">
                    We're passionate about creating exceptional web experiences and are dedicated to the success of our
                    clients.
                  </p>
                </div>
                <div className="grid gap-4 md:gap-8 lg:gap-12">
                  <div className="flex items-center space-x-4">
                    <CheckCircleIcon className="w-6 h-6 text-blue-500" />
                    <div className="space-y-1">
                      <h3 className="font-semibold">Expertise</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Our team has the knowledge and skills to deliver best-in-class websites.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircleIcon className="w-6 h-6 text-blue-500" />
                    <div className="space-y-1">
                      <h3 className="font-semibold">Collaboration</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        We work closely with our clients to understand their needs and goals.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircleIcon className="w-6 h-6 text-blue-500" />
                    <div className="space-y-1">
                      <h3 className="font-semibold">Innovation</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        We stay ahead of the curve, embracing new technologies and design trends.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircleIcon className="w-6 h-6 text-blue-500" />
                    <div className="space-y-1">
                      <h3 className="font-semibold">Results</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Our goal is to deliver websites that drive success for our clients.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container px-4 py-12 lg:py-20">
            <div className="grid gap-12 lg:gap-16 items-center space-y-6 lg:space-y-0 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">Our Portfolio</h2>
                <p className="max-w-[500px] text-gray-600 dark:text-gray-400">
                  See the amazing work we've done for our clients.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center space-y-2">
                  <Link className="rounded-xl overflow-hidden" href="#">
                    <img
                      alt="Project 1"
                      className="scale-95 hover:scale-100 transition-transform"
                      height="200"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "300/200",
                        objectFit: "cover",
                      }}
                      width="300"
                    />
                  </Link>
                  <h3 className="font-semibold text-center">Project 1</h3>
                  <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                    Description of the project and the work we did.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Link className="rounded-xl overflow-hidden" href="#">
                    <img
                      alt="Project 2"
                      className="scale-95 hover:scale-100 transition-transform"
                      height="200"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "300/200",
                        objectFit: "cover",
                      }}
                      width="300"
                    />
                  </Link>
                  <h3 className="font-semibold text-center">Project 2</h3>
                  <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                    Description of the project and the work we did.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Link className="rounded-xl overflow-hidden" href="#">
                    <img
                      alt="Project 3"
                      className="scale-95 hover:scale-100 transition-transform"
                      height="200"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "300/200",
                        objectFit: "cover",
                      }}
                      width="300"
                    />
                  </Link>
                  <h3 className="font-semibold text-center">Project 3</h3>
                  <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                    Description of the project and the work we did.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-900">
            <div className="container px-4 py-12 lg:py-20">
              <div className="grid gap-12 lg:gap-16 items-center space-y-6 lg:space-y-0 lg:grid-cols-2">
                <div className="flex flex-col justify-center space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight">Client Testimonials</h2>
                  <p className="max-w-[500px] text-gray-600 dark:text-gray-400">
                    See what our clients have to say about working with us.
                  </p>
                </div>
                <div className="grid gap-6">
                  <div className="flex items-center space-x-4">
                    <img
                      alt="Client 1"
                      className="rounded-full"
                      height="80"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "80/80",
                        objectFit: "cover",
                      }}
                      width="80"
                    />
                    <div className="space-y-1">
                      <h3 className="font-semibold">Client 1</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Working with NSDEV Creative was a fantastic experience. The team was professional, responsive,
                        and truly understood our vision.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <img
                      alt="Client 2"
                      className="rounded-full"
                      height="80"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "80/80",
                        objectFit: "cover",
                      }}
                      width="80"
                    />
                    <div className="space-y-1">
                      <h3 className="font-semibold">Client 2</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        NSDEV Creative exceeded our expectations with their creativity and attention to detail. Our new
                        website is stunning and has received rave reviews from our customers.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <img
                      alt="Client 3"
                      className="rounded-full"
                      height="80"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "80/80",
                        objectFit: "cover",
                      }}
                      width="80"
                    />
                    <div className="space-y-1">
                      <h3 className="font-semibold">Client 3</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        The NSDEV Creative team was a pleasure to work with. They were patient, communicative, and went
                        above and beyond to deliver a website that captures the essence of our brand.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container px-4 py-12 lg:py-20">
            <div className="grid gap-12 lg:gap-16 items-center space-y-6 lg:space-y-0 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">Contact Us</h2>
                <p className="max-w-prose text-gray-600 dark:text-gray-400">
                  Ready to start your project? Fill out the form below, and we'll be in touch.
                </p>
              </div>
              <div className="grid gap-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col space-y-2">
                    <Label className="text-sm" htmlFor="name">
                      Full Name
                    </Label>
                    <Input id="name" placeholder="Enter your full name" />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Label className="text-sm" htmlFor="email">
                      Email Address
                    </Label>
                    <Input id="email" placeholder="Enter your email address" />
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <Label className="text-sm" htmlFor="message">
                    Your Message
                  </Label>
                  <Textarea className="min-h-[150px] resize-y" id="message" placeholder="Enter your message" />
                </div>
                <div className="flex flex-col space-y-2">
                  <Button size="lg">Submit</Button>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="border-t border-gray-200 dark:border-gray-800" />
      </div>
    </div>
  )
}

function CheckCircleIcon(props) {
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
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}


function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
