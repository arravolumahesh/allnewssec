"use client";
import { Card, CardMedia } from "@mui/material";
import React from "react";

type SwipeCardProps = {
  data: {
    img?: string;
    title?: string;
    description?: string;
  };
};

const data = {
  img: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
  title: "Community Development",
};

export const SwipeCard = (props: SwipeCardProps) => {
  return (
    <Card
      sx={{
        width: "399px",
        height: "456px",
        boxShadow:
          "30.12801742553711px 30.12801742553711px 28.922897338867188px 0px #322E2E40",
        p: 3,
      }}
    >
      <CardMedia image={data.img} sx={{ height: "360px" }} />
    </Card>
  );
};
