"use client";
import * as React from "react";
import { useCallback } from "react";
import { usePathname } from "next/navigation";
import { Body2 } from "@/styles/theme/components/typography.fontvariant";
import MLink, { MLinkProps } from "@cc/m-link";
import { NavigateNextRounded } from "@mui/icons-material";
import { Stack, StackProps } from "@mui/material";
import { deepmerge } from "@mui/utils";

export interface ReactiveBreadcrumbProps extends Omit<StackProps, "children"> {
  MLinkProps?: Omit<MLinkProps, "href" | "children">;
}

const ReactiveBreadcrumb = (props: ReactiveBreadcrumbProps) => {
  const { MLinkProps, ...restStackProps } = props;
  const pathName = usePathname();
  const pathNames = pathName.split("/");

  const mLinkProps = useCallback(
    (isLast: boolean): ReactiveBreadcrumbProps["MLinkProps"] => {
      return deepmerge(
        {
          disableRipple: true,
          variant: "text",
          color: "secondary",
          sx: {
            fontSize: Body2,
            opacity: isLast ? 1 : 0.5,
            pointerEvents: isLast ? "none" : "auto",
            "&:hover": {
              textDecoration: isLast ? "none" : "underline",
            },
          },
        },
        MLinkProps,
      );
    },
    [MLinkProps],
  );

  return (
    <Stack
      component={"nav"}
      direction={"row"}
      alignItems={"center"}
      divider={<NavigateNextRounded sx={{ opacity: 0.5 }} fontSize="small" />}
      {...restStackProps}
    >
      {["Home", ...pathNames].map((item, index, arr) => {
        if (!item) return null;
        const isLast = arr.length === index + 1;
        return (
          <MLink key={index} href={"/"} {...mLinkProps(isLast)}>
            {item.replaceAll("-", " ")}
          </MLink>
        );
      })}
    </Stack>
  );
};

export default ReactiveBreadcrumb;
