import SectionWrapper from "@cc/section-wrapper";
import { Body1 } from "@theme/components/typography.fontvariant";

const HowWeHelp = () => {
  return (
    <SectionWrapper
      color={"secondary.main"}
      SectionProps={{
        sx: {
          background: (theme) => theme.palette.gradient.darkToLight,
        },
      }}
      SectionHeaderProps={{
        title: "How We Help",
        TitleTypographyProps: {
          variant: "h3",
        },
        description:
          "Discover our array of mindfully curated initiatives that shape a brighter future.",
        DescriptionTypographyProps: {
          fontSize: Body1,
        },
      }}
    ></SectionWrapper>
  );
};

export default HowWeHelp;
