import { MotionStack, MotionStackProps } from "@cc/motion-components";
import InitiativeHeroCard, {
  InitiativeHeroCardProps,
} from "@c/ourCompanies/heroesOfInitiatives/initiative-hero-card";
import SwiperNavigationButton from "@cc/swiper-navigation-button";
import { useCallback, useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";

export interface HeoresSliderProps extends Omit<MotionStackProps, "children"> {
  data: InitiativeHeroCardProps["data"][];
}

const HeoresSlider = (props: HeoresSliderProps) => {
  const { data, ...restMotionStackProps } = props;
  const [activeSlide, setActiveSlide] = useState(0);
  const slidesData = useMemo(() => {
    const firstSlide = data[activeSlide];
    const previousSlides = data.slice(0, activeSlide);
    const nextSlides = data.slice(activeSlide + 1, data.length);
    return [firstSlide, ...nextSlides, ...previousSlides];
  }, [data, activeSlide]);

  const handlePrev = useCallback(() => {
    if (activeSlide === 0) {
      return setActiveSlide(slidesData.length - 1);
    } else {
      setActiveSlide((prev) => prev - 1);
    }
  }, [activeSlide, slidesData.length]);
  const handleNext = useCallback(() => {
    if (activeSlide === slidesData.length - 1) {
      return setActiveSlide(0);
    } else {
      setActiveSlide((prev) => prev + 1);
    }
  }, [activeSlide, slidesData.length]);
  return (
    <>
      <MotionStack
        direction={"row"}
        columnGap={3}
        alignItems={"flex-end"}
        overflow={"hidden"}
        mb={{
          xs: 5,
          md: 4,
          xl: 3,
        }}
        height={{
          xs: 330,
          md: 375,
          xl: 420,
        }}
        {...restMotionStackProps}
      >
        <AnimatePresence mode={"popLayout"}>
          <InitiativeHeroCard
            data={slidesData[0]}
            key={slidesData[0].title}
            isActive
            layout
            sx={{
              width: {
                xs: 330,
                md: 375,
                xl: 420,
              },
            }}
          />
          {slidesData.slice(1, slidesData.length).map((item, index) => {
            return <InitiativeHeroCard key={item.title} layout data={item} />;
          })}
        </AnimatePresence>
      </MotionStack>
      <SwiperNavigationButton
        PrevButtonProps={{
          onClick: handlePrev,
        }}
        NextButtonProps={{
          onClick: handleNext,
        }}
        ml={"auto"}
        mr={{ xs: "auto", sm: "unset" }}
      />
    </>
  );
};

export default HeoresSlider;
