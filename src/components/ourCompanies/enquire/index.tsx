import SectionWrapper from "@cc/section-wrapper";
import React from "react";
import { StaticImageData } from "next/image";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ArrowImage from "@cc/arrow-image";
import { Typography } from "@mui/material";
import AnimatedButton from "@cc/animated-button";

import raiseFunds from "./images/raise-funds.jpg";
import partnerWithUs from "./images/partner-with-us.jpg";

const Enquire = () => {
  return (
    <SectionWrapper
      SectionProps={{
        bgcolor: "common.white",
        id: "contact-us",
      }}
      color={"primary.main"}
      direction={{ xs: "column", xl: "row" }}
      justifyContent={"center"}
      alignItems={"center"}
      columnGap={6}
      rowGap={10}
    >
      {data.map((item, index) => {
        const { image, title, description, btnText } = item;
        return (
          <Grid2
            key={`${title}-${index}`}
            display={"grid"}
            gridTemplateAreas={{
              xs: `'title' 'image' 'description' 'button'`,
              xl: `'image title' 'image description' 'image button'`,
            }}
            rowGap={{ xs: 2.5, xl: 0 }}
            columnGap={4}
            alignItems={"center"}
            width={1}
            maxWidth={{ xs: 400, xl: 545 }}
          >
            <Grid2
              gridArea={"image"}
              height={"fit-content"}
              display={"flex"}
              justifyContent={{ xs: "center", xl: "flex-start" }}
            >
              <ArrowImage
                src={image}
                alt={title}
                width={196}
                height={228}
                sx={{ minWidth: 217 }}
              />
            </Grid2>
            <Grid2
              gridArea={"title"}
              height={"fit-content"}
              display={"flex"}
              justifyContent={{ xs: "center", xl: "flex-start" }}
            >
              <Typography
                variant={"h5"}
                textAlign={{ xs: "center", xl: "left" }}
              >
                {title}
              </Typography>
            </Grid2>
            <Grid2
              gridArea={"description"}
              height={"fit-content"}
              display={"flex"}
              justifyContent={{ xs: "center", xl: "flex-start" }}
            >
              <Typography textAlign={{ xs: "center", xl: "left" }}>
                {description}
              </Typography>
            </Grid2>
            <Grid2
              gridArea={"button"}
              height={"fit-content"}
              display={"flex"}
              justifyContent={{ xs: "center", xl: "flex-start" }}
            >
              <AnimatedButton href={"#"}>{btnText}</AnimatedButton>
            </Grid2>
          </Grid2>
        );
      })}
    </SectionWrapper>
  );
};

export default Enquire;

const data: {
  title: string;
  description: string;
  image: string | StaticImageData;
  btnText: string;
}[] = [
  {
    title: "Raise Funds",
    description:
      "We can help with spreading the word and collecting funds for your cause.",
    image: raiseFunds,
    btnText: "Enquire About Fundraising",
  },
  {
    title: "Partner with us",
    description: "Our team will join hands with you in your initiatives.",
    image: partnerWithUs,
    btnText: "Enquire About Partnerships",
  },
];
