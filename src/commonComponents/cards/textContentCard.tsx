"use client";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

export type TextContentCardProps = {
  data: {
    img?: string;
    title: string;
    description: string;
  };
};

const data = {
  img: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
  title: "EMISSIONS",
  description:
    "Emissions produced by our automobiles have reduced by 55% compared to 2009.",
};

export const TextContentCard = (props: TextContentCardProps) => {
    const {} = props;
    return (
      <Card
        sx={{
          width: "400px",
          height: "338px",
        }}
      >
        <CardMedia sx={{ height: "240px" }} image={data.img} />
        <CardContent
          sx={{
            bgcolor: "#000",
            px: 0,
          }}
        >
          <Typography variant="subtitle1" color={"#FFFFFF99"}>
            {data.title}
          </Typography>
          <Typography color={"#FFFFFFE5"} variant={"subtitle2"}>
            {data.description}
          </Typography>
        </CardContent>
      </Card>
    );
};
