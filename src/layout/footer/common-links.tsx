"use client";
import {
  Accordion,
  AccordionDetails,
  accordionDetailsClasses,
  AccordionSummary,
  accordionSummaryClasses,
  Divider,
  List,
  ListItem,
  Stack,
  Theme,
  useMediaQuery,
} from "@mui/material";
import MLink, { MLinkProps } from "@cc/m-link";
import { Overline, Subtitle1 } from "@theme/components/typography.fontvariant";
import { useState } from "react";
import { AddRounded, RemoveRounded } from "@mui/icons-material";

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
  const isSm = useMediaQuery<Theme>((theme) => theme.breakpoints.up("sm"));
  const [expanded, setExpanded] = useState<string | false>(false);

  return (
    <Stack
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
          <Accordion
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
              background: "transparent",
              flexGrow: 1,
              [theme.breakpoints.down("sm")]: {
                [`& .${accordionSummaryClasses.root}, .${accordionDetailsClasses.root}`]:
                  {
                    px: 0,
                  },
                "&:before": {
                  content: "none",
                },
              },
            })}
          >
            <AccordionSummary
              sx={{
                fontSize: Overline,
                fontWeight: 700,
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
              variant={"middle"}
              sx={{
                display: { xs: "none", sm: "block" },
                mb: 0.5,
                mt: 1.5,
              }}
            />
            <AccordionDetails
              sx={{
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
          </Accordion>
        );
      })}
    </Stack>
  );
};

export default CommonLinks;

const footerLinks: FooterLinksProps["data"] = [
  {
    title: "Our Companies",
    links: [
      {
        name: "Bajaj Auto Limited",
        url: "/bajaj-auto-limited",
      },
      {
        name: "Bajaj Finserv Limited",
        url: "/bajaj-finserv-limited",
      },
      {
        name: "Bajaj Electricals Limited",
        url: "/bajaj-electricals-limited",
      },
      {
        name: "Mukand Limited",
        url: "/mukand-limited",
      },
    ],
  },
  {
    title: "Charitable Trusts",
    links: [
      {
        name: "Jamnalal Bajaj Limited",
        url: "/jamnalal-bajaj-trust",
      },
      {
        name: "Jamnalal Bajaj Sewa Trust",
        url: "/jamnalal-bajaj-sewa-trust",
      },
      {
        name: "Hamaara Sapna",
        url: "/hamaara-sapna",
      },
    ],
  },
  {
    title: "About Us",
    links: [
      {
        name: "About Bajaj Beyond",
        url: "/about-bajaj-beyond",
      },
      {
        name: "Story Of Bajaj",
        url: "/story-of-bajaj",
      },
      {
        name: "Leadership",
        url: "/leadership",
      },
      {
        name: "Gallery",
        url: "/gallery",
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
        name: "Press Releases",
        url: "/press-releases",
      },
      {
        name: "Press Kit",
        url: "/press-kit",
      },
    ],
  },
];
