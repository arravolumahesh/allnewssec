"use client";
import { MaterialImage, MaterialImageProps } from "@cc/material-components";
import { Button } from "@theme/components/typography.fontvariant";
import {
  Tab,
  tabClasses,
  TabProps,
  Tabs,
  tabsClasses,
  TabsProps,
  useScrollTrigger,
} from "@mui/material";
import React, { SyntheticEvent, useState } from "react";
import {
  appbarHeight,
  appbarMotionTransition,
} from "@/layout/header/reactive-appbar";
import SectionWrapper, {
  basePx,
  SectionWrapperProps,
} from "@cc/section-wrapper";
import { sxArrayUtil } from "@util/sx-helpers";
import Link from "next/link";

export interface SectionNavigationProps
  extends Omit<SectionWrapperProps, "children"> {
  LogoImageProps?: MaterialImageProps;
  Sections: {
    title: string;
    href: string;
  }[];
  TabProps?: Omit<TabProps, "children">;
  TabsProps?: Omit<TabsProps, "children">;
}

const SectionNavigation = (props: SectionNavigationProps) => {
  const {
    LogoImageProps,
    Sections,
    TabProps,
    TabsProps,
    SectionProps = {},
    ContainerProps = {},
    ...rest
  } = props;
  const { sx, ...restSectionProps } = SectionProps;
  const [value, setValue] = useState<number>(0);

  const trigger = useScrollTrigger();

  const handleChange = (_e: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <SectionWrapper
      width={1}
      direction={"row"}
      SectionProps={{
        bgcolor: "common.white",
        sx: [
          {
            position: "sticky",
            top: !trigger ? appbarHeight : 0,
            zIndex: 10,
            transition: `all ${appbarMotionTransition.duration}s ease-in-out`,
          },
          ...sxArrayUtil(sx),
        ],
        ...restSectionProps,
      }}
      ContainerProps={{
        py: 0,
        px: { ...basePx, xs: 0, md: 0 },
        alignItems: "center",
        columnGap: { xs: 3, md: 4 },
        ...ContainerProps,
      }}
      {...rest}
    >
      {LogoImageProps && (
        <MaterialImage
          width={124}
          height={32}
          {...LogoImageProps}
          sx={[
            {
              width: { xs: 94, md: 124 },
              height: { xs: 24, md: 32 },
              objectFit: "contain",
            },
            ...sxArrayUtil(LogoImageProps?.sx),
          ]}
        />
      )}
      <Tabs
        value={value}
        onChange={handleChange}
        variant={"scrollable"}
        scrollButtons={false}
        {...TabsProps}
        sx={[
          {
            width: 1,
            color: "grey.600",
            [`.${tabsClasses.flexContainer}`]: {
              justifyContent: "space-between",
              columnGap: 4,
            },
          },
          ...sxArrayUtil(TabsProps?.sx),
        ]}
      >
        {Sections.map((item, idx) => (
          <Tab
            key={idx}
            component={Link}
            href={item.href}
            label={item.title}
            disableRipple
            {...TabProps}
            sx={[
              {
                border: "none",
                fontSize: Button,
                px: 2,
                height: { xs: 56, md: 64 },
                color: "inherit",
                fontWeight: 400,
                opacity: 0.6,
                [`&.${tabClasses.selected}`]: {
                  color: "primary.main",
                  opacity: 1,
                },
              },
              ...sxArrayUtil(TabProps?.sx),
            ]}
          />
        ))}
      </Tabs>
    </SectionWrapper>
  );
};

export default SectionNavigation;
