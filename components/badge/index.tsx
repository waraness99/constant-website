import { twMerge } from "tailwind-merge";

interface BadgeProps {
  children: string;
  className?: string;
}

export const Badge = ({ children, className = "" }: BadgeProps) => {
  const classes = twMerge(`
    inline-block text-xs bg-white-20 px-2 py-1 rounded
    ${className}
  `);

  return <p className={classes}>{children}</p>;
};
