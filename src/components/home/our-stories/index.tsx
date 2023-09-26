import SectionWrapper from "@cc/section-wrapper";
import StorySlide, {
  StorySlideProps,
} from "@/components/home/our-stories/story-slide";
import EnhancedSwiper from "@cc/enhanced-swiper";
import StoryImage from "./images/story-of-bajaj-auto.jpg";
import SwiperNavigationArrowIcon from "@cc/swiper-navigation-arrow-icon";
import { Navigation } from "swiper/modules";
import { MotionVariantProps } from "@/commonComponents/motion-components";
import { motion } from "framer-motion";

const OurStories = () => {
  return (
    <SectionWrapper
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
      component={motion.div}
      variants={clipTransition}
      initial={"initial"}
      whileInView={"animate"}
      viewport={{ once: true }}
    >
      <EnhancedSwiper
        data={data}
        SlideComponent={StorySlide}
        modules={[Navigation]}
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

const clipTransition: MotionVariantProps = {
  initial: {
    clipPath: "polygon(48% 25%, 55% 50%, 49% 75%, 46% 75%, 52% 50%, 45% 25%)",
  },
  animate: {
    clipPath: [
      "polygon(48% 25%, 55% 50%, 49% 75%, 46% 75%, 52% 50%, 45% 25%)",
      "polygon(49% 0%, 60% 50%, 50% 100%, 46% 100%, 56% 50%, 45% 0%)",
      "polygon(100% 0%, 111% 50%, 101% 100%, -10% 100%, 0% 50%, -11% 0%)",
    ],
    transition: {
      delay: 0.4,
      duration: 1.5,
    },
  },
};
