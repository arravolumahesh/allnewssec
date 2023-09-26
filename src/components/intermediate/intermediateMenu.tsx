"use client";
import SectionWrapper from "@/commonComponents/section-wrapper";
import { Box } from "@mui/material";
import { MotionLink } from "@cc/motion-components";

const IntermediateMenu = () => {
  return (
    <>
      <SectionWrapper
        SectionProps={{
          sx: {
            borderBottom: "1px solid var(--Stroke, #EAEAEA)",
            background: "#F8F8F8",
            position: "sticky",
            top: 0,
            zIndex: 9999,
          },
        }}
        sx={{ py: { xxl: 0, xs: 0, md: 0 } }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "flex-start", lg: "space-around" },
            overflow: "auto",
            gap: { xs: 5, lg: 0 },
          }}
        >
          {skillMenu.map((item, index) => {
            return (
              <MotionLink
                variant="menulink"
                color={index === 1 ? "secondary" : "primary"}
                href={item.url}
                key={index}
              >
                {item.title}
              </MotionLink>
            );
          })}
        </Box>
      </SectionWrapper>
    </>
  );
};

const skillMenu = [
  {
    title: "All",
    url: "",
  },
  {
    title: "Skill Development",
    url: "",
  },
  {
    title: "Education",
    url: "",
  },
  {
    title: "Women Empowerment",
    url: "",
  },
  {
    title: "Community",
    url: "",
  },
  {
    title: "Animal welfare",
    url: "",
  },
  {
    title: "Other Initiatives",
    url: "",
  },
];

export default IntermediateMenu;