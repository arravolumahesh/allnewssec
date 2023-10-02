"use client";
import {
  ComponentProps,
  ComponentType,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionWrapper, { SectionWrapperProps } from "@cc/section-wrapper";
import EnhancedSwiper, {
  EnhancedSwiperProps,
  EnhancedSwiperSlideData,
} from "@cc/enhanced-swiper";
import StorySlide from "@c/home/our-stories/story-slide";
import { Navigation } from "swiper/modules";
import SwiperNavigationArrowIcon from "@cc/swiper-navigation-arrow-icon";
import { deepmerge } from "@mui/utils";

export interface ScrollTriggeredSwiperSectionProps<
  T extends ComponentType<any> = ComponentType<any>,
  P extends ComponentProps<T> = ComponentProps<T>,
> extends SectionWrapperProps {
  data:
    | EnhancedSwiperProps<T, P>["data"]
    | EnhancedSwiperSlideData<typeof StorySlide>[];
  SlideComponent?:
    | EnhancedSwiperProps<T, P>["SlideComponent"]
    | EnhancedSwiperProps<typeof StorySlide>["SlideComponent"];
  EnhancedSwiperProps?: Omit<EnhancedSwiperProps<T, P>, "children">;
}

const ScrollTriggeredSwiperSection = <
  T extends ComponentType<any>,
  P extends ComponentProps<T>,
>(
  props: ScrollTriggeredSwiperSectionProps<T, P>,
) => {
  const {
    data,
    SlideComponent,
    EnhancedSwiperProps,
    ...restSectionWrapperProps
  } = props;
  const sectionRef = useRef<HTMLDivElement>(null);
  const refTimeline = useRef<GSAPTimeline>();
  const [isAnimationCompleted, setIsAnimationCompleted] = useState(false);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    if (section) {
      const { offsetHeight } = section;
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 15%",
          end: `+=${offsetHeight}`,
          scrub: true,
          pin: true,
          pinSpacing: true,
          onLeave: () => {
            setIsAnimationCompleted(true);
          },
        },
      });
      timeline
        .to(section, {
          clipPath:
            "polygon(49% 0%, 60% 50%, 50% 100%, 46% 100%, 56% 50%, 45% 0%)",
        })
        .to(section, {
          clipPath:
            "polygon(100% 0%, 111% 50%, 101% 100%, -10% 100%, 0% 50%, -11% 0%)",
          minWidth: "auto",
          minHeight: "auto",
          height: "auto",
          width: "auto",
        });
      refTimeline.current = timeline;
    }
    return () => {
      if (refTimeline.current) {
        refTimeline.current?.scrollTrigger?.kill();
        refTimeline.current?.kill();
        refTimeline.current?.clear();
      }
    };
  }, []);

  return (
    <SectionWrapper
      ref={sectionRef}
      color={"secondary.main"}
      initial={"initial"}
      whileInView={isAnimationCompleted ? "animate" : undefined}
      {...deepmerge(defaultSectionWrapperProps, restSectionWrapperProps)}
    >
      <EnhancedSwiper
        data={data || []}
        SlideComponent={SlideComponent || StorySlide}
        modules={[Navigation]}
        passSlideState
        navigation={{
          enabled: true,
          nextEl: ".swiper-next",
          prevEl: null,
        }}
        {...EnhancedSwiperProps}
      >
        <SwiperNavigationArrowIcon
          direction={"next"}
          className={"swiper-next"}
          sx={{
            right: {
              xs: 16,
              md: 40,
              lg: 64,
            },
            fontSize: { xs: 45, md: 70 },
            top: {
              xs: "15%",
              sm: "22%",
              md: "50%",
            },
          }}
        />
      </EnhancedSwiper>
    </SectionWrapper>
  );
};

export default ScrollTriggeredSwiperSection;

const defaultSectionWrapperProps: SectionWrapperProps = {
  color: "secondary.main",
  ContainerProps: {
    pl: 0,
    pr: 0,
    pb: {
      xs: 0,
      md: 1.5,
      xxl: 3,
    },
  },
  sx: {
    clipPath: "polygon(48% 25%, 55% 50%, 49% 75%, 46% 75%, 52% 50%, 45% 25%)",
  },
};
