"use client";
import { MotionVariantProps } from "@/commonComponents/motion-components";

import SectionWrapper from "@/commonComponents/section-wrapper";

import GramVikas from "./images/GramVikas.png";
import RuralDevelopment from "./images/RuralDevelopment.png";
import CentreofScience from "./images/CentreofScience.png";
import ExpandableAccordion, {
  ExpandableAccordionProps,
} from "@/commonComponents/expandable-accordion";

const Initiatives = () => {
  return (
    <SectionWrapper
      SectionProps={{
        sx: {
          background: (theme) => theme.palette.gradient.darkToLight,
        },
      }}
      py={{ xs: 4, md: 6 }}
    >
      <ExpandableAccordion data={data} />
    </SectionWrapper>
  );
};

export default Initiatives;

const data: ExpandableAccordionProps["data"] = [
  {
    title: "Community Development",
    description:
      "Making communities live a holistic and quality life through various activities & initiatives. ",
    initiatives: [
      {
        img: CentreofScience,
        title: "Centre of Science for Villages",
      },
      {
        img: RuralDevelopment,
        title: "Integrated Rural Development",
      },
      {
        img: GramVikas,
        title: "Gram Vikas",
      },
    ],
  },
  {
    title: "Healthcare",
    description:
      "Making communities live a holistic and quality life through various activities & initiatives. ",
    initiatives: [
      {
        img: CentreofScience,
        title: "Centre of Science for Villages",
      },
      {
        img: RuralDevelopment,
        title: "Integrated Rural Development",
      },
      {
        img: GramVikas,
        title: "Gram Vikas",
      },
    ],
  },
  {
    title: "Education",
    description:
      "Making communities live a holistic and quality life through various activities & initiatives. ",
    initiatives: [
      {
        img: CentreofScience,
        title: "Centre of Science for Villages",
      },
      {
        img: RuralDevelopment,
        title: "Integrated Rural Development",
      },
      {
        img: GramVikas,
        title: "Gram Vikas",
      },
    ],
  },
  {
    title: "Arts, Culture & Sports",
    description:
      "Making communities live a holistic and quality life through various activities & initiatives. ",
    initiatives: [
      {
        img: CentreofScience,
        title: "Centre of Science for Villages",
      },
      {
        img: RuralDevelopment,
        title: "Integrated Rural Development",
      },
      {
        img: GramVikas,
        title: "Gram Vikas",
      },
    ],
  },
  {
    title: "Peace & Spirituality",
    description:
      "Making communities live a holistic and quality life through various activities & initiatives. ",
    initiatives: [
      {
        img: CentreofScience,
        title: "Centre of Science for Villages",
      },
      {
        img: RuralDevelopment,
        title: "Integrated Rural Development",
      },
      {
        img: GramVikas,
        title: "Gram Vikas",
      },
    ],
  },
];

const StagAccordion: MotionVariantProps = {
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const staggerBtn: MotionVariantProps = {
  initial: {
    opacity: 0,
    y: "30%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};
