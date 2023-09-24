"use client";
import { Stack, Theme, useMediaQuery } from "@mui/material";
import LanguageToggleButton from "@/layout/header/navigation/language-toggle-button";
import SearchDrawerToggler from "@/layout/header/navigation/search-drawer";
import { HeaderProps } from "@/layout/header";
import NavigationDrawer from "@/layout/header/navigation/navigation-drawer";
import { useState } from "react";

export interface NavigationActionsProps {
  routes: HeaderProps["routes"];
}

const NavigationActions = (props: NavigationActionsProps) => {
  const { routes } = props;
  const [isNavDrawer, setNavDrawer] = useState(false);
    const isLg_Xl = useMediaQuery<Theme>((theme) =>
      theme.breakpoints.down("lg_xl"),
    );
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      spacing={{
        xs: 3,
        sm: 2,
      }}
      height={"inherit"}
    >
      <SearchDrawerToggler
        sx={[
          {
            display: {
              xs: isNavDrawer ? "none" : "flex",
              sm: "flex",
            },
          },
        ]}
      />
      <LanguageToggleButton
        sx={{
          display: {
            xs: isNavDrawer ? "flex" : "none",
            sm: "flex",
          },
        }}
      />
      {isLg_Xl && (
        <NavigationDrawer
          routes={routes}
          sx={[
            {
              display: {
                xs: "flex",
                lg_xl: "none",
              },
            },
          ]}
          onToggle={setNavDrawer}
        />
      )}
    </Stack>
  );
};

export default NavigationActions;
