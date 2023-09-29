import { Breakpoint } from "@mui/material";
import { forwardRef } from "react";
import SectionHeader, { SectionHeaderProps } from "@cc/section-header";
import { SetRequired } from "type-fest";
import { sxArrayUtil } from "@util/sx-helpers";
import { MotionStack, MotionStackProps } from "@cc/motion-components";

export interface SectionWrapperProps extends MotionStackProps {
  SectionProps?: Omit<MotionStackProps, "children">;
  ContainerProps?: Omit<MotionStackProps, "children">;
  SectionHeaderProps?: Omit<SectionHeaderProps, "children">;
}

const SectionWrapper = forwardRef<
  HTMLElement | SVGElement,
  SectionWrapperProps
>((props, ref) => {
  const {
    children,
    SectionProps = {},
    ContainerProps = {},
    SectionHeaderProps = {} as SetRequired<
      SectionWrapperProps,
      "SectionHeaderProps"
    >["SectionHeaderProps"],
    color,
    ...rest
  } = props;
  const { title } = SectionHeaderProps;
  const { sx, ...restProps } = SectionProps;

  return (
    <MotionStack
      component={"section"}
      alignItems={"center"}
      height={1}
      overflow={"hidden"}
      color={color}
      sx={[
        {
          "*": {
            color: "inherit",
          },
        },
        ...sxArrayUtil(sx),
      ]}
      {...restProps}
    >
      <MotionStack
        px={basePx}
        py={basePy}
        width={1}
        maxWidth={"xxl"}
        height={"inherit"}
        color={color}
        {...ContainerProps}
        {...(!title && { ref, ...rest })}
      >
        {title ? (
          <>
            <SectionHeader {...SectionHeaderProps} />
            <MotionStack width={1} ref={ref} {...rest}>
              {children}
            </MotionStack>
          </>
        ) : (
          children
        )}
      </MotionStack>
    </MotionStack>
  );
});

export default SectionWrapper;

SectionWrapper.displayName = SectionWrapper.name;

export type BasePadding = {
  [keys in Breakpoint]?: string | number;
};

export const basePx: BasePadding = {
  xs: 3,
  md: 5.5,
  xxl: 8,
};

export const basePy: BasePadding = {
  xs: 7,
  md: 9.5,
  xxl: 12,
};
