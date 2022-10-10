import { Logo } from "components/logo";

import { DesktopNavigation } from "./components/desktop-navigation";
import { MobileCloseButton } from "./components/mobile-close-button";
import { MobileHamburgerButton } from "./components/mobile-hamburger-button";
import { MobileNavigation } from "./components/mobile-navigation";

export const Header = () => {
  const toggleMobileNavigation = () => {
    const mobileNavigation = document.getElementById("mobile-navigation");
    if (mobileNavigation) {
      mobileNavigation.classList.toggle("hidden");
    }
  };

  return (
    <section className="absolute top-0 w-full z-50">
      <div className="py-4">
        <div className="container max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-end md:justify-between">
            <div className="hidden md:block">
              <Logo />
            </div>
            <DesktopNavigation />
            <MobileHamburgerButton onClick={toggleMobileNavigation} />
          </div>
        </div>
      </div>

      <div id="mobile-navigation" className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
        <div className="navbar-backdrop fixed inset-0 bg-black-60" />

        <nav className="relative z-10 px-6 py-8 bg-black h-full">
          <div className="flex justify-end">
            <MobileCloseButton onClick={toggleMobileNavigation} />
          </div>
          <MobileNavigation afterNavigation={toggleMobileNavigation} />
        </nav>
      </div>
    </section>
  );
};
