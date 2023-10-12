"use client";
import SectionWrapper from "@cc/section-wrapper";
import { Body1, H6_3 } from "@theme/components/typography.fontvariant";
import { Stack, Typography } from "@mui/material";
import hwh1 from "./images/how-we-help/how-we-help-1.jpg";
import hwh2 from "./images/how-we-help/how-we-help-2.jpg";
import hwh3 from "./images/how-we-help/how-we-help-3.jpg";
import hwh4 from "./images/how-we-help/how-we-help-4.jpg";
import { MaterialImage } from "@cc/material-components";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

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
    >
      <Grid2 container rowSpacing={5} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
        {howWeHelpData.map((data, index) => {
          const { image, tag, description } = data;
          return (
            <Grid2 key={index} component={Stack} rowGap={2} md={6}>
              <MaterialImage
                src={image}
                width={644}
                height={310}
                sx={{
                  width: "100%",
                }}
                alt={tag}
              />
              <Typography
                variant={"caption"}
                sx={{
                  bgcolor: "secondary.400",
                  width: "fit-content",
                  color: "grey.600",
                  p: 0.75,
                }}
              >
                {tag}
              </Typography>
              <Typography fontSize={H6_3}>{description}</Typography>
            </Grid2>
          );
        })}
      </Grid2>
    </SectionWrapper>
  );
};

export default HowWeHelp;

const howWeHelpData = [
  {
    image: hwh1,
    tag: "4-Tier plan",
    description:
      "Providing training and opportunities in tailoring in order to ensure self-sufficient and independent women.",
  },
  {
    image: hwh2,
    tag: "Holistic Education Plan",
    description:
      "Providing opportunities to women and enable them to emerge more confident and self-assured.",
  },
  {
    image: hwh3,
    tag: "Educating Women",
    description:
      "Using education to enhance the confidence of women and enabling them to impart knowledge onto others.",
  },
  {
    image: hwh4,
    tag: "Broadening  Horizons",
    description:
      "Introducing women to various thought leaders and people from different walks of life to inspire and motivate them.",
  },
];
