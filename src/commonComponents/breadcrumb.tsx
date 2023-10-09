"use client";
import * as React from "react";
import { usePathname } from "next/navigation";
import { Body2 } from "@/styles/theme/components/typography.fontvariant";
import MLink from "@cc/m-link";
import { NavigateNextRounded } from "@mui/icons-material";
import { Stack } from "@mui/material";

export default function CommonBreadcrumb() {
  const pathName = usePathname();
  const pathNames = pathName.split("/");
  return (
    <Stack
      component={"nav"}
      direction={"row"}
      alignItems={"center"}
      divider={<NavigateNextRounded sx={{ opacity: 0.5 }} fontSize="small" />}
    >
      {["Home", ...pathNames].map((item, index, arr) => {
        if (!item) return null;
        const isLast = arr.length === index + 1;
        return (
          <MLink
            key={index}
            href={"/"}
            disableRipple
            variant={"text"}
            color={"secondary"}
            sx={{
              fontSize: Body2,
              opacity: isLast ? 1 : 0.5,
              pointerEvents: isLast ? "none" : "auto",
              "&:hover": {
                textDecoration: isLast ? "none" : "underline",
              },
            }}
          >
            {item.replaceAll("-", " ")}
          </MLink>
        );
      })}
    </Stack>
  );
}
