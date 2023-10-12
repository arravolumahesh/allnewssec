import { ReactNode } from "react";
import ThemeRegistry from "@style/theme/themeRegistry";
import HeaderLayout, { HeaderProps } from "@/layout/header";
import FooterLayout from "@/layout/footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <html lang='en'>
      <body>
        <ThemeRegistry>
          <HeaderLayout routes={routes} />
          <main>{children}</main>
          <FooterLayout />
        </ThemeRegistry>
      </body>
    </html>
  );
};

export default Layout;

const routes: HeaderProps["routes"] = [
  {
    title: "Our Companies",
    children: [
      {
        title: "Bajaj Auto Limited",
        href: "/our-companies/bajaj-auto-limited",
      },
      {
        title: "Bajaj Electricals Limited",
        href: "/our-companies/bajaj-electricals-limited",
      },
      {
        title: "Bajaj Finserv Limited",
        href: "/our-companies/bajaj-finserv-limited",
      },
      {
        title: "Mukand Limited",
        href: "/our-companies/mukand-limited",
      },
    ],
  },
  {
    title: "Charitable Trusts",
    children: [
      {
        title: "Jamnalal Bajaj Foundation",
        href: "/charitable-trusts/jamnalal-bajaj-foundation",
      },
      {
        title: "Jamnalal Bajaj Sewa Trust",
        href: "/charitable-trusts/jamnalal-bajaj-sewa-trust",
      },
      {
        title: "Hamaara Sapna",
        href: "/charitable-trusts/hamaara-sapna",
      },
    ],
  },
  {
    title: "About Us",
    href: "about-us",
  },
  {
    title: "News & Media",
    href: "news-media",
  },
  {
    title: "Contact Us",
    href: "contact-us",
  },
];
