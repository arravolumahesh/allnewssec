"use client";
import SectionWrapper, {
  basePx,
  SectionWrapperProps,
} from "@cc/section-wrapper";
import ArrowGradient from "@cc/arrow-gradient";
import { Typography, TypographyProps } from "@mui/material";
import { H5_1 } from "@theme/components/typography.fontvariant";
import { deepmerge } from "@mui/utils";

export interface ObjectiveSectionProps
  extends Omit<SectionWrapperProps, "children"> {
  Objective: string;
  ObjectiveTypographyProps?: Omit<TypographyProps, "children">;
}

const ObjectiveSection = (props: ObjectiveSectionProps) => {
  const { Objective, ObjectiveTypographyProps, ...restSectionWrapperProps } =
    props;
  return (
    <SectionWrapper
      {...deepmerge(defaultSectionProps, restSectionWrapperProps)}
    >
      <ArrowGradient
        SVGProps={{
          width: 80,
          height: 232,
        }}
        display={{ xs: "none", md: "block" }}
      />
      <Typography
        component={"p"}
        fontSize={H5_1}
        textAlign={{ xs: "center", md: "left" }}
        {...ObjectiveTypographyProps}
      >
        {Objective}
      </Typography>
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
