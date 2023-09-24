"use client";
import { sxArrayUtil } from "@util/sx-helpers";
import {
  AddRounded,
  CloseRounded,
  MenuRounded,
  RemoveRounded,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  accordionSummaryClasses,
  Divider,
  Drawer,
  IconButtonProps,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { HeaderProps } from "@/layout/header";
import MLink, { MLinkProps } from "@cc/m-link";
import { appbarHeight } from "@/layout/header/reactive-appbar";
import BorderedIconButton from "@cc/bordered-icon-button";

export interface NavigationDrawerProps
  extends Omit<IconButtonProps, "children"> {
  routes: HeaderProps["routes"];
  onToggle?: (isDrawer: boolean) => void;
}

const NavigationDrawer = (props: NavigationDrawerProps) => {
  const { routes, onToggle, ...restIconButtonProps } = props;
  const [isDrawer, setIsDrawer] = useState(false);

  useEffect(() => {
    onToggle && onToggle(isDrawer);
  }, [isDrawer, onToggle]);
  return (
    <>
      <BorderedIconButton
        onClick={() => {
          setIsDrawer((prev) => !prev);
        }}
        color={"secondary"}
        {...restIconButtonProps}
      >
        {isDrawer ? <CloseRounded /> : <MenuRounded />}
      </BorderedIconButton>
      <Drawer
        open={isDrawer}
        variant={"temporary"}
        onClose={() => {
          setIsDrawer(false);
          onToggle && onToggle(false);
        }}
        anchor={"right"}
        PaperProps={{
          sx: (theme) => ({
            mt: appbarHeight,
            minWidth: 280,
            width: { xs: "100%", sm: 390 },
            background: theme.palette.gradient.lightToDark,
          }),
        }}
      >
        <List>
          {routes.map((route, index) => {
            const { title } = route;
            return (
              <Fragment key={`${title}-${index}`}>
                <ListItem disablePadding>
                  <NavigationDrawerItem route={route} />
                </ListItem>
                <Divider
                  variant={"middle"}
                  sx={{
                    mx: 3,
                  }}
                />
              </Fragment>
            );
          })}
        </List>
      </Drawer>
    </>
  );
};

export default NavigationDrawer;

export interface NavigationDrawerItemProps
  extends Omit<MLinkProps, "children" | "href"> {
  route: HeaderProps["routes"][number];
}

export const NavigationDrawerItem = (props: NavigationDrawerItemProps) => {
  const { route, ...restMLinkProps } = props;
  const { title, href, children } = route;
  const { sx, ...restLinkProps } = restMLinkProps;
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  route.title = title.toLowerCase();
  return children ? (
    <Accordion
      expanded={isAccordionOpen}
      disableGutters
      elevation={0}
      square
      onChange={(_e, expanded) => {
        setIsAccordionOpen(expanded);
      }}
      sx={{
        background: "transparent",
        color: "primary.contrastText",
        width: "100%",
      }}
    >
      <AccordionSummary
        expandIcon={isAccordionOpen ? <RemoveRounded /> : <AddRounded />}
        disableRipple={false}
        sx={{
          px: 3,
          height: 48,
          color: "primary.contrastText",
          [`.${accordionSummaryClasses.expandIconWrapper}`]: {
            color: "primary.contrastText",
          },
        }}
      >
        <Typography
          fontSize={"18px"}
          component={"span"}
          textTransform={"capitalize"}
        >
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          py: 0,
          px: 3,
          mb: isAccordionOpen ? 1 : 0,
        }}
      >
        <List disablePadding>
          {children.map((child, index) => {
            const { title } = child;
            return (
              <ListItem key={`${title}-${index}`} disablePadding>
                <NavigationDrawerItem
                  route={child}
                  sx={{
                    fontSize: "16px",
                    p: 2,
                    height: 40,
                  }}
                />
              </ListItem>
            );
          })}
        </List>
      </AccordionDetails>
    </Accordion>
  ) : href ? (
    <MLink
      href={href}
      fullWidth
      sx={[
        {
          fontSize: "18px",
          justifyContent: "flex-start",
          color: "primary.contrastText",
          textTransform: "capitalize",
          px: 3,
          height: 48,
        },
        ...sxArrayUtil(sx),
      ]}
      {...restLinkProps}
    >
      {title}
    </MLink>
  ) : null;
};
