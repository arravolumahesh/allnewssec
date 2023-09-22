import { styled } from "@mui/material/styles";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { ComponentProps } from "react";

export const MaterialImage = styled(Image)(({ theme }) => {
  return theme.unstable_sx({});
});

export const MaterialSwiper = styled(Swiper)(({ theme }) => {
  return theme.unstable_sx({});
});
export const MaterialSwiperSlide = styled(SwiperSlide)(({ theme }) => {
  return theme.unstable_sx({});
});

export type MaterialImageProps = ComponentProps<typeof MaterialImage>;
export type MaterialSwiperProps = ComponentProps<typeof MaterialSwiper>;
export type MaterialSwiperSlideProps = ComponentProps<
  typeof MaterialSwiperSlide
>;
