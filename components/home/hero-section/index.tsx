import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { Section } from "components/layout/section";
import { Button } from "components/button";
import { openCrispBox } from "utils/links";

export const HeroSection = () => (
  <div className="bg-[url('/hero-bg-gradient.jpg')] bg-cover bg-no-repeat bg-bottom">
    <Section>
      <div className="flex flex-col items-center justify-center text-center space-y-8">
        <div className="w-2/3 max-w-xs gradient-mask-b-60">
          <img src="/constant-druon-avatar.png" alt="Constant Druon" />
        </div>

        <h1 className="text-xl md:text-4xl leading-tight">
          <TypeAnimation
            sequence={["Hey! Nice to meet you 👋", 1000, "I'm Constant Druon, I'm a", 1000]}
            speed={10}
            repeat={0}
          />
          <em className="text-3xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#f83a3a] via-[#f13dd4] to-[#7000ff]">
            Software Engineer
          </em>
        </h1>

        <p className="md:text-lg max-w-xl">
          I try to make the world a better place by creating quality software that improve the lives of those around me.
        </p>

        <div className="flex flex-col space-y-4">
          <Link href="/projects" passHref>
            <Button>Check my projects</Button>
          </Link>

          <button onClick={openCrispBox} className="text-sm text-white text-opacity-40">
            Contact me
          </button>
        </div>
      </div>
    </Section>
  </div>
);
