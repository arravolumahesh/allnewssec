import { EnhancedSwiperSlideData } from "@cc/enhanced-swiper";
import { StaticImageData } from "next/image";
import { MotionStack } from "@cc/motion-components";

export interface InitiativeHeroCardProps {
  title: string;
  designation: string;
  description: string;
  image: string | StaticImageData;
}

const InitiativeHeroCard = (
  props: EnhancedSwiperSlideData<InitiativeHeroCardProps>,
) => {
  const { title, designation, description, image, isActive, index } = props;
  return (
    <MotionStack
      key={`${title}-${index}`}
      sx={{
        background: `url(${typeof image === "string" ? image : image.src})`,
        backgroundSize: "cover",
        width: {
          xs: isActive ? 330 : 160,
          md: isActive ? 375 : 179.5,
          xl: isActive ? 420 : 199,
        },
        aspectRatio: "1/1",
        transition: "all 0.3s ease-in-out",
      }}
    ></MotionStack>
  );
};

export default InitiativeHeroCard;
