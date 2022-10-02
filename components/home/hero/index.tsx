import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Section } from "components/layout/section";

export const Hero = () => {
  return (
    <div className="bg-[url('/hero-bg-gradient.jpg')] bg-cover bg-no-repeat bg-bottom">
      <Section>
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          <div className="w-auto max-w-xs gradient-mask-b-60">
            <img src="/constant-druon-avatar.png" alt="Constant Druon" />
          </div>

          <h1 className="text-2xl md:text-4xl leading-tight">
            <TypeAnimation
              sequence={["Hey! Nice to meet you 👋", 1000, "I'm Constant Druon, I'm a", 1000]}
              speed={10}
              repeat={0}
            />
            <em className="text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#f83a3a] via-[#f13dd4] to-[#7000ff]">
              Software Engineer
            </em>
          </h1>

          <p className="md:text-lg max-w-xl">
            I try to make the world a better place by creating quality software that improve the lives of those around
            me.
          </p>

          <div className="flex flex-col space-y-2">
            <button>Get my resume</button>
            <a className="text-sm text-white text-opacity-40">Contact me</a>
          </div>
        </div>
      </Section>
    </div>
  );
};
