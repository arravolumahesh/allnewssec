"use client";

import { MaterialImage } from "@/commonComponents/material-components";
import SectionWrapper from "@/commonComponents/section-wrapper";
import {
  Body2,
  H1,
  H6_2,
  H6_3,
} from "@/styles/theme/components/typography.fontvariant";
import { common } from "@mui/material/colors";
import { title } from "process";
import press1 from "@/components/newsAndMedia/images/press1.png";
import press2 from "@/components/newsAndMedia/images/press2.png";
import press3 from "@/components/newsAndMedia/images/press3.png";
import press4 from "@/components/newsAndMedia/images/press4.png";
import { Divider, Grid, Stack, Typography } from "@mui/material";
import AnimatedButton from "@/commonComponents/animated-button";

const PressRelease = () => {
  return (
    <SectionWrapper
      SectionProps={{
        sx: { background: (theme) => theme.palette.background.paper },
      }}
      SectionHeaderProps={{
        title: "PRESS RELEASE",
        TitleTypographyProps: {
          variant: "h1",
          color: (theme) => theme.palette.primary.main,
        },
        sx: { fontSize: H1 },
      }}
    >
      <Grid container spacing={2}>
        {data.map((item, index) => (
          <Grid position={"relative"} item xs={12} md={6} sm={6} key={index}>
            <MaterialImage
              alt=""
              src={item.imageUrl}
              sx={{
                width: { xs: "363px", md: "644px" },
                height: { xs: "342px", md: "363px" },
                alignSelf: "stretch",
              }}
            />
            <Stack
              position={"absolute"}
              bottom={0}
              left={0}
              m={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: "12px", md: "16px" },
              }}
            >
              <Stack display={"flex"} flexDirection={"row"} gap={"11px"}>
                <Typography variant="body2" sx={{ fontSize: Body2 }}>
                  {item.title1}
                </Typography>{" "}
                <hr style={{ width: "1px", height: "20px" }} />
                <Typography variant="body2" sx={{ fontSize: Body2 }}>
                  {item.title2}
                </Typography>
              </Stack>
              <Typography
                variant="body1"
                sx={{ fontSize: H6_2, alignSelf: "stretch", width: "90%" }}
              >
                {item.subtitle}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
      <Stack pt={{ xs: 4, md: 6 }} alignSelf={"center"}>
        <AnimatedButton fullWidth>View All Press Release</AnimatedButton>
      </Stack>
    </SectionWrapper>
  );
};

export default PressRelease;

const data = [
  {
    imageUrl: press1,
    title1: "Bajaj Auto",
    title2: "19th Mar 2023",
    subtitle:
      "Bajaj Auto Invests in New Startup to Develop Sustainable Energy Solutions",
  },
  {
    imageUrl: press2,
    title1: "Bajaj Auto",
    title2: "19th Mar 2023",
    subtitle: "Bajaj Finserv establishes a New Foundation",
  },
  {
    imageUrl: press3,
    title1: "Bajaj Auto",
    title2: "19th Mar 2023",
    subtitle: "Bajaj Finserv establishes a New Foundation",
  },
  {
    imageUrl: press4,
    title1: "Bajaj Auto",
    title2: "19th Mar 2023",
    subtitle:
      "Bajaj Auto Invests in New Startup to Develop Sustainable Energy Solutions",
  },
];
