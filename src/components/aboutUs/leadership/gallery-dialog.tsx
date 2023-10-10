import { Close } from "@mui/icons-material";
import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  Typography,
  dialogClasses,
} from "@mui/material";
import React, { useState } from "react";
import { LeaderData } from "./leadership";
import { MaterialImage } from "@/commonComponents/material-components";
import { H5_1 } from "@/styles/theme/components/typography.fontvariant";
import EnhancedSwiper from "@/commonComponents/enhanced-swiper";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper } from "swiper/types";

type GalleryDialogProps = {
  open: boolean;
  setOpen: (d: boolean) => void;
  data: LeaderData;
};

const GalleryDialog = (props: GalleryDialogProps) => {
  const { open, setOpen, data } = props;
  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper | null>(null);

  const imageData = data.map((item) => ({ image: item.image }));

  const imageBox = (props: { image: string }) => {
    const { image } = props;
    return (
      <MaterialImage
        src={image}
        alt=''
        width={106}
        height={106}
        sx={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    );
  };
  return (
    <Dialog
      onClose={() => setOpen(false)}
      open={open}
      fullWidth
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
    >
      <DialogContent
        sx={{
          width: 1,
          p: 0,
          position: "relative",
          color: "primary.main",
          py: { xs: 5, md: 0 },
          px: { xs: 3, md: 0 },
        }}
      >
        <IconButton
          onClick={() => setOpen(false)}
          sx={{
            position: "absolute",
            top: { xs: 2, md: 20 },
            right: { xs: 8, md: 20 },
            color: "common.white",
            zIndex: 1,
          }}
        >
          <Close sx={{ color: "primary.main" }} />
        </IconButton>
        <EnhancedSwiper
          data={data}
          SlideComponent={leaderSlide}
          loop={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Thumbs]}
        />
        <EnhancedSwiper
          data={imageData}
          SlideComponent={imageBox}
          //   onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={16}
          slidesPerView={"auto"}
          freeMode={true}
          navigation
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          SlideWrapperProps={{
            sx: {
              width: 106,
              height: 106,
            },
          }}
          sx={{
            pt: 3,
            ".swiper-wrapper": { justifyContent: "center" },
            ".swiper-slide-active": {
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
    >
      <MaterialImage
        src={image}
        alt=''
        width={450}
        height={533}
        sx={{
          width: "100%",
          height: "100%",
          maxWidth: 450,
          minHeight: { xs: 254, md: 533 },
          objectFit: "cover",
        }}
      />
      <Stack px={{ xs: 0, md: 7 }} rowGap={3}>
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
