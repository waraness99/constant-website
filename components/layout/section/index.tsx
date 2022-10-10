import { twMerge } from "tailwind-merge";

interface SectionProps {
  children: React.ReactElement | React.ReactElement[];
  parentClassName?: string;
  childrenClassName?: string;
}

export const Section = ({ children, parentClassName, childrenClassName }: SectionProps) => {
  const parentClasses = twMerge(`
   py-12 md:py-16 lg:py-20
    ${parentClassName}
  `);

  const childrenClasses = twMerge(`container max-w-screen-xl mx-auto px-4 md:px-8 space-y-12 ${childrenClassName}`);

  return (
    <section className={parentClasses}>
      <div className={childrenClasses}>{children}</div>
    </section>
  );
};
