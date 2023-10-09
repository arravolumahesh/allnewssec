"use client";

import {
  arrowInfoStaggerDiv,
  arrowInfoStaggerDivChildren,
  arrowLeftToRightTransition,
} from "@/commonComponents/animations";
import Image, { StaticImageData } from "next/image";
import ArrowGradient from "@/commonComponents/arrow-gradient";
import {
  MotionStack,
  MotionTypography,
} from "@/commonComponents/motion-components";
import SectionWrapper from "@/commonComponents/section-wrapper";
import theme from "@/styles/theme";
import CloseIcon from "@mui/icons-material/Close";
import {
  Body1,
  H1,
  H3,
  H6,
  H6_2,
  H6_3,
  Subtitle1,
} from "@/styles/theme/components/typography.fontvariant";

import {
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  Dialog,
  DialogContent,
  IconButton,
  useTheme,
  Button,
  Box,
  selectClasses,
} from "@mui/material";
import { blue, common } from "@mui/material/colors";
import leader1 from "@/components/aboutUs/images/leader1.png";
import leader2 from "@/components/aboutUs/images/leader2.png";
import leader3 from "@/components/aboutUs/images/leader3.png";
import leader4 from "@/components/aboutUs/images/leader4.png";
import leader5 from "@/components/aboutUs/images/leader5.png";
import leader6 from "@/components/aboutUs/images/leader6.png";
import { Fragment, useState } from "react";
import { MaterialImage } from "@/commonComponents/material-components";
import AnimatedButton from "@/commonComponents/animated-button";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

interface CustomSwiperProps {
  data: Array<{
    imageUrl: string;
    title: string;
    subtitle: string;
    subheading: string;
    heading: string;
  }>;
}
const OurInspringLeadership = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState<{
    imageUrl: StaticImageData | string;
    title: string;
    subtitle: string;
    subheading: string;
    heading: string;
  } | null>(null);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const handleImageClick = (item: any) => {
    setSelectedItem(item);
    setOpenDialog(true);
  };

  return (
    <SectionWrapper
      pt={{ xs: 7, md: 6 }}
      pb={{ xs: 7, md: 12 }}
      rowGap={{ xs: 6, md: 2 }}
      SectionProps={{
        sx: {
          background: (theme) => theme.palette.primary.main,
        },
      }}
    >
      <Stack direction={"row"} alignItems={"center"} rowGap={11}>
        {matches && (
          <ArrowGradient height={190} {...arrowLeftToRightTransition} />
        )}
        <MotionStack
          variants={arrowInfoStaggerDiv}
          initial={"initial"}
          whileInView={"animate"}
          viewport={{ once: true }}
          maxWidth={{ xs: "100%", md: 814 }}
          rowGap={4}
        >
          <MotionTypography
            rowGap={{ xs: 2, md: 4 }}
            variant="h1"
            sx={{ fontSize: H1, width: { md: "919px", xs: "100%" } }}
            variants={arrowInfoStaggerDivChildren}
          >
            OUR INSPIRING LEADERSHIP
          </MotionTypography>
        </MotionStack>
      </Stack>
      <Stack direction={"row"} alignItems={"center"} rowGap={20}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {data.map((item: any, index) => (
            <Grid item key={index} xs={6} sm={6} md={4}>
              <Stack
                sx={{ position: "relative" }}
                onClick={() => handleImageClick(item)}
              >
                <MaterialImage
                  src={item.imageUrl}
                  alt=""
                  width={421}
                  height={421}
                  sx={{
                    width: { md: "421px", xs: "200px" },
                    height: { md: "421px", xs: "200px" },
                  }}
                />

                <Stack
                  sx={{
                    position: "absolute",
                    height: "100%",
                    display: "flex",
                    gap: "10px",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    backgroundSize: "cover",
                  }}
                >
                  <Stack
                    m={3}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"16px"}
                  >
                    <Typography
                      variant="body1"
                      sx={{ fontSize: H6_2, color: common.white }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: Subtitle1,
                        color: common.white,
                        width: "100%",
                      }}
                    >
                      {item.subtitle}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Dialog
          open={openDialog}
          onClose={() => setOpenDialog(false)}
          maxWidth="md"
          fullWidth
          sx={{ padding: "10px" }}
        >
          <DialogContent>
            <IconButton
              edge="end"
              color="inherit"
              onClick={() => setOpenDialog(false)}
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
              }}
            >
              <CloseIcon />
            </IconButton>
            {selectedItem && (
              <Stack
                display={"flex"}
                flexDirection={{ md: "row", xs: "column" }}
                gap={2}
              >
                <MaterialImage
                  src={selectedItem.imageUrl}
                  alt=""
                  width={479}
                  height={572}
                  sx={{
                    width: "100%",
                    height: "auto",
                  }}
                />
                <Stack display="flex" flexDirection="column" gap={2}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: H3,
                      color: (theme) => theme.palette.primary.main,
                    }}
                  >
                    {selectedItem.heading}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ color: (theme) => theme.palette.primary.main }}
                  >
                    {selectedItem.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: (theme) => theme.palette.primary.main }}
                  >
                    {selectedItem.subtitle}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "16px",
                      color: (theme) => theme.palette.primary.main,
                    }}
                  >
                    {selectedItem.subheading}
                  </Typography>
                </Stack>
              </Stack>
            )}

            <Stack
              display={"flex"}
              flexDirection={"row"}
              gap={2}
              m={2}
              alignSelf={"center"}
            >
              <Button>
                <KeyboardArrowLeftIcon />
              </Button>
              {data.map((item, index) => (
                <MaterialImage
                  alt=""
                  src={item.imageUrl}
                  key={index}
                  width={70}
                  height={70}
                />
              ))}
              <Button>
                <KeyboardArrowRightIcon />
              </Button>
            </Stack>
          </DialogContent>
        </Dialog>
      </Stack>
    </SectionWrapper>
  );
};

