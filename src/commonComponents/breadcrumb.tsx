"use client";
import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { usePathname } from "next/navigation";
import { Typography } from "@mui/material";

interface props {
  data: {
    title: string;
    path: string;
  }[];
}

export default function CommonBreadcrumb(prop: props) {
  const { data } = prop;
  const paths = usePathname();
  const pathNames = paths && paths.split("/").filter((path) => path);

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Typography
          component={Link}
          href="/"
          underline="hover"
          color="text.grey"
        >
          Home
        </Typography>
        {pathNames &&
          pathNames.map((item, index) => (
            <Typography color="white" key={index}>
              {item.replace("-", " ")}
            </Typography>
          ))}
      </Breadcrumbs>
    </Stack>
  );
}
