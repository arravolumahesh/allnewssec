"use client";
import Logo from "@cc/logo";
import SectionWrapper from "@cc/section-wrapper";
import Navigation from "@/layout/header/navigation";
import { MLinkProps } from "@cc/m-link";
import ReactiveAppBar from "@/layout/header/reactive-appbar";

export interface HeaderProps {
  routes: {
    title: string;
    href?: MLinkProps["href"];
    children?: HeaderProps["routes"][number][];
  }[];
}

const Header = (props: HeaderProps) => {
  const { routes } = props;
  return (
    <SectionWrapper
      direction={"row"}
      alignItems={"center"}
      pt={0}
      pb={0}
      height={"inherit"}
      SectionProps={{
        component: ReactiveAppBar,
      }}
      color={"secondary.main"}
    >
      <Logo
        SvgIconProps={{
          sx: {
            width: { xs: 71, md: 91, xxl: 107 },
            height: { xs: 40, md: 52, xxl: 64 },
          },
        }}
      />
      <Navigation
        sx={{
          ml: "auto",
        }}
        routes={routes}
      />
    </SectionWrapper>
  );
};

export default Header;
