"use client";

import SectionWrapper from "@/commonComponents/section-wrapper";
import theme from "@/styles/theme";
import {
  Body2,
  H1,
  H6_2,
} from "@/styles/theme/components/typography.fontvariant";
import grp1 from "@/components/newsAndMedia/images/grp1.png";
import grp2 from "@/components/newsAndMedia/images/grp2.png";
import grp3 from "@/components/newsAndMedia/images/grp3.png";
import { Grid, Stack, Typography } from "@mui/material";
import { MaterialImage } from "@/commonComponents/material-components";
import AnimatedButton from "@/commonComponents/animated-button";

const IntheNews = () => {
  return (
    <SectionWrapper
      SectionProps={{
        sx: { background: (theme) => theme.palette.background.default },
      }}
      SectionHeaderProps={{
        title: "IN THE NEWS",
        TitleTypographyProps: {
          variant: "h1",
          color: "var(--primary-blue, #005DAC)", // (theme) => theme.palette.primary.main
        },
        sx: { fontSize: H1 },
      }}
    >
      <Grid container spacing={2}>
        {data.map((item, index) => (
          <Grid item xs={12} xxl={4} md={4} sm={6} key={index}>
            <MaterialImage
              alt=""
              src={item.imageUrl}
              width={420}
              height={420}
              sx={{
                width: { md: "420px", xs: "342px" },
                height: { md: "420px", xs: "240px" },
              }}
            />
            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "2px",
                color: (theme) => theme.palette.primary.main,
              }}
            >
              <Stack display={"flex"} flexDirection={"row"} gap={"11px"} pt={2}>
                <Typography variant="body2" sx={{ fontSize: Body2 }}>
                  {item.title1}
                </Typography>
                <hr
                  style={{
                    width: "1px",
                    height: "20px",
                    background: "var(--primary-blue, #005DAC)",
                  }}
                />
                <Typography variant="body2" sx={{ fontSize: Body2 }}>
                  {item.title2}
                </Typography>
              </Stack>
              <Typography
                variant="body1"
                sx={{
                  fontSize: H6_2,
                  alignSelf: "stretch",
                  width: "100%",
                }}
              >
                {item.subtitle}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
      <Stack pt={{ xs: 4, md: 6 }} alignSelf={"center"}>
        <AnimatedButton fullWidth>View All News</AnimatedButton>
      </Stack>
    </SectionWrapper>
  );
};

export default IntheNews;

const data = [
  {
    imageUrl: grp1,
    title1: "by Times of India",
    title2: "19th Mar 2023",
    subtitle: "Bajaj Auto Launches New Electric Vehicle Lineup",
  },
  {
    imageUrl: grp2,
    title1: "by Times of India",
    title2: "19th Mar 2023",
    subtitle: "Bajaj Electricals Launches New Employee CSR Portal",
  },
  {
    imageUrl: grp3,
    title1: "by Times of India",
    title2: "19th Mar 2023",
    subtitle: "Bajaj Auto Launches New Electric Vehicle Lineup",
  },
  {
    imageUrl: grp2,
    title1: "by Times of India",
    title2: "19th Mar 2023",
    subtitle: "Bajaj Auto Launches New Electric Vehicle Lineup",
  },
  {
    imageUrl: grp3,
    title1: "by Times of India",
    title2: "19th Mar 2023",
    subtitle: "Bajaj Electricals Launches New Employee CSR Portal",
  },
  {
    imageUrl: grp1,
    title1: "by Times of India",
    title2: "19th Mar 2023",
    subtitle: "Bajaj Electricals Launches New Employee CSR Portal",
  },
];
