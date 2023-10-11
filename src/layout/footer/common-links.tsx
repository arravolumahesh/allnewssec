"use client";
import {
  AccordionDetails,
  AccordionSummary,
  accordionSummaryClasses,
  Divider,
  List,
  ListItem,
  Theme,
  useMediaQuery,
} from "@mui/material";
import MLink, { MLinkProps } from "@cc/m-link";
import { Overline, Subtitle1 } from "@theme/components/typography.fontvariant";
import { useState } from "react";
import { AddRounded, RemoveRounded } from "@mui/icons-material";
import {
  MotionAccordion,
  MotionStack,
  MotionVariantProps,
} from "@cc/motion-components";

interface FooterLinksProps {
  data: {
    title: string;
    links: {
      name: string;
      url: MLinkProps["href"];
    }[];
  }[];
}

const CommonLinks = () => {
  const isSm = useMediaQuery<Theme>((theme) => theme.breakpoints.up("sm"), {
    defaultMatches: true,
  });
  const [expanded, setExpanded] = useState<string | false>(false);

  return (
    <MotionStack
      direction={{ xs: "column", sm: "row" }}
      justifyContent={{ sx: "flex-start", lg: "space-between" }}
      alignItems={"flex-start"}
      flexWrap={"wrap"}
      columnGap={{
        xs: 0,
        sm: 15,
        lg: 0,
      }}
    >
      {footerLinks.map((item, index) => {
        const { title, links } = item;
        return (
          <MotionAccordion
            key={`${title}-${index}`}
            expanded={isSm || expanded === title}
            disableGutters
            square
            elevation={0}
            onChange={() => {
              setExpanded((prev) => (prev === title ? false : title));
            }}
            sx={(theme) => ({
              width: { xs: 1, sm: 0.3, md: 0.3, lg: "fit-content" },
              minWidth: { xs: "unset", sm: 200, md: 250, lg: 200, xxl: 240 },
              maxWidth: { xs: "unset", sm: 200, md: 250, lg: 220, xxl: 250 },
              background: "transparent",
              flexGrow: { xs: 1, lg: 0 },
              flexShrink: { xs: 1, lg: 0 },
              [theme.breakpoints.down("sm")]: {
                "&:before": {
                  content: "none",
                },
              },
            })}
            variants={footerChildrenMotionVariants}
          >
            <AccordionSummary
              sx={{
                fontSize: Overline,
                fontWeight: 700,
                px: 0,
                [`& .${accordionSummaryClasses.expandIconWrapper}`]: {
                  color: "inherit",
                },
              }}
              expandIcon={
                isSm ? undefined : expanded === title ? (
                  <RemoveRounded />
                ) : (
                  <AddRounded />
                )
              }
            >
              {title}
            </AccordionSummary>
            <Divider
              sx={{
                display: { xs: "none", sm: "block" },
                mb: 0.5,
                mt: 1.5,
              }}
            />
            <AccordionDetails
              sx={{
                px: 0,
                pt: {
                  xs: 0,
                  sm: 1,
                },
              }}
            >
              <List disablePadding>
                {links.map((link, index) => {
                  const { name, url } = link;
                  return (
                    <ListItem
                      key={`${name}-${index}`}
                      disableGutters
                      sx={{
                        py: { xs: 1, sm: 1.5 },
                      }}
                    >
                      <MLink
                        href={url}
                        variant={"text"}
                        disableRipple
                        sx={{
                          fontSize: Subtitle1,
                          color: "inherit",
                        }}
                      >
                        {name}
                      </MLink>
                    </ListItem>
                  );
                })}
              </List>
            </AccordionDetails>
          </MotionAccordion>
        );
      })}
    </MotionStack>
  );
};

export default CommonLinks;

export const footerChildrenMotionVariants: MotionVariantProps = {
  initial: {
    opacity: 0,
    y: "80%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const footerLinks: FooterLinksProps["data"] = [
  {
    title: "Our Companies",
    links: [
      {
        name: "Bajaj Auto Limited",
        url: "/our-companies/bajaj-auto-limited",
      },
      {
        name: "Bajaj Electricals Limited",
        url: "/our-companies/bajaj-electricals-limited",
      },
      {
        name: "Bajaj Finserv Limited",
        url: "/our-companies/bajaj-finserv-limited",
      },
      {
        name: "Mukand Limited",
        url: "/our-companies/mukand-limited",
      },
    ],
  },
  {
    title: "Charitable Trusts",
    links: [
      {
        name: "Jamnalal Bajaj Foundation",
        url: "/charitable-trusts/jamnalal-bajaj-foundation",
      },
      {
        name: "Jamnalal Bajaj Sewa Trust",
        url: "/charitable-trusts/jamnalal-bajaj-sewa-trust",
      },
      {
        name: "Hamaara Sapna",
        url: "/charitable-trusts/hamaara-sapna",
      },
    ],
  },
  {
    title: "About Us",
    links: [
      {
        name: "About Bajaj Beyond",
        url: "/about-us/#about-bajaj-beyond",
      },
      {
        name: "Story Of Bajaj",
        url: "/about-us/#story-of-bajaj",
      },
      {
        name: "Leadership",
        url: "/about-us/#leadership",
      },
      {
        name: "Gallery",
        url: "/about-us/#gallery",
      },
    ],
  },
  {
    title: "News & Media",
    links: [
      {
        name: "News Coverage",
        url: "/news-coverage",
      },
      {
        name: "Blogs & Articles",
        url: "/blogs-and-articles",
      },
      {
        name: "Press Release",
        url: "/press-release",
      },
      {
        name: "Press Kit",
        url: "/press-kit",
      },
    ],
  },
];
