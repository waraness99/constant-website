import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button = ({ children, className, ...rest }: ButtonProps) => {
  const classes = twMerge(`
  bg-white hover:bg-white-90 active:bg-white-80 text-black font-bold py-2 md:py-3 px-4 md:px-4 rounded-lg
  ${className}
`);

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};
