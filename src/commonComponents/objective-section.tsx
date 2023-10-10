"use client";
import SectionWrapper, {
  basePx,
  SectionWrapperProps,
} from "@cc/section-wrapper";
import ArrowGradient from "@cc/arrow-gradient";
import { Stack, Typography, TypographyProps } from "@mui/material";
import { H5_1, H6_3 } from "@theme/components/typography.fontvariant";
import { deepmerge } from "@mui/utils";
import { HorizontalRule } from "@mui/icons-material";
import {
  MotionStack,
  MotionSvgProps,
  MotionTypography,
  MotionTypographyProps,
} from "./motion-components";
import {
  arrowInfoStaggerDiv,
  arrowInfoStaggerDivChildren,
  arrowLeftToRightTransition,
} from "./animations";

export interface ObjectiveSectionProps
  extends Omit<SectionWrapperProps, "children"> {
  Objective: string;
  Author?: string;
  Company?: string;
  SVGProps?: MotionSvgProps;
  ObjectiveTypographyProps?: Omit<MotionTypographyProps, "children">;
  AuthorTypographyProps?: Omit<TypographyProps, "children">;
}

const ObjectiveSection = (props: ObjectiveSectionProps) => {
  const {
    Objective,
    Author,
    Company,
    ObjectiveTypographyProps,
    AuthorTypographyProps,
    SVGProps,
    ...restSectionWrapperProps
  } = props;
  return (
    <SectionWrapper
      {...deepmerge(defaultSectionProps, restSectionWrapperProps)}
    >
      <ArrowGradient
        SVGProps={{
          width: 80,
          height: 232,
          ...SVGProps,
        }}
        display={{ xs: "none", md: "block" }}
        {...arrowLeftToRightTransition}
      />
      <MotionStack
        rowGap={{ xs: 2, md: 3 }}
        variants={arrowInfoStaggerDiv}
        initial={"initial"}
        whileInView={"animate"}
        viewport={{ once: true }}
      >
        <MotionTypography
          component={"p"}
          fontSize={H5_1}
          textAlign={{ xs: "center", md: "left" }}
          {...ObjectiveTypographyProps}
          variants={arrowInfoStaggerDivChildren}
        >
          {Objective}
        </MotionTypography>
        {Author && (
          // <Stack direction={"row"}>
          //   <HorizontalRule sx={{ mr: 1 }} />
          <MotionStack
            rowGap={{ xs: 0.5, md: 0.75 }}
            variants={arrowInfoStaggerDivChildren}
          >
            <Typography
              component={"p"}
              fontSize={H6_3}
              textAlign={{ xs: "center", md: "left" }}
              {...AuthorTypographyProps}
            >
              {Author}
            </Typography>
            <Typography
              component={"p"}
              fontSize={H6_3}
              textAlign={{ xs: "center", md: "left" }}
              {...AuthorTypographyProps}
            >
              {Company}
            </Typography>
          </MotionStack>
          // </Stack>
        )}
      </MotionStack>
    </SectionWrapper>
  );
};

export default ObjectiveSection;

const defaultSectionProps: Omit<SectionWrapperProps, "children"> = {
  direction: "row",
  color: "secondary.main",
  columnGap: 11,
  alignItems: "center",
  px: { ...basePx, xxl: 25.5 },
  SectionProps: {
    sx: {
      background: (theme) => theme.palette.gradient.darkToLight,
    },
  },
};
