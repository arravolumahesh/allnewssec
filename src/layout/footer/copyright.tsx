"use client";
import { Stack } from "@mui/material";
import { Body2, H1 } from "@theme/components/typography.fontvariant";
import { useCallback } from "react";
import { KeyboardArrowUpRounded } from "@mui/icons-material";
import {
  MotionBorderedIconButton,
  MotionLink,
  MotionTypography,
} from "@cc/motion-components";
import { footerChildrenMotionVariants } from "@/layout/footer/common-links";
import { motion } from "framer-motion";
import { SvgIconProps } from "@mui/material/SvgIcon";

const MotionKeyboardArrowUpRounded = motion<SvgIconProps>(
  KeyboardArrowUpRounded,
);

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
        fontSize={Body2}
        width={{ xs: 0.7, md: "fit-content" }}
        flex={"1 1 auto"}
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
                fontSize: Body2,
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
          <MotionKeyboardArrowUpRounded
            fontSize={"inherit"}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                ease: "easeInOut",
                delay: 4,
              },
            }}
            whileInView={{
              y: [0, -4, 0, -4],
              transition: {
                duration: 1.5,
                delay: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              },
            }}
          />
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
