import { Stack, StackProps } from "@mui/material";
import { MotionTypography, MotionTypographyProps } from "@cc/motion-components";
import { ReactNode } from "react";
import { H6_4 } from "@theme/components/typography.fontvariant";

export interface SectionHeaderProps
  extends Omit<StackProps, "children" | "title"> {
  title: string | ReactNode;
  TitleTypographyProps?: Omit<MotionTypographyProps, "children">;
  description?: string | ReactNode;
  DescriptionTypographyProps?: Omit<MotionTypographyProps, "children">;
}

const SectionHeader = (props: SectionHeaderProps) => {
  const {
    title,
    TitleTypographyProps,
    description,
    DescriptionTypographyProps,
    ...restStackProps
  } = props;
  return (
    <Stack
      width={1}
      mx={"auto"}
      color={"inherit"}
      alignItems={"center"}
      mb={{ xs: 5, md: 6, xl: 7 }}
      spacing={{ xs: 2, md: 3, xl: 4 }}
      {...restStackProps}
    >
      <MotionTypography
        variant={"h1"}
        component={"h2"}
        {...TitleTypographyProps}
      >
        {title}
      </MotionTypography>
      {description && (
        <MotionTypography
          component={"p"}
          fontSize={H6_4}
          {...DescriptionTypographyProps}
        >
          {description}
        </MotionTypography>
      )}
    </Stack>
  );
};

export default SectionHeader;
