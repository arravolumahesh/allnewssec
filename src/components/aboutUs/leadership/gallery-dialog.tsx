import { Close } from "@mui/icons-material";
import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  Theme,
  Typography,
  dialogClasses,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { LeaderData } from "./leadership";
import { MaterialImage } from "@/commonComponents/material-components";
import { H5_1 } from "@/styles/theme/components/typography.fontvariant";
import EnhancedSwiper from "@/commonComponents/enhanced-swiper";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper } from "swiper/types";
import SwiperNavigationButton from "@/commonComponents/swiper-navigation-button";

type GalleryDialogProps = {
  open: boolean;
  setOpen: (d: boolean) => void;
  data: LeaderData;
  activeIndex: number;
};

const GalleryDialog = (props: GalleryDialogProps) => {
  const { open, setOpen, data, activeIndex } = props;
  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper | null>(null);

  const fullScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  const imageData = data.map((item) => ({ image: item.image }));

  const imageBox = (props: { image: string }) => {
    const { image } = props;
    return (
      <MaterialImage
        src={image}
        alt=''
        width={106}
        height={106}
        sx={{
          width: { xs: 72, md: "100%" },
          height: { xs: 72, md: "100%" },
          objectFit: "cover",
        }}
      />
    );
  };
  return (
    <Dialog
      onClose={() => setOpen(false)}
      open={open}
      fullWidth
      fullScreen={fullScreen}
      maxWidth={"lg"}
      sx={{
        [`.${dialogClasses.paper}`]: {
          borderRadius: 0,
          m: 3,
          width: 1,
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      }}
      scroll='paper'
    >
      <DialogContent
        sx={{
          width: 1,
          p: 0,
          position: "relative",
          color: "primary.main",
        }}
      >
        <IconButton
          onClick={() => setOpen(false)}
          sx={{
            position: "absolute",
            top: { xs: 2, md: 10, lg: 20 },
            right: { xs: 8, md: 10, lg: 20 },
            color: "common.white",
            zIndex: 2,
          }}
        >
          <Close sx={{ color: "primary.main" }} />
        </IconButton>
        <EnhancedSwiper
          data={data}
          SlideComponent={leaderSlide}
          loop={true}
          initialSlide={activeIndex}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          navigation={{
            enabled: true,
            nextEl: ".swiper-leader-next",
            prevEl: ".swiper-leader-prev",
          }}
          modules={[Thumbs, Navigation]}
          Slots={{
            ContainerEndChildren: (
              <SwiperNavigationButton
                color={"common.white"}
                PrevButtonProps={{
                  className: "swiper-leader-prev",
                }}
                NextButtonProps={{
                  className: "swiper-leader-next",
                }}
                width={1}
                justifyContent={{ xs: "center", md: "space-between" }}
                mt={{ xs: 15, md: 6.5 }}
              />
            ),
          }}
          sx={{
            height: "auto",
          }}
        />
        <EnhancedSwiper
          data={imageData}
          SlideComponent={imageBox}
          onSwiper={setThumbsSwiper}
          // loop={true}
          spaceBetween={16}
          slidesPerView={"auto"}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode]}
          SlideWrapperProps={{
            sx: {
              width: { xs: 72, md: 106 },
              height: { xs: 72, md: 106 },
            },
          }}
          sx={{
            pt: 3,
            mt: { xs: "-160px", md: "-100px" },
            width: { xs: 1, md: "calc(100% - 96px)" },
            height: "auto",
            ".swiper-wrapper": {
              justifyContent: {
                xs: "flex-start",
                sm: "center",
                md: "flex-start",
                md_lg: "center",
              },
            },
            ".swiper-slide-thumb-active": {
              border: "1.5px solid #fff",
            },
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default GalleryDialog;

type LeaderSlideProps = {
  title: string;
  designation: string;
  image: string;
  quote: string;
  biography: string;
};

const leaderSlide = (props: LeaderSlideProps) => {
  const { title, designation, image, quote, biography } = props;
  return (
    <Stack
      width={1}
      direction={{ xs: "column", md: "row" }}
      alignItems={{ xs: "none", md: "center" }}
      rowGap={4}
      bgcolor={"common.white"}
      py={{ xs: 5, md: 0 }}
      px={{ xs: 3, md: 0 }}
    >
      <MaterialImage
        src={image}
        alt=''
        width={450}
        height={533}
        sx={{
          width: { xs: "100%", md: 450 },
          height: { xs: 254, md: 533 },
          objectFit: "cover",
        }}
      />
      <Stack px={{ xs: 0, md: 2, md_lg: 7 }} rowGap={3}>
        <Typography variant='h3' fontSize={H5_1}>
          {quote}
        </Typography>
        <Stack rowGap={0.5}>
          <Typography fontSize={"18px !important"}>{title}</Typography>
          <Typography variant='body2'>{designation}</Typography>
        </Stack>
        <Typography fontSize={"16px !important"} sx={{ opacity: 0.7 }}>
          {biography}
        </Typography>
      </Stack>
    </Stack>
  );
};
