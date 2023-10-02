import {
  MotionStack,
  MotionStackProps,
  MotionTypography,
  MotionTypographyProps,
} from "@cc/motion-components";
import { ReactNode } from "react";
import { H6_4 } from "@theme/components/typography.fontvariant";
import { MotionProps } from "framer-motion";
import AnimatedButton, { AnimatedButtonProps } from "@cc/animated-button";
import { deepmerge } from "@mui/utils";

export interface SectionHeaderProps
  extends Omit<MotionStackProps, "children" | "title"> {
  title: string | ReactNode;
  TitleTypographyProps?: Omit<MotionTypographyProps, "children">;
  description?: string | ReactNode;
  DescriptionTypographyProps?: Omit<MotionTypographyProps, "children">;
  LinkProps?: AnimatedButtonProps;
}

const SectionHeader = (props: SectionHeaderProps) => {
  const {
    title,
    TitleTypographyProps,
    description,
    DescriptionTypographyProps,
    LinkProps,
    ...restStackProps
  } = props;
  return (
    <MotionStack
      width={1}
      mx={"auto"}
      color={"inherit"}
      alignItems={"center"}
      mb={{ xs: 5, md: 6, xl: 7 }}
      spacing={{ xs: 2, md: 3, xl: 4 }}
      initial={"initial"}
      whileInView={"animate"}
      viewport={{
        once: true,
        amount: 0.5,
      }}
      {...restStackProps}
    >
      <MotionTypography
        variant={"h1"}
        component={"h2"}
        textAlign={"center"}
        variants={childMotionVariant}
        {...TitleTypographyProps}
      >
        {title}
      </MotionTypography>
      {description && (
        <MotionTypography
          component={"p"}
          fontSize={H6_4}
          textAlign={"center"}
          variants={childMotionVariant}
          {...DescriptionTypographyProps}
        >
          {description}
        </MotionTypography>
      )}
      {LinkProps && (
        <AnimatedButton {...deepmerge(defaultLinkProps, LinkProps)} />
      )}
    </MotionStack>
  );
};

export default SectionHeader;

const defaultLinkProps: AnimatedButtonProps = {
  href: "#",
  color: "inherit",
  variant: "outlined",
  children: "Learn More",
};

const childMotionVariant: MotionProps["variants"] = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};
