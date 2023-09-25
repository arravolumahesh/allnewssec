"use client";
import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import MLink from "../m-link";

export type BlogPostCardProps = {
  data: {
    img?: string;
    date: string;
    title: string;
    description: string;
    volunteerType: boolean;
  };
};

const data = {
  img: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
  date: "28 June 2022",
  title: "Jamnalal Bajaj Foundation to distribute 30 awards to Individuals",
  description:
    "By offering hi-tech mobility options, Bajaj Finserv has pledged to empower people with disabilities...",
  volunteerType: true,
};

export const BlogPostCard = (props: BlogPostCardProps) => {
  return (
    <Card
      sx={{
        width: data.volunteerType ? "1080px" : "1023px",
        height: data.volunteerType ? "301px" : "385px",
        p: 2.5,
        bgcolor: "#F4F4F4",
        position: "relative",
        overflow: "unset",
        mt: 3,
      }}
    >
      <CardMedia
        sx={{
          height: data.volunteerType ? "100%" : "424px",
          width: data.volunteerType ? "466px" : "432px",
          position: "absolute",
          right: data.volunteerType ? 0 : 30,
          top: data.volunteerType ? 0 : -20,
        }}
        image={data.img}
      />
      <CardContent
        sx={{ maxWidth: data.volunteerType ? "calc(100% - 500px)" : "365px" }}
      >
        {!data.volunteerType && (
          <Chip label="Awards" color="default" sx={{ mb: 1 }} />
        )}
        <Typography variant="h4">{data.title}</Typography>
        {!data.volunteerType && (
          <Typography variant="subtitle2">{data.date}</Typography>
        )}
        <Typography my={data.volunteerType ? 2 : 3} variant={"body1"}>
          {data.description}
        </Typography>
        {data.volunteerType && (
          <Stack
            direction={"row"}
            borderTop={"solid 1px black"}
            justifyContent={"space-evenly"}
            py={3}
          >
            <Typography variant="h6">Mumbai, Maharashtra</Typography>
            <Divider
              orientation="vertical"
              sx={{ borderColor: "#000", height: "inherit" }}
            />
            <Typography variant="h6"> 15 July 2023</Typography>
          </Stack>
        )}
        <MLink href="#">Know More</MLink>
      </CardContent>
    </Card>
  );
};
