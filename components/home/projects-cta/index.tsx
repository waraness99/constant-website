import Link from "next/link";
import { Section } from "components/layout/section";
import styles from "./project-cta.module.css";

export const ProjectCTA = () => (
  <Section>
    <div className={`${styles.background} p-1 rounded-xl`}>
      <div className="flex align-center p-10 space-x-2 bg-black-80 rounded-lg border border-white-10">
        <div className="flex-grow space-y-2">
          <h2 className="text-lg">Come and discover my projects!</h2>
          <p>I build stuff from time to time that might be interesting 🤷‍</p>
        </div>

        <Link href="/projects" passHref>
          <button>View Projects</button>
        </Link>
      </div>
    </div>
  </Section>
);
