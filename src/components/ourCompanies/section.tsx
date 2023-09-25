import SectionWrapper from "@/commonComponents/section-wrapper";
import React from "react";
import Image from "next/image";
import BajajLogo from "./images/BajajLogo.png";
import { Box, Typography } from "@mui/material";
import { helvetica } from "@/app/font";

// Issue to fix is the scrolling x thing ... the width and height off scrolling bar

interface NameList {
  names: string[];
}

const namesData: NameList = {
  names: [
    "What's News",
    "Programs & Initiatives",
    "Stories",
    "Sustainability",
    "Case Studies",
    "Recognition",
    "Volunteering Opportunities",
    "Contact Us",
  ],
};
const Section = () => {
  return (
    <SectionWrapper
      sx={{
        backgroundColor: "#ffff",
        overflowX: "auto",
        overflowY: "hidden",
        scrollbarWidth: "thin",
        width: "100%",
        height: "84px",
        scrollBarWidth: "thin",
        "&::-webkit-scrollbar": {
          width: "2px",
          height: "0px", // Set the width of the scrollbar
        },
        "&::-webkit-scrollbar-track": {
          background: "transparent", // Set the background color of the track
        },
        "&::-webkit-scrollbar-thumb": {
          background: "blue", // Set the color of the thumb
          borderRadius: "2px", // Add rounded corners to the thumb
        },
        "&::-webkit-scrollbar-button": {
          display: "none", // Hide the scrollbar buttons
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "#555", // Change the color on hover
        },
      }}
    >
      <Box sx={{ display: "flex", gap: { lg: "32px", xs: "24px" } }}>
        <Image src={BajajLogo} width={125.33} height={32} alt="section-logo" />
        {namesData.names.map((name, index) => (
          <Typography
            key={index}
            variant="body1"
            sx={{
              color: "var(--primary-grey, #575756)",
              fontFamily: helvetica,
              fontSize: { xs: "16px", lg: "18px" },
              fontWeight: "400",
              display: "flex",
              gap: { lg: "32px", xs: "24px" },
              lineHeight: " 128%",
              height: "22px",
              width: "96px",
              opacity: "0.6",
              transition: "color 0.2s ease",
              "&:hover": {
                color: "blue",
                fontWeight: "bold",
                borderBottom: "1px soild blue",
              },
              cursor: "pointer",
            }}
          >
            {name}
          </Typography>
        ))}
      </Box>
    </SectionWrapper>
  );
};

export default Section;
