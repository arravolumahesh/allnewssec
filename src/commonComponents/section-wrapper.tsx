import { Breakpoint, Stack, StackProps } from "@mui/material";
import { forwardRef } from "react";
import SectionHeader, { SectionHeaderProps } from "@cc/section-header";
import { SetRequired } from "type-fest";
import { sxArrayUtil } from "@util/sx-helpers";

export interface SectionWrapperProps extends StackProps {
  SectionProps?: Omit<StackProps, "children">;
  ContainerProps?: Omit<StackProps, "children">;
  SectionHeaderProps?: Omit<SectionHeaderProps, "children">;
}

const SectionWrapper = forwardRef<HTMLElement, SectionWrapperProps>(
  (props, ref) => {
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
        <Stack
          component={"section"}
          alignItems={"center"}
          height={1}
          ref={ref}
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
          <Stack
            pl={basePx}
            pr={basePx}
            pt={basePy}
            pb={basePy}
            width={1}
            maxWidth={"xxl"}
            height={"inherit"}
            color={color}
            {...ContainerProps}
            {...(!title && rest)}
          >
            {title ? (
              <>
                <SectionHeader {...SectionHeaderProps} />
                <Stack width={1} {...rest}>
                  {children}
                </Stack>
              </>
            ) : (
              children
            )}
          </Stack>
        </Stack>
      );
  },
);

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
