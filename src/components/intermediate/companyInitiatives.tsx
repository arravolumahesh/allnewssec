"use client";
import { initiativedata } from "./intermediateInitiatives";
import MLink from "@/commonComponents/m-link";
import { Box, Stack, styled } from "@mui/material";
import { useState } from "react";
// import Swiper core and required modules
import { FreeMode, Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SlideButtons from "./swiper/swiperButton";
import InitiativeCard from "./swiper/initiativeCard";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import SvgIconArrow from "./icons/arrowIcon";

interface props {
  initiativedata: (typeof initiativedata)[0];
}

const StyledSwiperSlide = styled(SwiperSlide)``;

const CompanyInitiatives = (props: props) => {
  const { initiativedata, ...rest } = props;
  const [disablePrev, setDisabledPrev] = useState<boolean>(true);
  const [disableNext, setDisabledNext] = useState<boolean>(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Stack
      component={"div"}
      sx={{
        py: { xs: 5, lg: 12 },
        "& .swiper": {
          width: "100%",
        },
      }}
    >
      {useMediaQuery("(min-width: 100px)") && (
        <Swiper
          // install Swiper modules
          slidesPerView={matches ? "auto" : 3}
          spaceBetween={matches ? theme.spacing(3) : theme.spacing(3)}
          // freeMode={true}
          pagination={false}
          navigation={false}
          modules={[Pagination, Navigation]} 
          // modules={[Pagination, Navigation, FreeMode]}
          onSlideChange={(swiper) => {
            setDisabledPrev(swiper.isBeginning);
            setDisabledNext(swiper.isEnd);
          }}
        >
          {initiativedata.initiative.map((item, index) => (
            <StyledSwiperSlide
              sx={{
                [theme.breakpoints.down("md")]: {
                  width: "300px",
                },
              }}
              key={index}
            >
              <InitiativeCard data={item} {...{ matches }} />
            </StyledSwiperSlide>
          ))}

          <Stack
            component={"div"}
            slot="container-start"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              pb: { xs: 2, md: 7 },
            }}
          >
            <Box sx={{maxWidth:'100%'}}>
              <MLink
                href={""}
                variant="companylink"
                disableRipple
                endIcon={<SvgIconArrow />}
              >
                <span>{initiativedata.companyName}</span>
              </MLink>
            </Box>

            {matches === false && initiativedata.initiative.length > 3 && (
              <Box>
                <SlideButtons
                  disablePrev={disablePrev}
                  disableNext={disableNext}
                />
              </Box>
            )}
          </Stack>
        </Swiper>
      )}
    </Stack>
  );
};

export default CompanyInitiatives;
