import { ButtonGroup } from "@mui/material";
import NavItem from "@/layout/header/navigation/nav-item";
import { HeaderProps } from "@/layout/header";

interface DesktopNavigationProps {
  routes: HeaderProps["routes"];
}

const DesktopNavigation = (props: DesktopNavigationProps) => {
  const { routes } = props;

  return (
    <ButtonGroup
      variant={"outlined"}
      color={"primary"}
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
              fontSize: () => ({
                xs: 18,
                lg_xl: 14,
              }),
            }}
          />
        );
      })}
    </ButtonGroup>
  );
};

export default DesktopNavigation;
