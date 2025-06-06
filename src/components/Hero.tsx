import Image from "next/image";
import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";

export const Hero = () => {
  return (
    <div className="hero-section">
      <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10 ">
        <div className="text-center lg:text-start space-y-6">
          <main className="text-5xl md:text-6xl font-bold text-balance">
            <h1 className="inline">
              <span className="inline bg-gradient-to-r from-[#667EEA] to-[#764BA2] text-transparent bg-clip-text">
                Stripe
              </span>{" "}
              Course with
            </h1>{" "}
            <h2 className="inline">
              <span className="inline bg-gradient-to-r from-[#667EEA] to-[#764BA2] text-transparent bg-clip-text">
                Next.js
              </span>{" "}
            </h2>
          </main>
          {/* <a href=''>
						<img src='https://made-with.prisma.io/dark.svg' width={220} height={130} alt='' />
					</a> */}

          <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0 text-balance">
            Stripe subscriptions are intimidating, but they don't have to be.
            Let's prove it.
          </p>

          <Button className="w-full md:w-2/3">Get Started</Button>
        </div>

        {/* Hero cards sections */}
        <div className="z-10">
          {/* <HeroCards /> */}
          <Image
            src="/hero.png"
            width={986}
            height={512}
            alt=""
            className="rounded-md select-none pointer-events-none"
          />
        </div>

        {/* Shadow effect */}
        <div className="shadow"></div>
      </section>
    </div>
  );
};
