"use client";
import React, { useState } from "react";
import { alpha, Button, ButtonProps, Typography } from "@mui/material";
import { sxArrayUtil } from "@util/sx-helpers";
import Toggle1 from "@/components/newsAndMediaInetermediate/all-news/images/toggle1.svg";
import Toggle2 from "@/components/newsAndMediaInetermediate/all-news/images/toggle2.svg";

const ToggleImg = [Toggle1, Toggle2];

interface LanguageToggleButtonProps extends Omit<ButtonProps, "children"> {}

const ToggleButton = (props: LanguageToggleButtonProps) => {
  const { sx, ...restButtonProps } = props;
  const [lang, setLang] = useState<typeof ToggleImg[number]>(ToggleImg[0]);

  return (
    <Button
      sx={[
        (theme) => ({
          display: "flex",
          alignItems: "center",
          columnGap: 1.25,
          borderRadius: 1,
          position: "relative",
          color: "inherit",
          border: "1px solid",
          borderColor: "primary.main",
          py: 0,
          pt: 0.25,
          px: 1.25,
          height: 60,
          width: 80,
          "&::before": {
            content: '""',
            position: "absolute",
            mt: -0.25,
            width: lang === ToggleImg[0] ? 0.4 : 0.35,
            height: 120,
            transform: `translateX(${lang === ToggleImg[0] ? -50 : 64}%)`,
            background: alpha(theme.palette.primary.contrastText, 0.4),
            transition: "transform 0.2s ease-in-out",
          },
        }),
        ...sxArrayUtil(sx),
      ]}
      onClick={() => {
        setLang((prev: any) => {
          if (prev === ToggleImg[0]) {
            return ToggleImg[1];
          }
          return ToggleImg[0];
        });
      }}
      {...restButtonProps}
    >
      <Typography variant={"caption"} color={"inherit"}>
        <img src={ToggleImg[0]} alt="Toggle1" />
      </Typography>
      <Typography variant={"caption"} color={"inherit"}>
        <img src={ToggleImg[1]} alt="Toggle2" />
      </Typography>
    </Button>
  );
};

export default ToggleButton;

