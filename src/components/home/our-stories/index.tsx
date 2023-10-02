import StoryImage from "./images/story-of-bajaj-auto.jpg";
import ScrollTriggeredSwiperSection, {
  ScrollTriggeredSwiperSectionProps,
} from "@cc/scrollTriggeredSwiperSection";

const OurStories = () => {
  return (
    <ScrollTriggeredSwiperSection
      SectionHeaderProps={{
        title: "Our Stories",
      }}
      ContainerProps={{
        pb: {
          xs: 0,
          md: 1.5,
          xxl: 3,
        },
      }}
      data={data}
    />
  );
};

export default OurStories;

const data: ScrollTriggeredSwiperSectionProps["data"] = [
  {
    bgImage: StoryImage,
    title: "The journey between your dreams and reality is worth taking.",
    description: `Ankit’s life was much like the streets he inhabited - full of twists and turns; some expected, some unpredictable. The ‘22-year-old boy’ harboured a dream—turning his passion for mechanics into a livelihood. However, without formal training, it remained distant. Our skill development initiative changed that. With the right guidance, today, Ankit is a professional mechanic with a promising career, inspiring several others in his community.\nThe journey was tough, but which good thing worth achieving isn’t?`,
    company: "Bajaj Auto",
    location: "Wardha, Maharashtra",
    button: "View More Initiatives",
  },
  {
    bgImage: StoryImage,
    title: "Announcing Jamnalal Bajaj Awards 2024",
    description:
      "Felicitating the efforts of women and men who have dedicated their life to constructive work.",
    company: "Bajaj Finserv",
    location: "Pune, Maharashtra",
    button: "View More Initiatives",
  },
];
