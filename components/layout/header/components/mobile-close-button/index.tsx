interface MobileCloseButtonProps {
  onClick: () => void;
}

export const MobileCloseButton = ({ onClick }: MobileCloseButtonProps) => (
  <button className="navbar-burger" onClick={onClick}>
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 18L18 6M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </button>
);
