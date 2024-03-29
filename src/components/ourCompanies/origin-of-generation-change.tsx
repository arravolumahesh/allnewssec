import SectionWrapper from "@cc/section-wrapper";
import {MotionImage, MotionTypography} from "@cc/motion-components";
import originOfGenerational from "./images/origin-of-generational-change.jpg";
import {H6_2} from "@theme/components/typography.fontvariant";
import {Stack} from "@mui/material";
import AnimatedButton from "@cc/animated-button";


// Todo: Similar with Hamaara-sapna Beginning of an change
const OriginOfGenerationChange = () => {
  return (
    <SectionWrapper
      color={"primary.main"}
      SectionHeaderProps={{
        title: "The Origin of generational Change",
      }}
      direction={{ xs: "column", md_lg: "row" }}
      columnGap={10}
      rowGap={3}
      justifyContent={"space-between"}
      alignItems={"center"}
      SectionProps={{
        id: "about-us",
      }}
    >
      <MotionImage
        src={originOfGenerational}
        alt='The Origin of generational Change'
        sx={{
          width: { xs: "100%", md_lg: "50%" },
          maxWidth: 559,
          aspectRatio: "4/2.556",
          objectFit: "cover",
        }}
      />
      <Stack
        rowGap={{ xs: 4, md: 5 }}
        width={{ xs: "100%", md_lg: "50%" }}
        maxWidth={612}
      >
        <MotionTypography
          component={"p"}
          fontSize={H6_2}
          textAlign={{ xs: "center", md_lg: "left" }}
        >
          Founded in 1977 in memory of Jamnalal Bajaj—a philanthropist, social
          reformer, Indian freedom fighter, and Mahatma Gandhi&apos;s
          confidant—the Jamnalal Bajaj Foundation echoes his ideals, and
          advances the Gandhian constructive pursuits he championed.
        </MotionTypography>
        <AnimatedButton
          variant={"contained"}
          color={"primary"}
        >
          View Our Legacy
        </AnimatedButton>
      </Stack>
    </SectionWrapper>
  );
};

export default OriginOfGenerationChange;
