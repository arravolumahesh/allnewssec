import SectionWrapper from "@cc/section-wrapper";
import StorySlide, {
  StorySlideProps,
} from "@/components/home/our-stories/story-slide";
import EnhancedSwiper from "@cc/enhanced-swiper";

const OurStories = () => {
  return (
    <SectionWrapper>
      <EnhancedSwiper data={data} SlideComponent={StorySlide} />
    </SectionWrapper>
  );
};

export default OurStories;

const data: StorySlideProps[] = [
  {
    bgImage: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
    title: "Announcing Jamnalal Bajaj Awards 2023",
    description:
      "Felicitating the efforts of women and men who have dedicated their life to constructive work.",
    company: "Bajaj Auto",
    location: "Wardha, Maharashtra",
  },
];
