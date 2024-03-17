/**
 * v0 by Vercel.
 * @see https://v0.dev/t/KcTvPWoKv8i
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function LP2() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <div className="space-y-12">
        <div className="space-y-8">
          <header className="sm:pt-8 lg:pt-12 xl:pt-16">
            <div className="container px-4">
              <div className="flex items-center justify-between space-x-4">
                <Link className="flex space-x-2 items-center" href="#">
                  <span className="sr-only">Home</span>
                  <img
                    alt="Logo"
                    className="rounded-full"
                    height="40"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "40/40",
                      objectFit: "cover",
                    }}
                    width="40"
                  />
                  <span className="font-semibold text-lg tracking-tight">Company</span>
                </Link>
                <nav className="flex items-center space-x-4">
                  <Link
                    className="font-medium text-sm tracking-wide border-b-2 border-transparent hover:border-blue-600 transition-colors duration-200"
                    href="#"
                  >
                    Services
                  </Link>
                  <Link
                    className="font-medium text-sm tracking-wide border-b-2 border-transparent hover:border-blue-600 transition-colors duration-200"
                    href="#"
                  >
                    Projects
                  </Link>
                  <Link
                    className="font-medium text-sm tracking-wide border-b-2 border-transparent hover:border-blue-600 transition-colors duration-200"
                    href="#"
                  >
                    Team
                  </Link>
                  <Link
                    className="font-medium text-sm tracking-wide border-b-2 border-transparent hover:border-blue-600 transition-colors duration-200"
                    href="#"
                  >
                    Contact
                  </Link>
                </nav>
              </div>
            </div>
          </header>
          <main className="container px-4 space-y-12">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tight">Cutting-Edge Technology</h1>
                  <p className="text-gray-500 dark:text-gray-400">
                    We build modern web experiences using the latest tools and frameworks.
                  </p>
                </div>
                <form className="flex space-x-4">
                  <Input className="max-w-sm flex-1" placeholder="Enter your email" type="email" />
                  <Button variant="default">Subscribe</Button>
                </form>
              </div>
              <img
                alt="Team"
                className="mx-auto"
                height="500"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "1110/500",
                  objectFit: "cover",
                }}
                width="1110"
              />
            </div>
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight">High-Quality Code</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our team of experienced developers crafts elegant solutions with a focus on performance and
                    maintainability.
                  </p>
                </div>
                <img
                  alt="Projects"
                  className="mx-auto rounded-xl object-cover"
                  height="400"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "720/400",
                    objectFit: "cover",
                  }}
                  width="720"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <img
                  alt="Projects"
                  className="mx-auto rounded-xl object-cover"
                  height="400"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "720/400",
                    objectFit: "cover",
                  }}
                  width="720"
                />
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight">Innovative Solutions</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    We collaborate with our clients to deliver custom software that meets their unique needs, leveraging
                    creativity and innovation.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight">Expertise & Experience</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our team combines expertise in design, development, and strategy, ensuring that we deliver
                    comprehensive solutions to our clients.
                  </p>
                </div>
                <img
                  alt="Projects"
                  className="mx-auto rounded-xl object-cover"
                  height="400"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "720/400",
                    objectFit: "cover",
                  }}
                  width="720"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <img
                  alt="Projects"
                  className="mx-auto rounded-xl object-cover"
                  height="400"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "720/400",
                    objectFit: "cover",
                  }}
                  width="720"
                />
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight">Client-Centered Approach</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    We are committed to understanding our clients  goals and delivering solutions that drive their
                    success.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight">Seamless Collaboration</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    We believe in open communication and collaboration, working closely with our clients at every stage
                    of the project.
                  </p>
                </div>
                <img
                  alt="Projects"
                  className="mx-auto rounded-xl object-cover"
                  height="400"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "720/400",
                    objectFit: "cover",
                  }}
                  width="720"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <img
                  alt="Projects"
                  className="mx-auto rounded-xl object-cover"
                  height="400"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "720/400",
                    objectFit: "cover",
                  }}
                  width="720"
                />
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight">Results-Driven Solutions</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our focus is on delivering tangible results, whether it s improving efficiency, engaging customers,
                    or driving business growth.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight">Secure & Scalable</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    We architect solutions with security and scalability in mind, ensuring that our clients 
                    applications are built to evolve with their needs.
                  </p>
                </div>
                <img
                  alt="Projects"
                  className="mx-auto rounded-xl object-cover"
                  height="400"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "720/400",
                    objectFit: "cover",
                  }}
                  width="720"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <img
                  alt="Projects"
                  className="mx-auto rounded-xl object-cover"
                  height="400"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "720/400",
                    objectFit: "cover",
                  }}
                  width="720"
                />
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight">Client Success Stories</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our clients trust us to deliver, and we take pride in helping them achieve their goals. Here are
                    some of their success stories.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight">Seamless Integration</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    We help our clients integrate new technologies and solutions into their existing systems, ensuring a
                    smooth transition and maximizing the value of their investments.
                  </p>
                </div>
                <img
                  alt="Projects"
                  className="mx-auto rounded-xl object-cover"
                  height="400"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "720/400",
                    objectFit: "cover",
                  }}
                  width="720"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <img
                  alt="Projects"
                  className="mx-auto rounded-xl object-cover"
                  height="400"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "720/400",
                    objectFit: "cover",
                  }}
                  width="720"
                />
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight">Innovative Solutions</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    We collaborate with our clients to deliver custom software that meets their unique needs, leveraging
                    creativity and innovation.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight">Expertise & Experience</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our team combines expertise in design, development, and strategy, ensuring that we deliver
                    comprehensive solutions to our clients.
                  </p>
                </div>
                <img
                  alt="Projects"
                  className="mx-auto rounded-xl object-cover"
                  height="400"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "720/400",
                    objectFit: "cover",
                  }}
                  width="720"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <img
                  alt="Projects"
                  className="mx-auto rounded-xl object-cover"
                  height="400"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "720/400",
                    objectFit: "cover",
                  }}
                  width="720"
                />
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight">Client-Centered Approach</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    We are committed to understanding our clients  goals and delivering solutions that drive their
                    success.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight">Seamless Collaboration</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    We believe in open communication and collaboration, working closely with our clients at every stage
                    of the project.
                  </p>
                </div>
                <img
                  alt="Projects"
                  className="mx-auto rounded-xl object-cover"
                  height="400"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "720/400",
                    objectFit: "cover",
                  }}
                  width="720"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <img
                  alt="Projects"
                  className="mx-auto rounded-xl object-cover"
                  height="400"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "720/400",
                    objectFit: "cover",
                  }}
                  width="720"
                />
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight">Results-Driven Solutions</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our focus is on delivering tangible results, whether it s improving efficiency, engaging customers,
                    or driving business growth.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight">Secure & Scalable</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    We architect solutions with security and scalability in mind, ensuring that our clients 
                    applications are built to evolve with their needs.
                  </p>
                </div>
                <img
                  alt="Projects"
                  className="mx-auto rounded-xl object-cover"
                  height="400"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "720/400",
                    objectFit: "cover",
                  }}
                  width="720"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <img
                  alt="Projects"
                  className="mx-auto rounded-xl object-cover"
                  height="400"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "720/400",
                    objectFit: "cover",
                  }}
                  width="720"
                />
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight">Client Success Stories</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our clients trust us to deliver, and we take pride in helping them achieve their goals. Here are
                    some of their success stories.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight">Seamless Integration</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    We help our clients integrate new technologies and solutions into their existing systems, ensuring a
                    smooth transition and maximizing the value of their investments.
                  </p>
                </div>
                <img
                  alt="Projects"
                  className="mx-auto rounded-xl object-cover"
                  height="400"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "720/400",
                    objectFit: "cover",
                  }}
                  width="720"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <img
                  alt="Projects"
                  className="mx-auto rounded-xl object-cover"
                  height="400"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "720/400",
                    objectFit: "cover",
                  }}
                  width="720"
                />
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight">Innovative Solutions</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    We collaborate with our clients to deliver custom software that meets their unique needs, leveraging
                    creativity and innovation.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight">Expertise & Experience</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our team combines expertise in design, development, and strategy, ensuring that we deliver
                    comprehensive solutions to our clients.
                  </p>
                </div>
                <img
                  alt="Projects"
                  className="mx-auto rounded-xl object-cover"
                  height="400"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "720/400",
                    objectFit: "cover",
                  }}
                  width="720"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <img
                  alt="Projects"
                  className="mx-auto rounded-xl object-cover"
                  height="400"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "720/400",
                    objectFit: "cover",
                  }}
                  width="720"
                />
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight">Client-Centered Approach</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    We are committed to understanding our clients goals and delivering solutions that drive their
                    success.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight">Seamless Collaboration</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    We believe in open communication and collaboration, working closely with our clients at every stage
                    of the project.
                  </p>
                </div>
                <img
                  alt="Projects"
                  className="mx-auto rounded-xl object-cover"
                  height="400"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "720/400",
                    objectFit: "cover",
                  }}
                  width="720"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <img
                  alt="Projects"
                  className="mx-auto rounded-xl object-cover"
                  height="400"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "720/400",
                    objectFit: "cover",
                  }}
                  width="720"
                />
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight">Results-Driven Solutions</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our focus is on delivering tangible results, whether it s improving efficiency, engaging customers,
                    or driving business growth.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight">Secure & Scalable</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    We architect solutions with security and scalability in mind, ensuring that our clients 
                    applications are built to evolve with their needs.
                  </p>
                </div>
                <img
                  alt="Projects"
                  className="mx-auto rounded-xl object-cover"
                  height="400"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "720/400",
                    objectFit: "cover",
                  }}
                  width="720"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center" />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

