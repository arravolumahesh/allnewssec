"use client";
import { Stack, Typography } from "@mui/material";
import { H1, H6_4 } from "@theme/components/typography.fontvariant";
import MLink from "@cc/m-link";
import { useCallback } from "react";
import { KeyboardArrowUpRounded } from "@mui/icons-material";
import BorderedIconButton from "@cc/bordered-icon-button";

const Copyright = () => {
  const handleClick = useCallback(() => {
    window && window.scrollTo(0, 0);
  }, []);
  return (
    <Stack
      direction={{
        xs: "row-reverse",
        md: "row",
      }}
      justifyContent={"space-between"}
      flexWrap={"wrap"}
      rowGap={{
        xs: 3.5,
        md: 8,
      }}
    >
      <Typography fontSize={H6_4}>Copyright © Bajaj Beyond 2023</Typography>
      <Stack
        spacing={5}
        justifyContent={{
          xs: "space-between",
          sm: "unset",
        }}
        flexWrap={"wrap"}
        direction={"row"}
      >
        {copyrightLinks.map((item, index) => {
          return (
            <MLink
              key={index}
              href={item.split(" ").join("-").toLowerCase()}
              variant={"text"}
              disableRipple
              color={"secondary"}
              sx={{
                fontSize: H6_4,
              }}
            >
              {item}
            </MLink>
          );
        })}
      </Stack>
      <Stack width={1}>
        <BorderedIconButton
          onClick={handleClick}
          color={"secondary"}
          sx={{
            width: {
              xs: 48,
              md: 98,
            },
            height: {
              xs: 32,
              md: 56,
            },
            mx: "auto",
            fontSize: H1,
          }}
        >
          <KeyboardArrowUpRounded fontSize={"inherit"} />
        </BorderedIconButton>
      </Stack>
    </Stack>
  );
};

export default Copyright;

const copyrightLinks = [
  "Contact Us",
  "Terms & Conditions",
  "Privacy Policy",
  "Disclaimer",
];
