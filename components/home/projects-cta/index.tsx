import Link from "next/link";
import { Section } from "components/layout/section";
import styles from "styles/gradient.module.css";

export const ProjectCTA = () => (
  <Section>
    <div className={`${styles.redGradient} p-1 rounded-xl`}>
      <div className="flex p-4 lg:p-10 space-x-2 bg-black-80 rounded-lg border border-white-10 items-center">
        <div className="w-full md:w-1/2 p-6">
          <div className="space-y-2">
            <h2 className="text-md lg:text-lg">Come and discover my projects!</h2>
            <p>I build stuff from time to time that might be interesting 🤷‍</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-6">
          <div className="flex flex-wrap justify-end -m-2">
            <div className="w-full xl:w-auto p-2">
              <Link href="/projects" passHref>
                <button className="py-2 px-4 block text-sm text-black font-semibold bg-white hover:bg-white-90 rounded-md">
                  Check my projects
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);
