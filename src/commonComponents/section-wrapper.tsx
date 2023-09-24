"use client";
import { Stack, StackProps } from "@mui/material";
import { forwardRef } from "react";

interface SectionWrapperProps extends StackProps {
  SectionProps?: Omit<StackProps, "children">;
}

const SectionWrapper = forwardRef<HTMLElement, SectionWrapperProps>(
  (props, ref) => {
    const { children, SectionProps, ...rest } = props;
    return (
      <Stack
        component={"section"}
        alignItems={"center"}
        height={1}
        ref={ref}
        {...SectionProps}
      >
        <Stack
          px={{
            xs: 3,
            md: 5,
            xxl: 8,
          }}
          py={3.5}
          width={1}
          maxWidth={"xxl"}
          height={"inherit"}
          {...rest}
        >
          {children}
        </Stack>
      </Stack>
    );
  },
);

export default SectionWrapper;

SectionWrapper.displayName = SectionWrapper.name;
