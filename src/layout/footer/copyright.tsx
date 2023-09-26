"use client";
import { Stack } from "@mui/material";
import { H1, H6_4 } from "@theme/components/typography.fontvariant";
import { useCallback } from "react";
import { KeyboardArrowUpRounded } from "@mui/icons-material";
import {
  MotionBorderedIconButton,
  MotionLink,
  MotionTypography,
} from "@cc/motion-components";
import { footerChildrenMotionVariants } from "@/layout/footer/common-links";

const Copyright = () => {
  const handleClick = useCallback(() => {
    window && window.scrollTo(0, 0);
  }, []);

  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      flexWrap={"wrap"}
      rowGap={{
        xs: 3.5,
        md: 8,
      }}
    >
      <MotionTypography
        fontSize={H6_4}
        width={{ xs: 0.5, md: "fit-content" }}
        order={{
          xs: 2,
          md: 1,
        }}
        variants={footerChildrenMotionVariants}
      >
        Copyright © Bajaj Beyond 2023
      </MotionTypography>
      <Stack
        columnGap={{
          xs: 3.5,
          lg: 5,
        }}
        rowGap={1}
        justifyContent={{
          xs: "space-between",
          sm: "unset",
        }}
        flexWrap={"wrap"}
        direction={"row"}
        order={{
          xs: 1,
          md: 2,
        }}
      >
        {copyrightLinks.map((item, index) => {
          return (
            <MotionLink
              key={index}
              href={item.split(" ").join("-").toLowerCase()}
              variant={"text"}
              disableRipple
              color={"secondary"}
              variants={footerChildrenMotionVariants}
              sx={{
                fontSize: H6_4,
              }}
            >
              {item}
            </MotionLink>
          );
        })}
      </Stack>
      <Stack
        width={{
          xs: "fit-content",
          md: 1,
        }}
        order={3}
      >
        <MotionBorderedIconButton
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
          variants={footerChildrenMotionVariants}
        >
          <KeyboardArrowUpRounded fontSize={"inherit"} />
        </MotionBorderedIconButton>
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
