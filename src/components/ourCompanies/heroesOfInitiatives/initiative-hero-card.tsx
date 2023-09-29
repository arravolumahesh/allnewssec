import { EnhancedSwiperSlideData } from "@cc/enhanced-swiper";
import { StaticImageData } from "next/image";
import { Stack } from "@mui/material";

export interface InitiativeHeroCardProps {
  title: string;
  designation: string;
  description: string;
  image: string | StaticImageData;
}

const InitiativeHeroCard = (
  props: EnhancedSwiperSlideData<InitiativeHeroCardProps>,
) => {
  const { title, designation, description, image, isActive } = props;
  return (
    <Stack
      sx={{
        background: `url(${typeof image === "string" ? image : image.src})`,
        backgroundSize: "cover",
        width: {
          xs: isActive ? 330 : 160,
          md: isActive ? 375 : 264.5,
          xl: isActive ? 420 : 199,
        },
        aspectRatio: "1/1",
        transition: "all 0.3s ease-in-out",
      }}
    ></Stack>
  );
};

export default InitiativeHeroCard;
