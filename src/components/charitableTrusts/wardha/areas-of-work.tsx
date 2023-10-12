"use client";
import ExpandableAccordion, {
  ExpandableAccordionProps,
} from "@cc/expandable-accordion";
import shikshaMandal from "./images/shiksha-mandal.jpg";
import instituteOfGandhianStudies from "./images/institute-of-gandhian-studies.jpg";
import mahilaAshram from "./images/mahila-ashram.jpg";
import jamnalalBajajBalmandir from "./images/jamnalal-bajaj-balmandir.jpg";
import SectionWrapper from "@cc/section-wrapper";

const AreasOfWork = () => {
  return (
    <SectionWrapper
      SectionProps={{
        sx: {
          background: (theme) => theme.palette.gradient.lightToDark,
        },
      }}
      SectionHeaderProps={{
        title: "Our areas of work",
      }}
      color={"secondary.main"}
    >
      <ExpandableAccordion data={data} />
    </SectionWrapper>
  );
};

export default AreasOfWork;

const data: ExpandableAccordionProps["data"] = [
  {
    title: "Education",
    initiatives: [
      {
        img: shikshaMandal,
        title: "Shiksha Mandal",
      },
      {
        img: instituteOfGandhianStudies,
        title: "Institute of Gandhian\n" + "Studies",
      },
      {
        img: mahilaAshram,
        title: "Mahila Ashram",
      },
      {
        img: jamnalalBajajBalmandir,
        title: "Jamnalal Bajaj Balmandir",
      },
    ],
  },
  {
    title: "Language, Art & Culture",
    initiatives: [
      {
        img: shikshaMandal,
        title: "Shiksha Mandal",
      },
      {
        img: instituteOfGandhianStudies,
        title: "Institute of Gandhian\n" + "Studies",
      },
      {
        img: mahilaAshram,
        title: "Mahila Ashram",
      },
      {
        img: jamnalalBajajBalmandir,
        title: "Jamnalal Bajaj Balmandir",
      },
    ],
  },
  {
    title: "Healthcare",
    initiatives: [
      {
        img: shikshaMandal,
        title: "Shiksha Mandal",
      },
      {
        img: instituteOfGandhianStudies,
        title: "Institute of Gandhian\n" + "Studies",
      },
      {
        img: mahilaAshram,
        title: "Mahila Ashram",
      },
      {
        img: jamnalalBajajBalmandir,
        title: "Jamnalal Bajaj Balmandir",
      },
    ],
  },
];
