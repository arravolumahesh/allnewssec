import StoryImage from "./images/story-of-bajaj-auto.jpg";
import ScrollTriggeredSwiperSection, {
  ScrollTriggeredSwiperSectionProps,
} from "@cc/scrollTriggeredSwiperSection";

import shiksha from './images/shiksha-foundation.jpg'
import robotic from './images/Homepg_Story1.jpeg'

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
    title: "Propelling Financial Independence ",
    description: `Salaam’s father was the sole bread-winner in this family of four and working hard to make ends meet with his fruit cart at the local bus stop. Based on the recommendation of a professor in his college, Salaam signed up for CPBFI when he was finishing his M.Com. CPBFI provided the right launchpad to learn about the industry and more importantly improved his confidence in himself. He joined Bajaj Allianz GIC as soon as he finished college with a starting salary of around Rs 2.5 lakh a year and that has since increased significantly.`,
    company: "BAJAJ FINSERV",
    location: "Wardha, Maharashtra",
    button: "View More Initiatives",
  },
  {
    bgImage: StoryImage,
    title: "Honouring Gandhian Warriors",
    description:
      "Jamnalal Bajaj Foundation recognises and honours the changemakers in our society following the core objectives of Jamnalal Bajaj Awards. Changemakers who are passion driven, selfless men and women, driving change at a large scale to create a positive impact on the lives of the marginalised and deprived people.",
    company: "Jamnalal Bajaj Foundation",
    location: "Pune, Maharashtra",
    button: "View More Initiatives",
  },
  {
    bgImage: shiksha,
    title: "Shiksha Vikas",
    description:
      "Infrastructure refurbishment of the Zilla Parishad School in Khirdisathe Village, Yeola Taluk, Nasik District, where 110 kids were provided with learning, better wash Infrastructure, drinking water facilities and 250 tree plantations. ",
    company: "Bajaj ELECTRICALS",
    location: "Pune, Maharashtra",
    button: "View More Initiatives",
  },
  {
    bgImage: robotic,
    title: "Modest Beginnings to Robotic Excellence",
    description:
      "Alisha, a 9ᵗʰ grade student from a modest background, found her passion for robotics at the Yojak Study Center. Her vision led her to the International Robotics Competition, where she excelled and inspired several of her peers. She advocates for the pivotal role of robotics in the country and abroad, and the promising career prospects it offers.",
    company: "Bajaj AUTO",
    location: "Pune, Maharashtra",
    button: "View More Initiatives",
  },
];
