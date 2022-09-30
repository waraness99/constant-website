import React from "react";

interface SectionProps {
  children: React.ReactElement | React.ReactElement[];
  className?: string;
}

const defaultClassName = "py-16 md:py-20 lg:py-24";

export const Section = ({ children, className = defaultClassName }: SectionProps) => {
  return (
    <section className={className}>
      <div className="container px-4 md:px-6 lg:px-24 mx-auto">{children}</div>
    </section>
  );
};
