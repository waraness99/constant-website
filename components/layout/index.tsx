import { Footer } from "./footer";
import { Header } from "./header";

interface LayoutProps {
  children: React.ReactElement;
}

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);