export default OurInspringLeadership;

const data: Array<{
  imageUrl: StaticImageData | string;
  title: string;
  subtitle: string;
  subheading: string;
  heading: string;
}> = [
  {
    imageUrl: leader1,
    title: "Rajiv Bajaj",
    subtitle: "Managing Director, Bajaj Auto",
    subheading:
      "Rajiv Bajaj excelled in Mechanical Engineering and Manufacturing Systems Engineering. Rising from the shop floor level at Bajaj Auto, he became the Managing Director in 2005. He has been instrumental in driving the company`s motorcycle focus. Currently, he`s shaping Bajaj Auto global brand strategy by applying the scientific principles of Homoeopathy.",
    heading: " Our goal is to transform lives and inspire change",
  },
  {
    imageUrl: leader6,
    title: "Sanjiv Bajaj",
    subtitle: "Chairman and Managing Director, Bajaj Finserv",
    subheading:
      "Rajiv Bajaj excelled in Mechanical Engineering and Manufacturing Systems Engineering. Rising from the shop floor level at Bajaj Auto, he became the Managing Director in 2005. He has been instrumental in driving the company`s motorcycle focus. Currently, he`s shaping Bajaj Auto global brand strategy by applying the scientific principles of Homoeopathy.",
    heading: " Our goal is to transform lives and inspire change",
  },
  {
    imageUrl: leader5,
    title: "Niraj Bajaj",
    subtitle: "Chairman & Managing Director, Mukand Limited",
    subheading:
      "Rajiv Bajaj excelled in Mechanical Engineering and Manufacturing Systems Engineering. Rising from the shop floor level at Bajaj Auto, he became the Managing Director in 2005. He has been instrumental in driving the company`s motorcycle focus. Currently, he`s shaping Bajaj Auto global brand strategy by applying the scientific principles of Homoeopathy.",
    heading: " Our goal is to transform lives and inspire change",
  },
  {
    imageUrl: leader4,
    title: "Shekhar Bajaj",
    subtitle: "Chairman & Managing Director, Bajaj Electricals",
    subheading:
      "Rajiv Bajaj excelled in Mechanical Engineering and Manufacturing Systems Engineering. Rising from the shop floor level at Bajaj Auto, he became the Managing Director in 2005. He has been instrumental in driving the company`s motorcycle focus. Currently, he`s shaping Bajaj Auto global brand strategy by applying the scientific principles of Homoeopathy.",
    heading: " Our goal is to transform lives and inspire change",
  },
  {
    imageUrl: leader3,
    title: "Madhur Bajaj",
    subtitle: "Non-Executive Director, Bajaj Auto",
    subheading:
      "Rajiv Bajaj excelled in Mechanical Engineering and Manufacturing Systems Engineering. Rising from the shop floor level at Bajaj Auto, he became the Managing Director in 2005. He has been instrumental in driving the company`s motorcycle focus. Currently, he`s shaping Bajaj Auto global brand strategy by applying the scientific principles of Homoeopathy.",
    heading: " Our goal is to transform lives and inspire change",
  },
  {
    imageUrl: leader2,
    title: "Minal Bajaj",
    subtitle: "Hon. Director, Jamnalal Bajaj Foundation",
    subheading:
      "Rajiv Bajaj excelled in Mechanical Engineering and Manufacturing Systems Engineering. Rising from the shop floor level at Bajaj Auto, he became the Managing Director in 2005. He has been instrumental in driving the company`s motorcycle focus. Currently, he`s shaping Bajaj Auto global brand strategy by applying the scientific principles of Homoeopathy.",
    heading: " Our goal is to transform lives and inspire change",
  },
];
