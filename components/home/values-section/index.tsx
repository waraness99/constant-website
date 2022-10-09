import { Section } from "components/layout/section";
import { Value } from "graphql/home/types";
import styles from "styles/gradient.module.css";

interface ValuesSectionProps {
  values: Value[];
}

export const ValuesSection = ({ values }: ValuesSectionProps) => (
  <Section>
    <div className="grid gap-16 grid-cols-1 md:grid-cols-2">
      <div className="md:order-last">
        <div className="lg:max-w-md space-y-8">
          <h2 className="text-xl md:text-3xl leading-tight">Here are some of the values I live by</h2>

          {values.map(({ id, title, description }) => (
            <div key={id} className="space-y-2">
              <h3 className="font-bold text-lg">{title}</h3>
              <p className="text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={`${styles.greenGradient} h-96 rounded-2xl mb-32`}>
        <img
          className="relative top-10 mx-auto transform hover:-translate-y-2 transition ease-in-out duration-500 w-2/3 rounded-2xl"
          src="/constant-druon.jpg"
          alt="Constant Druon"
        />
      </div>
    </div>
  </Section>
);
