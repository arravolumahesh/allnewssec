"use client";
import { alpha, Button, ButtonProps, Typography } from "@mui/material";
import { useState } from "react";
import { sxArrayUtil } from "@util/sx-helpers";

const languages = ["En", "हि"] as const;

interface LanguageToggleButtonProps extends Omit<ButtonProps, "children"> {}

const LanguageToggleButton = (props: LanguageToggleButtonProps) => {
  const { sx, ...restButtonProps } = props;
  const [lang, setLang] = useState<(typeof languages)[number]>(languages[0]);

  return (
    <Button
      sx={[
        (theme) => ({
          display: "flex",
          alignItems: "center",
          height: "inherit",
          columnGap: 1.25,
          borderRadius: 0,
          position: "relative",
          color: "inherit",
          border: "1px solid",
          borderColor: alpha(theme.palette.primary.contrastText, 0.3),
          py: 0,
          pt: 0.25,
          px: 1.25,
          "&::before": {
            content: '""',
            position: "absolute",
            mt: -0.25,
            width: lang === languages[0] ? 0.4 : 0.35,
            height: 0.8,
            transform: `translateX(${lang === languages[0] ? -50 : 64}%)`,
            background: alpha(theme.palette.primary.contrastText, 0.4),
            transition: "transform 0.2s ease-in-out",
          },
        }),
        ...sxArrayUtil(sx),
      ]}
      onClick={() => {
        setLang((prev) => {
          if (prev === languages[0]) {
            return languages[1];
          }
          return languages[0];
        });
      }}
      {...restButtonProps}
    >
      <Typography variant={"caption"} color={"inherit"}>
        {languages[0]}
      </Typography>
      <Typography variant={"caption"} color={"inherit"}>
        {languages[1]}
      </Typography>
    </Button>
  );
};

export default LanguageToggleButton;
