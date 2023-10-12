import SectionWrapper from "@cc/section-wrapper";
import { MotionImage, MotionTypography } from "@cc/motion-components";
import beginningOfChange from "./images/beginning-of-change.jpg";
import { H6_2 } from "@theme/components/typography.fontvariant";

const BeginningOfChange = () => {
  return (
    <SectionWrapper
      color={"primary.main"}
      SectionHeaderProps={{
        title: "The Beginning of a Change",
      }}
      direction={{ xs: "column", md_lg: "row" }}
      columnGap={10}
      rowGap={3}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <MotionImage
        src={beginningOfChange}
        alt="The Beginning of a Change"
        sx={{
          width: { xs: "100%", md_lg: "50%" },
          maxWidth: 599,
          aspectRatio: "4/2.556",
        }}
      />
      <MotionTypography
        component={"p"}
        width={{ xs: "100%", md_lg: "50%" }}
        maxWidth={612}
        fontSize={H6_2}
        textAlign={{ xs: "center", md_lg: "left" }}
      >
        Driven by a passionate vision, Mrs. Minal Bajaj aimed to uplift the
        quality of life for slum women in South Mumbai. With unwavering familial
        support, this vision took concrete form in February 2012 as Hamaara
        Sapna, a pivotal initiative within the Jamnalal Bajaj Sewa Trust. This
        initiative was conceived and crafted to enact transformative change in
        the lives of marginalized women.
      </MotionTypography>
    </SectionWrapper>
  );
};

export default BeginningOfChange;
