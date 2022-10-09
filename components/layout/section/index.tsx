import { twMerge } from "tailwind-merge";

interface SectionProps {
  children: React.ReactElement | React.ReactElement[];
  parentClassName?: string;
  childrenClassName?: string;
}

export const Section = ({ children, parentClassName, childrenClassName }: SectionProps) => {
  const parentClasses = twMerge(`
   py-10 md:py-12 lg:py-16
    ${parentClassName}
  `);

  const childrenClasses = twMerge(`
  container max-w-screen-xl mx-auto px-6 md:px-8 space-y-12
    ${childrenClassName}
  `);

  return (
    <section className={parentClasses}>
      <div className={childrenClasses}>{children}</div>
    </section>
  );
};
