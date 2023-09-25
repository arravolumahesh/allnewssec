import { styled } from "@mui/material/styles";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { ComponentProps } from "react";

export const MaterialImage = styled(Image)({});
export const MaterialSwiper = styled(Swiper)({});
export const MaterialSwiperSlide = styled(SwiperSlide)({});

export type MaterialImageProps = ComponentProps<typeof MaterialImage>;
export type MaterialSwiperProps = ComponentProps<typeof MaterialSwiper>;
export type MaterialSwiperSlideProps = ComponentProps<
  typeof MaterialSwiperSlide
>;
