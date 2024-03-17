/**
 * v0 by Vercel.
 * @see https://v0.dev/t/OzB6yieIssh
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Lp4() {
  return (
    <div className="bg-gray-50 dark:bg-gray-950">
      <div className="py-12 lg:py-24">
        <div className="container px-4 lg:px-8">
          <div className="grid gap-12 lg:gap-24">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                We design & build exceptional web experiences.
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Crafting beautiful websites with performance, accessibility, and user experience in mind.
              </p>
            </div>
            <div>
              <Link className="inline-block btn btn-primary btn-lg scale-75" href="#">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section className="border-t border-b border-gray-200 dark:border-gray-800">
        <div className="container px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-24 py-12 lg:py-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-extrabold tracking-tight">Modern, accessible, and performant.</h2>
              <p className="text-gray-600 dark:text-gray-400">
                We specialize in creating stunning web experiences that are accessible to everyone and perform
                beautifully on any device.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                alt="Example image"
                className="rounded-xl"
                height="350"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/350",
                  objectFit: "cover",
                }}
                width="600"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 lg:py-16">
        <div className="container px-4 lg:px-8">
          <div className="grid gap-12 lg:gap-24">
            <div className="space-y-4">
              <h2 className="text-3xl font-extrabold tracking-tight">Our Services</h2>
              <p className="text-gray-600 dark:text-gray-400">
                We offer a range of services to help bring your web projects to life.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start">
              <div className="flex items-start space-x-4">
                <LayoutIcon className="w-8 h-8 flex-shrink-0" />
                <div className="space-y-1.5">
                  <h3 className="font-semibold">Design & UX</h3>
                  <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                    Crafting beautiful and intuitive user experiences.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <LayoutIcon className="w-8 h-8 flex-shrink-0" />
                <div className="space-y-1.5">
                  <h3 className="font-semibold">Frontend Development</h3>
                  <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                    Building responsive and performant web interfaces.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <WebhookIcon className="w-8 h-8 flex-shrink-0" />
                <div className="space-y-1.5">
                  <h3 className="font-semibold">Backend Development</h3>
                  <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                    Creating powerful server-side logic and API integrations.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MenuIcon className="w-8 h-8 flex-shrink-0" />
                <div className="space-y-1.5">
                  <h3 className="font-semibold">Content Management</h3>
                  <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                    Empowering content editors with easy-to-use management systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-t border-gray-200 dark:border-gray-800">
        <div className="container px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-24 py-12 lg:py-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-extrabold tracking-tight">Let's build something great together.</h2>
              <p className="text-gray-600 dark:text-gray-400">
                We work with clients to turn their vision into reality. Whether you're a startup, a creative, or an
                established business, we can help you stand out on the web.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                alt="Example image"
                className="rounded-xl"
                height="350"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/350",
                  objectFit: "cover",
                }}
                width="600"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 lg:py-16">
        <div className="container px-4 lg:px-8">
          <div className="grid gap-12 lg:gap-24">
            <div className="space-y-4">
              <h2 className="text-3xl font-extrabold tracking-tight">Our Portfolio</h2>
              <p className="text-gray-600 dark:text-gray-400">Check out some of the projects we've worked on.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="group aspect-square overflow-hidden rounded-lg relative">
                <img
                  alt="Project 1"
                  className="object-cover w-full h-full transition-transform scale-105 group-hover:translate-y-1 group-hover:scale-100"
                  height="600"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "600/600",
                    objectFit: "cover",
                  }}
                  width="600"
                />
                <div className="absolute inset-0 flex items-end">
                  <div className="px-4 py-2 bg-white bg-opacity-90 backdrop-blur-3 backdrop-filter transition-transform translate-y-full">
                    Project 1
                  </div>
                </div>
              </div>
              <div className="group aspect-square overflow-hidden rounded-lg relative">
                <img
                  alt="Project 2"
                  className="object-cover w-full h-full transition-transform scale-105 group-hover:translate-y-1 group-hover:scale-100"
                  height="600"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "600/600",
                    objectFit: "cover",
                  }}
                  width="600"
                />
                <div className="absolute inset-0 flex items-end">
                  <div className="px-4 py-2 bg-white bg-opacity-90 backdrop-blur-3 backdrop-filter transition-transform translate-y-full">
                    Project 2
                  </div>
                </div>
              </div>
              <div className="group aspect-square overflow-hidden rounded-lg relative">
                <img
                  alt="Project 3"
                  className="object-cover w-full h-full transition-transform scale-105 group-hover:translate-y-1 group-hover:scale-100"
                  height="600"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "600/600",
                    objectFit: "cover",
                  }}
                  width="600"
                />
                <div className="absolute inset-0 flex items-end">
                  <div className="px-4 py-2 bg-white bg-opacity-90 backdrop-blur-3 backdrop-filter transition-transform translate-y-full">
                    Project 3
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-t border-gray-200 dark:border-gray-800">
        <div className="container px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-24 py-12 lg:py-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-extrabold tracking-tight">Ready to get started?</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Let's discuss your project. Reach out to us to get the conversation started.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Link className="btn btn-primary" href="#">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function LayoutIcon(props) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <line x1="3" x2="21" y1="9" y2="9" />
      <line x1="9" x2="9" y1="21" y2="9" />
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


function WebhookIcon(props) {
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
      <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" />
      <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" />
      <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" />
    </svg>
  )
}
