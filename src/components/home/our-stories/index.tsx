"use client";
import SectionWrapper from "@cc/section-wrapper";
import StorySlide, {
  StorySlideProps,
} from "@/components/home/our-stories/story-slide";
import EnhancedSwiper from "@cc/enhanced-swiper";
import StoryImage from "./images/story-of-bajaj-auto.jpg";
import SwiperNavigationArrowIcon from "@cc/swiper-navigation-arrow-icon";
import { Navigation } from "swiper/modules";
import { useLayoutEffect, useRef, useState } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

const OurStories = () => {
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
          toggleActions: "play none none none",
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
      SectionHeaderProps={{
        title: "Our Stories",
      }}
      ContainerProps={{
        pl: 0,
        pr: 0,
        pb: {
          xs: 0,
          md: 1.5,
          xxl: 3,
        },
      }}
      sx={{
        clipPath:
          "polygon(48% 25%, 55% 50%, 49% 75%, 46% 75%, 52% 50%, 45% 25%)",
      }}
      initial={"initial"}
      whileInView={isAnimationCompleted ? "animate" : undefined}
    >
      <EnhancedSwiper
        data={data}
        SlideComponent={StorySlide}
        modules={[Navigation]}
        passSlideState
        navigation={{
          enabled: true,
          nextEl: ".swiper-next",
          prevEl: null,
        }}
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

export default OurStories;

const data: StorySlideProps[] = [
  {
    bgImage: StoryImage,
    title: "The journey between your dreams and reality is worth taking.",
    description: `Ankit’s life was much like the streets he inhabited - full of twists and turns; some expected, some unpredictable. The ‘22-year-old boy’ harboured a dream—turning his passion for mechanics into a livelihood. However, without formal training, it remained distant. Our skill development initiative changed that. With the right guidance, today, Ankit is a professional mechanic with a promising career, inspiring several others in his community.\nThe journey was tough, but which good thing worth achieving isn’t?`,
    company: "Bajaj Auto",
    location: "Wardha, Maharashtra",
  },
  {
    bgImage: StoryImage,
    title: "Announcing Jamnalal Bajaj Awards 2024",
    description:
      "Felicitating the efforts of women and men who have dedicated their life to constructive work.",
    company: "Bajaj Finserv",
    location: "Pune, Maharashtra",
  },
];
