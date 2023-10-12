"use client";
import SectionWrapper from "@/commonComponents/section-wrapper";

import { MotionVariantProps } from "@/commonComponents/motion-components";
import OFA3 from "./images/OFA3.png";
import WorkForce from "./images/workForce.png";
import classRoom from "./images/classRoom.png";
import IPH1 from "./images/IPH1.png";
import IPH2 from "./images/IPH2.png";
import { H6_2 } from "@/styles/theme/components/typography.fontvariant";
import ExpandableAccordion from "@/commonComponents/expandable-accordion";
import ArrowSwiperWithInfoSection, {
  ArrowSwiperWithInfoProps,
} from "@/commonComponents/arrow-swiper-with-info-section";
import ArrowSlideInfo from "@/commonComponents/cards/arrow-slide-info";
import { ArrowSlideDefaultImageProps } from "@/commonComponents/cards/arrow-slide-default-image";

const data = [
  {
    title: "Skill Development",
    description:
      "Changing the landscape of the skilling ecosystem through various initiatives and programs to bridge the gap between academia and industry.",
    stats: [
      {
        header: "93K",
        subHeader: "Students Educated",
      },
      {
        header: " 100+",
        subHeader: "Training Institutions",
      },
      {
        header: "300+",
        subHeader: "Programs Conducted",
      },
    ],
    initiatives: [
      {
        img: WorkForce,
        title: "Building a Skilled-Workforce",
      },
      {
        img: classRoom,
        title: "Implementing Skill-Based Education in Schools",
      },
      {
        img: IPH1,
        title: "IPH-Triveni Program",
      },
      {
        img: IPH2,
        title: "IPH-Triveni Program",
      },
    ],
  },
  {
    title: "Education",
    description:
      "Changing the landscape of the skilling ecosystem through various initiatives and programs to bridge the gap between academia and industry.",
    initiatives: [
      {
        img: WorkForce,
        title: "Building a Skilled-Workforce",
      },
      {
        img: classRoom,
        title: "Implementing Skill-Based Education in Schools",
      },
      {
        img: IPH1,
        title: "IPH-Triveni Program",
      },
      {
        img: IPH2,
        title: "IPH-Triveni Program",
      },
    ],
  },
  {
    title: "Miscellaneous",
    description:
      "Changing the landscape of the skilling ecosystem through various initiatives and programs to bridge the gap between academia and industry.",
    stats: [
      {
        header: "93K",
        subHeader: "Students Educated",
      },
      {
        header: " 100+",
        subHeader: "Training Institutions",
      },
      {
        header: "300+",
        subHeader: "Programs Conducted",
      },
    ],
    initiatives: [
      {
        img: WorkForce,
        title: "Building a Skilled-Workforce",
      },
      {
        img: classRoom,
        title: "Implementing Skill-Based Education in Schools",
      },
      {
        img: IPH1,
        title: "IPH-Triveni Program",
      },
      {
        img: IPH2,
        title: "IPH-Triveni Program",
      },
    ],
  },
];

const OurFocusAreas = () => {
  return (
    <SectionWrapper
      SectionProps={{
        sx: {
          background: (theme) => theme.palette.gradient.darkToLight,
        },
        id: "programs-initiatives",
      }}
      SectionHeaderProps={{
        title: "OUR FOCUS AREAS",
      }}
      color={"secondary.main"}
    >
      <ArrowSwiperWithInfoSection
        data={arrowData}
        SwiperKey={OurFocusAreas.name}
        SwiperProps={{
          navigation: false,
        }}
        ArrowSlideInfoProps={{
          SlotProps: {
            DescriptionTypographyProps: {
              fontSize: H6_2,
              color: "common.white",
            },
            ButtonProps: {
              href: "/",
              variant: "contained",
              color: "secondary",
            },
          },
          // width: "50%",
        }}
        SectionWrapperProps={{
          p: "0 !important",
          mb: { xs: 4, md: 9 },
        }}
      />
      <ExpandableAccordion data={data} TopDivider BottomDivider />
    </SectionWrapper>
  );
};

export default OurFocusAreas;

const arrowData: (ArrowSwiperWithInfoProps<
  typeof ArrowSlideInfo
>["data"][number]["data"][number] &
  ArrowSlideDefaultImageProps)[] = [
  {
    description:
      "We are deeply committed to improving livelihoods, particularly for the marginalized youth of our country by skilling and empowering them. We also contribute to education, health, environment, animal welfare projects, and other relevant areas for the sustainable development of the community and the nation.",
    image: OFA3,
    btnText: "View All Initiatives",
    btnLink: "/",
  },
];

const staggerChildren: MotionVariantProps = {
  initial: {
    opacity: 0,
    y: "100%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const staggerHeading: MotionVariantProps = {
  initial: {
    opacity: 0,
    y: "-50%",
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const staggerDiv: MotionVariantProps = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 1,
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

const StagImage1: MotionVariantProps = {
  initial: {
    opacity: 0,
    x: "-100%",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const StagImage2: MotionVariantProps = {
  initial: {
    opacity: 0,
    y: "-100%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const StagImage3: MotionVariantProps = {
  initial: {
    opacity: 0,
    y: "100%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const StagAccordion: MotionVariantProps = {
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};
