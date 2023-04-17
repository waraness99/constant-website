import { Section } from "components/layout/section";
import { getAgeByBirthDate } from "utils/date";
import styles from "styles/gradient.module.css";

export const AboutMeSection = () => (
  <Section>
    <div className="grid gap-16 grid-cols-1 md:grid-cols-2">
      <div className="space-y-8">
        <h2 className="text-xl md:text-3xl leading-tight">About me</h2>
        <p>
          Hi, I’m Constant, a French Software Engineer. I’ve founded two startups since age 18, driven by my passion for
          leveraging technology to make a positive impact. I’m always seeking innovative approaches to problem-solving.
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
