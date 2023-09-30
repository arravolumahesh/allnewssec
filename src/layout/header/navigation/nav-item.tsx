"use client";
import {
  alpha,
  Button,
  ButtonProps,
  ListItemSecondaryAction,
  Menu,
  MenuItem,
  MenuProps,
  Theme,
} from "@mui/material";
import MLink, { MLinkProps } from "@cc/m-link";
import { MouseEvent, useCallback, useMemo, useState } from "react";
import { ExpandMoreRounded, NavigateNextRounded } from "@mui/icons-material";
import { sxArrayUtil } from "@util/sx-helpers";

export interface NavItemProps
  extends Omit<ButtonProps & MLinkProps, "href" | "children"> {
  data: {
    title: string;
    href?: MLinkProps["href"];
    children?: NavItemProps["data"][];
  };
}

const NavItem = (props: NavItemProps) => {
  const { data, sx, ...restButtonProps } = props;
  const { title, href, children } = data;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = useCallback((event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const itemProps: Omit<ButtonProps & MLinkProps, "href"> = useMemo(() => {
    return {
      onClick: handleClick,
      children: title,
      sx: [
        (theme: Theme) => ({
          color: alpha(theme.palette.common.white, 0.8),
          borderColor: alpha(theme.palette.common.white, 0.3),
          background: anchorEl
            ? alpha(theme.palette.background.paper, 0.2)
            : "transparent",
          "&:hover": {
            background: alpha(theme.palette.background.paper, 0.2),
          },
        }),
        ...sxArrayUtil(sx),
      ],
    };
  }, [handleClick, anchorEl, sx, title]);

  return (
    <>
      {href && !children ? (
        <MLink href={href} {...itemProps} {...restButtonProps} />
      ) : (
        <Button
          {...itemProps}
          endIcon={<ExpandMoreRounded />}
          {...restButtonProps}
        />
      )}
      {children && children.length > 0 && (
        <Menu
          open={!!anchorEl}
          anchorEl={anchorEl}
          onClick={handleClose}
          onClose={handleClose}
          slotProps={{
            paper: menuPaperProps,
          }}
          MenuListProps={{
            sx: {
              py: 1.5,
            },
          }}
        >
          {children.map((child, index) => {
            const { title, children } = child;
            return (
              <MenuItem
                key={`${title}-${index}`}
                onClick={handleClose}
                sx={{
                  px: 3,
                  py: 1.5,
                  "&:hover": {
                    background: (theme: Theme) => theme.palette.grey["700"],
                  },
                }}
              >
                <NavItem
                  data={child}
                  disableRipple
                  variant={"text"}
                  endIcon={
                    children && children.length > 0 && <NavigateNextRounded />
                  }
                  sx={{
                    "&:hover": {
                      background: "transparent",
                    },
                  }}
                />
                {children && children.length > 0 && (
                  <ListItemSecondaryAction>
                    <NavigateNextRounded
                      sx={{
                        color: "primary.contrastText",
                      }}
                    />
                  </ListItemSecondaryAction>
                )}
              </MenuItem>
            );
          })}
        </Menu>
      )}
    </>
  );
};
export default NavItem;

const menuPaperProps: Required<MenuProps>["slotProps"]["paper"] = {
  elevation: 0,
  sx: {
    borderRadius: 0,
    overflow: "visible",
    background: (theme: Theme) => theme.palette.grey["500"],
    mt: 2,
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      left: 14,
      width: 10,
      height: 10,
      bgcolor: "inherit",
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  },
};
