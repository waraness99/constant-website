import Link from "next/link";
import { headerLinks, openCrispBox } from "utils/links";

interface MobileNavigationProps {
  afterNavigation?: () => void;
}

export const MobileNavigation = ({ afterNavigation }: MobileNavigationProps) => (
  <div className="flex flex-col justify-center py-12 space-y-12">
    {headerLinks.map(({ title, href }) => (
      <Link key={title} href={href} passHref>
        <a href={href} className="text-white hover:text-red" onClick={afterNavigation}>
          {title}
        </a>
      </Link>
    ))}
    <button onClick={openCrispBox} className="text-left text-white hover:text-red">
      Contact me
    </button>
  </div>
);
