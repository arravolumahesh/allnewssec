import { StaticImageData } from "next/image";
import { EnhancedSwiperSlideComponent } from "@cc/enhanced-swiper";
import { MotionImage } from "@cc/motion-components";
import React from "react";

export interface ArrowSlideDefaultImageProps {
  image: string | StaticImageData;
  title: string;
}

const ArrowSlideDefaultImage: EnhancedSwiperSlideComponent<
  ArrowSlideDefaultImageProps
> = (props) => {
  const { image, title, index } = props;
  return (
    <MotionImage
      src={image}
      sx={{
        width: "100%",
        height: "100%",
      }}
      alt={title || `Arrow Swiper Slide ${index}`}
    />
  );
};
export default ArrowSlideDefaultImage;
