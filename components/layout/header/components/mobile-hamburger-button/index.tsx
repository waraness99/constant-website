interface MobileHamburgerButtonProps {
  onClick: () => void;
}

export const MobileHamburgerButton = ({ onClick }: MobileHamburgerButtonProps) => (
  <div className="w-auto lg:hidden">
    <button onClick={onClick}>
      <svg
        className="navbar-burger text-white-10"
        width="51"
        height="51"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="56" height="56" rx="28" fill="currentColor" />
        <path d="M37 32H19M37 24H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  </div>
);
