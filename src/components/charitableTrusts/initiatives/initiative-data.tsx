"use client";
import SectionWrapper, { basePy } from "@cc/section-wrapper";
import { StaticImageData } from "next/image";
import Link, { LinkProps } from "next/link";
import { Typography } from "@mui/material";
import { MaterialImage } from "@cc/material-components";
import { H6_2 } from "@theme/components/typography.fontvariant";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import gramVikas from "./images/initiatives/gram-vikas.jpg";
import centreOfScienceForVillages from "./images/initiatives/centre-of-science-for-villages.jpg";
import integratedRuralDevelopment from "./images/initiatives/integrated-rural-development.jpg";

const InitiativeData = () => {
  return (
    <SectionWrapper
      color={"primary.main"}
      pt={{ xs: 3, md: 3, xxl: 3 }}
      pb={basePy}
    >
      <Grid2 container columnSpacing={3.25} rowSpacing={5}>
        {initiativeData.map((item, idx) => {
          const { title, image, href } = item;
          return (
            <Grid2
              key={idx}
              component={Link}
              href={href}
              display={"flex"}
              flexDirection={"column"}
              rowGap={2}
              lg={4}
              sm={6}
              xs={12}
              sx={{
                textDecoration: "none",
              }}
            >
              <MaterialImage
                src={image}
                alt={title}
                sx={{
                  width: 1,
                  aspectRatio: "1/1",
                }}
              />
              <Typography component={"h6"} fontSize={H6_2}>
                {title}
              </Typography>
            </Grid2>
          );
        })}
      </Grid2>
    </SectionWrapper>
  );
};

export default InitiativeData;

const initiativeData: {
  title: string;
  image: string | StaticImageData;
  href: string | LinkProps["href"];
}[] = [
  {
    title: "Gram Vikas",
    image: gramVikas,
    href: "#",
  },
  {
    title: "Centre of Science for Villages",
    image: centreOfScienceForVillages,
    href: "#",
  },
  {
    title: "Integrated Rural Development",
    image: integratedRuralDevelopment,
    href: "#",
  },
];
