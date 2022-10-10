import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  const classes = twMerge(`
    text-xl font-semibold text-white hover:text-red
    ${className}
  `);

  return (
    <Link href="/" passHref>
      <a className={classes}>Constant Druon</a>
    </Link>
  );
};
