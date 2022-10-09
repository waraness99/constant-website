import { Section } from "components/layout/section";
import { getAgeByBirthDate } from "utils/date";
import styles from "styles/gradient.module.css";

export const AboutMeSection = () => (
  <Section>
    <div className="grid gap-16 grid-cols-1 md:grid-cols-2 items-center">
      <div className="space-y-8">
        <h2 className="text-xl md:text-3xl leading-tight">A bit about me</h2>
        <p>
          Hi, my name is Constant. I am a {getAgeByBirthDate("03 Nov 1999")} years old Software Engineer from France. I
          am passionate about building a better world through technology.
        </p>
        <p>
          I have started two startups since I was 18 years old, and I am always looking for new ways to use technology
          to make a positive impact on the world.
        </p>
      </div>

      <div className={`${styles.purpleGradient} rounded-xl mb-10`}>
        <img
          className="relative w-10/12 -bottom-10 -right-16 transform hover:scale-105 transition ease-in-out duration-500 rounded-xl"
          src="/about-constant-druon.jpg"
          alt="Constant Druon during a startup pitch"
        />
      </div>
    </div>
  </Section>
);
