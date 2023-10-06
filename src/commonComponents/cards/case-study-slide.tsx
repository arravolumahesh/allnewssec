import { Theme, useMediaQuery } from "@mui/material";
import { StaticImageData } from "next/image";
import {
  MotionImage,
  MotionStack,
  MotionTypography,
} from "../motion-components";
import { H6_1, H6_2 } from "@/styles/theme/components/typography.fontvariant";
import {
  bottomToToptextStagger,
  bottomToToptextStaggerChildren,
} from "../animations";
import Link from "next/link";
import { ArrowForwardIos } from "@mui/icons-material";

export interface CaseStudySlideProps {
  img: StaticImageData | string;
  tag: string;
  title: string;
  subTitle: string;
  href: string;
}

export const CaseStudySlide = (props: CaseStudySlideProps) => {
  const { img, tag, title, subTitle, href } = props;
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  return (
    <MotionStack
      sx={{
        cursor: "pointer",
        "&:after": {
          display: isMobile ? "none" : "flex",
          opacity: 0,
          content: '"VIEW CASE STUDY"',
          fontSize: H6_2,
          color: "white",
          width: 1,
          height: 310,
          position: "absolute",
          top: 0,
          left: 0,
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%)",
          alignItems: "center",
          justifyContent: "center",
          transition: "all .3s",
        },
        "&:hover": {
          "&:after": {
            opacity: 1,
          },
        },
      }}
      rowGap={2}
      variants={bottomToToptextStagger(0.4)}
      initial={"initial"}
      whileInView={"animate"}
      viewport={{ once: true }}
    >
      <MotionImage
        src={img}
        alt='childerns'
        sx={{
          position: "relative",
          width: { xs: 310, md: 643 },
          height: { xs: 240, md: 310 },
          objectFit: "cover",
        }}
        variants={bottomToToptextStaggerChildren}
      />
      <MotionTypography
        variant={"caption"}
        color={"grey.A400"}
        p={1.3}
        bgcolor={"#DADADA"}
        width={"max-content"}
        variants={bottomToToptextStaggerChildren}
      >
        {tag}
      </MotionTypography>
      <MotionStack rowGap={2} variants={bottomToToptextStaggerChildren}>
        <MotionTypography variant='body1' fontSize={H6_1}>
          {title}
        </MotionTypography>
        <MotionTypography variant='body1'>{subTitle}</MotionTypography>
        {isMobile && (
          <Link
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "18px",
              textDecoration: "none",
            }}
            href={href}
          >
            View Case Study{" "}
            <ArrowForwardIos sx={{ ml: "8px" }} fontSize='small' />
          </Link>
        )}
      </MotionStack>
    </MotionStack>
  );
};
