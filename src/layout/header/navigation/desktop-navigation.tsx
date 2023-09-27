import { ButtonGroup } from "@mui/material";
import NavItem from "@/layout/header/navigation/nav-item";
import { HeaderProps } from "@/layout/header";
import { Caption } from "@theme/components/typography.fontvariant";

interface DesktopNavigationProps {
  routes: HeaderProps["routes"];
}

const DesktopNavigation = (props: DesktopNavigationProps) => {
  const { routes } = props;

  return (
    <ButtonGroup
      variant={"outlined"}
      color={"secondary"}
      sx={{
        height: "inherit",
        display: {
          xs: "none",
          lg_xl: "flex",
        },
      }}
    >
      {routes.map((route, index) => {
        route.title = route.title.toUpperCase();
        return (
          <NavItem
            key={`${route.title}-${index}`}
            data={route}
            disableRipple={false}
            sx={{
              fontSize: Caption,
              height: { xs: "inherit" },
            }}
          />
        );
      })}
    </ButtonGroup>
  );
};

export default DesktopNavigation;
