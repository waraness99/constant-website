type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...rest }: ButtonProps) => (
  <button className="bg-white hover:bg-white-90 active:bg-white-80 text-black font-bold py-3 px-6 rounded-lg" {...rest}>
    {children}
  </button>
);
