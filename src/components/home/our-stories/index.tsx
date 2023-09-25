import SectionWrapper from "@cc/section-wrapper";
import StorySlide, {
  StorySlideProps,
} from "@/components/home/our-stories/story-slide";
import EnhancedSwiper from "@cc/enhanced-swiper";
import StoryImage from "./images/story-of-bajaj-auto.jpg";
import SwiperNavigationArrowIcon from "@cc/swiper-navigation-arrow-icon";

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
      }}
    >
      <EnhancedSwiper
        data={data}
        SlideComponent={StorySlide}
        navigation={{
          enabled: true,
          nextEl: null,
          prevEl: ".swiper-prev",
        }}
      >
        <SwiperNavigationArrowIcon
          direction={"next"}
          className={"swiper-prev"}
          sx={{
            right: {
              xs: 16,
              md: 40,
              lg: 64,
            },
            fontSize: 70,
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
    title: "Announcing Jamnalal Bajaj Awards 2023",
    description:
      "Felicitating the efforts of women and men who have dedicated their life to constructive work.",
    company: "Bajaj Auto",
    location: "Wardha, Maharashtra",
  },
  {
    bgImage: StoryImage,
    title: "Announcing Jamnalal Bajaj Awards 2024",
    description:
      "Felicitating the efforts of women and men who have dedicated their life to constructive work.",
    company: "Bajaj Auto",
    location: "Wardha, Maharashtra",
  },
];
