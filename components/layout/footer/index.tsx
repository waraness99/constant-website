import { Logo } from "components/logo";
import Link from "next/link";
import { getCurrentYear } from "utils/date";
import { footerExternalLinks, footerInternalLinks, openCrispBox } from "utils/links";

export const Footer = () => (
  <footer>
    <div className="px-8 py-5 lg:py-8">
      <div className="container max-w-screen-xl mx-auto md:px-8">
        <nav className="flex flex-wrap justify-between gap-6 md:gap-10 lg:gap-12">
          <div className="flex flex-wrap gap-6 md:gap-10 lg:gap-12 items-center">
            {footerInternalLinks.map(({ title, href }) => (
              <Link key={title} href={href} passHref>
                <a href={href} className="text-white hover:text-red">
                  {title}
                </a>
              </Link>
            ))}

            <button className="text-white hover:text-red" onClick={openCrispBox}>
              Contact me
            </button>
          </div>

          <div className="flex flex-wrap gap-6 md:gap-10 lg:gap-12">
            {footerExternalLinks.map(({ title, href }) => (
              <a key={title} href={href} target="_blank" rel="noreferrer" className="text-white hover:text-red">
                {title}
              </a>
            ))}
          </div>
        </nav>

        <div className="my-4">
          <div className="border-b border-white-20"></div>
        </div>

        <div className="flex flex-wrap items-center justify-between">
          <p className="text-xs">{`© Copyright ${getCurrentYear()}. All Rights Reserved by Constant Druon.`}</p>
        </div>
      </div>
    </div>
  </footer>
);
