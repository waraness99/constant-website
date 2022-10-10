import Link from "next/link";
import { getCurrentYear } from "utils/date";
import { FooterExternalLinks, FooterInternalLinks } from "utils/links";

export const Footer = () => (
  <section className="py-8">
    <div className="container max-w-screen-xl mx-auto px-4 md:px-8">
      <nav>
        <ul className="flex flex-wrap gap-6 md:gap-10 lg:gap-12">
          {FooterInternalLinks.map(({ title, href }) => (
            <li key={title}>
              <Link href={href} passHref>
                <a href={href} className="text-white hover:text-red">
                  {title}
                </a>
              </Link>
            </li>
          ))}

          <li>
            {/* @ts-ignore */}
            <button className="text-white hover:text-red" onClick={() => $crisp.push(["do", "chat:open"])}>
              Contact me
            </button>
          </li>

          {FooterExternalLinks.map(({ title, href }) => (
            <li key={title}>
              <a href={href} target="_blank" rel="noreferrer" className="text-white hover:text-red">
                {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="my-4">
        <div className="border-b border-white-20"></div>
      </div>

      <div className="flex flex-wrap items-center justify-between">
        <p className="text-xs">{`© Copyright ${getCurrentYear()}. All Rights Reserved by Constant Druon.`}</p>
      </div>
    </div>
  </section>
);
