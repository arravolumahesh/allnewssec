"use client";
import { MaterialImage } from "@/commonComponents/material-components";
import { Button } from "@/styles/theme/components/typography.fontvariant";
import {
  Stack,
  StackProps,
  Tab,
  TabProps,
  Tabs,
  tabsClasses,
} from "@mui/material";
import { StaticImageData } from "next/image";
import React, { useState } from "react";

interface SectionMenuProps {
  logoImg?: StaticImageData | string;
  menus: {
    title: string;
    anchorTag: string;
  }[];
  TabButtonProps?: TabProps;
  WrapperProps?: StackProps;
}

const SectionMenu = (props: SectionMenuProps) => {
  const { logoImg, menus, TabButtonProps, WrapperProps, ...rest } = props;
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Stack
      direction={"row"}
      width={1}
      alignItems={"center"}
      pl={{ xs: 3, md: 8 }}
      columnGap={{ xs: 3, md: 4 }}
      bgcolor={"common.white"}
      color={"primary.main"}
      {...WrapperProps}
    >
      <MaterialImage
        src={
          "https://s3-alpha-sig.figma.com/img/db64/8e41/5817c9640f87a5e65c72730fd3c68df2?Expires=1696809600&Signature=CxQFzRXfbXHrEnJKXnG95laUmKKq0nOqnAW3CoeP6OJE8EgqbwkdNVdkbz8K8ya3yuv0M9gwESb1P9Afo80u4LFknhiblu3NbFUdVnwE37E2DRmDAxGQfxVuF0YuWaph~XlnMjaiXRowaPo-~TnQaSojfiLGvazwMENkDsq55s3KFItCsjDwnzuOvSoOQzGlljE9Ef1qBtcSa2Sn3RchKZqkN07-weEozkD7KHgdieV1CyHeCSq1c5hT4ZziO0JK8fTKmGtBrPbGvkkNbb7LhWBtkLrhbhZT4PyV69qAGfMVvaA8eKliQFEI53JIyKicQBE0gsmG6Nw1XZ~DByHKbg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        }
        width={124}
        height={32}
        sx={{
          width: { xs: 94, md: 124 },
          height: { xs: 24, md: 32 },
        }}
        alt='Company Name'
      />
      <Tabs
        value={value}
        onChange={handleChange}
        variant='scrollable'
        sx={{
          width: 1,
          [`.MuiTabs-flexContainer`]: {
            //${tabsClasses.flexContainer}
            justifyContent: "space-between",
            columnGap: 3,
          },
        }} /* onChange={handleChange} */
      >
        {menus.map((item, idx) => (
          <Tab
            key={idx}
            label={item.title}
            sx={{
              border: "none",
              fontSize: Button,
              px: 0,
              height: 64,
              color: "#575756",
              opacity: 0.6,
              "&.Mui-selected": {
                color: "#005dac !important",
              },
            }}
            {...TabButtonProps}
          />
        ))}
      </Tabs>
    </Stack>
  );
};

export default SectionMenu;
