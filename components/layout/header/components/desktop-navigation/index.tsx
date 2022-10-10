import Link from "next/link";
import { headerLinks, openCrispBox } from "utils/links";

export const DesktopNavigation = () => (
  <div className="hidden lg:block space-x-6">
    {headerLinks.map(({ title, href }) => (
      <Link key={title} href={href} passHref>
        <a href={href} className="text-white hover:text-red">
          {title}
        </a>
      </Link>
    ))}
    <button onClick={openCrispBox} className="text-white hover:text-red">
      Contact me
    </button>
  </div>
);
