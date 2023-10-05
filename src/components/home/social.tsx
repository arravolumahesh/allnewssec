"use client";
import SocialCard from "@/commonComponents/cards/social";
import {
  MotionBox,
  MotionBoxProps,
  MotionCardProps,
  MotionGrid,
  MotionGridProps,
  MotionImage,
  MotionStack,
  MotionTypography,
  MotionTypographyProps,
  MotionVariantProps,
} from "@/commonComponents/motion-components";
import SectionWrapper from "@/commonComponents/section-wrapper";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import {
  Box,
  Stack,
  styled,
  SxProps,
  Theme,
  useMediaQuery,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import fb from "./images/fb.svg";
import twitter from "./images/twitter.svg";
import yt from "./images/yt.svg";
import insta from "./images/insta.svg";
import linkd from "./images/linkd.svg";
import ArrowGradient from "@cc/arrow-gradient";
import { H6_2 } from "@/styles/theme/components/typography.fontvariant";
import { motion } from "framer-motion";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  YouTubeIcon,
} from "@/commonComponents/social-icons";
import { MaterialImage } from "@/commonComponents/material-components";
import { bottomTextStagger, iconStagger, iconStaggerChildren, textStaggerChildren } from "@/commonComponents/animations";

const HoverGrid = styled((props: MotionGridProps) => (
  <MotionGrid
    initial={{
      scale: 1,
    }}
    whileHover={{
      scale: 1.1,
      zIndex: 1,
    }}
    {...props}
  />
))({});

const Social = () => {
  const matches = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("sm_md")
  );
  return (
    <SectionWrapper
      py={{ xs: 7, md: 12 }}
      SectionProps={{
        bgcolor: "primary.500",
      }}
      color={"common.white"}
    >
      {matches && (
        <Stack
          // display={{ xs: "block", sm_md: "none" }}
          mb={"38px"}
          position={"relative"}
        >
          <MotionTypography
            variant='h1'
            component={"p"}
            width={"min-content"}
            {...textTransition}
          >
            JOIN THE CONVERSATION
          </MotionTypography>
          <ArrowGradient
            sx={{
              position: "absolute",
              height: 172,
              right: "-80px",
              bottom: "-68px",
            }}
            {...arrowTransition}
          />
        </Stack>
      )}
      <Grid2
        container
        maxWidth={867}
        m={{ xs: 0, sm_md: "auto" }}
        rowGap={{ xs: 2, sm_md: 0 }}
        columnSpacing={{ xs: 2, sm_md: 0 }}
      >
        <HoverGrid xs={6} sm_md={4}>
          <SocialCard
            img={
              "https://s3-alpha-sig.figma.com/img/fc1b/dfad/c4c32a16e73b950d463e2853f59a3c99?Expires=1696204800&Signature=D8MXXMWuSFR9OCqGAj1QCFA0UZVdYFV3HhNSPMEky9FhXNz5B6pzJGHbFlPHR0~U-~~FL2Oq8rck2CkGpsXBwTR0kqODKbiX2V0Sxcg37HDX2iGHiid6VkFKvG4k6L5ecOrgpZQWM9jvSnifCF2vx75GpddF2Dj6nFktZAHbHpmEg0QyiMM2uYgECT1RO1VMKqqHw4qgkqXKsYbzVcGOiqyT0he92U6qATaeZitMV-O4UQwXBeBz8uAosTi6n6B5bSutyf6aLeTQtlNh7Y~4snMgAW1Tm0woteIFUVOANIioooOfCdRUGQ-E~KmRuf0FvUpR~Qt6NOBrVj3pVMwCbQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            }
            Icon={Facebook}
            sx={{
              backgroundPosition: "right top",
              backgroundSize: "270%",
            }}
            {...cardTransitionDown(0)}
          />
        </HoverGrid>
        {!matches && (
          <Grid2
            sm_md={8}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            position={"relative"}
          >
            <MotionTypography
              variant='h1'
              component={"p"}
              width={"min-content"}
              {...textTransition}
            >
              JOIN THE CONVERSATION
            </MotionTypography>
            <ArrowGradient
              sx={{
                position: "absolute",
                height: { xs: 300, lg: 480 },
                right: { xs: "-10vw", lg: "-14vw" },
                bottom: { xs: "-50px", lg: "-140px" },
              }}
              {...arrowTransition}
            />
          </Grid2>
        )}
        {!matches && (
          <HoverGrid xs={4} overflow='hidden'>
            <SocialCard
              img={
                "https://s3-alpha-sig.figma.com/img/91a1/a459/2d9ef5167cdce4c6779f48b8cd85fde4?Expires=1696204800&Signature=eH9Gawh3waJ5Yl5NdZ1~twC6UgNXBolGR482h1d1uidvc7j~bJk6TBTK8wPJW5bcVQn4iC1rtgl7pgZAyC~v4NuIY1H5SgYsTxsXuMqPUSHUYf5IBmvmL3W-2qmjzqMzcj9IXINOXQuN~KW7JfBHhrdv3Ou2EUVw6KwzC9daO6QfLE9qdpboSQWmwsDQ23Li9vt6XYtLsKuMG8YwkLeCbd3-vaiExEf2CgQYLeCvfEsVZLdRjumVfGo5S-1ZkMeOm7ngVy7MdAw9HHUOxOT~CiBYcFtCUGo1-nvO6G2vu9a1YsqqPQA157kE1vEz4gjUBZniLRV1sdnVDkmt4MUZbg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              }
              Icon={Twitter}
              {...cardTransitionDown(0.5)}
            />
          </HoverGrid>
        )}
        <HoverGrid xs={6} sm_md={4} overflow='hidden'>
          <SocialCard
            img={
              "https://s3-alpha-sig.figma.com/img/7775/10fe/6f54cc5ebb1bb1075ce3fe6b9245e704?Expires=1696204800&Signature=f2ZClAxBwyxAgJIBu2dP6w~mfzAH3U46Xb6moEIlQKfl4F~GH3ONAg3TdzBFha~i99VqIUMkYfPiezLERLGj24f14vIGQ3UDFWrsDOBcsRk0tRpr7ZL4Syk~ZbH6ND94OazhwkrlyTyW8vilRyx-qBxkZVqjGzt0UDdsl9F~CbS5mGzu05FMN-bPPROeupaD66fdtSb2eQkTAFLmAnESNNbbMgTj2HS3RXTCmJQWT8fl5CZ10fIFM-QbzDdtUxb~tMypfEqKOvUoLW9p0Koupa70zKM~DHNY3mql8aBmAuEb158j1yVcwZa3Fc8j1CnZZ2o~YmEDjyXAHqVlQppcyg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            }
            Icon={YouTube}
            {...cardTransitionRight(1)}
          />
        </HoverGrid>
        <HoverGrid xs={6} sm_md={4} overflow='hidden'>
          <SocialCard
            img={
              "https://s3-alpha-sig.figma.com/img/02cb/58c2/aeaa50aeb369b72d106951eb60aa2799?Expires=1696204800&Signature=fYyAz3RkrMFQJWyM5NHVRSKaJoJCfOUNgJiOrunEqwrN23LtPtK5ls4xY14mcGiV49wDoLpL3FjN8jDpf7plNlZfvTIexj0HMR5wuT4irkkC4PNWTewLriw~nTh56AbgzOa2CbKmkSj6eWo51rvA~YhpFWzAHGVlvkCFb9c6rAM5kvhh9yr8skfPF-q5EPSJl-a8FJa7pq1T1VMAogZkXNtDyfrSgQtO5ANudbSUKRRcX-0xg7vbyStrM86GCOk17gUeYSDCQbS3YSGwH6f-r4L9Fe77cMc4WyUF1j~UaXroB55WJURTDVnLwbJY8QQhIt4vHuuf0omFu-77cQR5qg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            }
            Icon={Instagram}
            sx={{
              backgroundPosition: "left",
            }}
            {...cardTransitionRight(1.5)}
          />
        </HoverGrid>
        {!matches && (
          <Grid2
            sm_md={8}
            //display={{ xs: "none", sm_md: "block" }}
          >
            <Stack
              maxWidth={450}
              height={1}
              justifyContent={"center"}
              component={motion.div}
              variants={bottomTextStagger}
              initial={"initial"}
              whileInView={"animate"}
              viewport={{ once: true }}
            >
              <Stack
                rowGap={3}
                component={motion.div}
                variants={textStaggerChildren}
              >
                <MotionTypography fontSize={H6_2}>
                  Stay informed about our impactful initiatives by following us on our social media platforms.
                </MotionTypography>
                <MotionTypography fontSize={H6_2} fontWeight={700}>
                  @bajajbeyond
                </MotionTypography>
              </Stack>
              <Stack
                direction={"row"}
                gap={4}
                mt={2}
                component={motion.div}
                variants={iconStagger}
              >
                {[
                  FacebookIcon,
                  TwitterIcon,
                  YouTubeIcon,
                  InstagramIcon,
                  LinkedInIcon,
                ].map((Icon, idx) => (
                  <Icon
                    key={idx}
                    variant='contained'
                    SvgIconProps={{
                      sx: {
                        bgcolor: "common.white",
                        width: 48,
                        height: 48,
                      },
                    }}
                    variants={iconStaggerChildren}
                  />
                ))}
              </Stack>
            </Stack>
          </Grid2>
        )}
        <HoverGrid xs={6} sm_md={4} overflow='hidden'>
          <SocialCard
            img={
              "https://s3-alpha-sig.figma.com/img/2f89/8169/64d012ae3609a395c2a555f5595cea8c?Expires=1696204800&Signature=cvCmCrcx17~2RocD7bj7uPPstibXX3SzmaZj5ffcYAao1N3EXl9ozxqxhOxCJ-vaWaq5zpD~W7OwfOL57max71ZLgGPcZdhw3Z8CKNxmttkbWuSRrEyEezIbhZbYKN2Sgq5BQSwCWeIe~I1t8vOJ5GBNBHZRlmG-DSDZvIWM-7FwQVb9mbPAUC-gyaAD4FhwVSWT~e6zoajoBeLCz1ibGqClN2KZQR-2KpTOTDTki7b-qoQpFZden1OF7b0HyulL-do9PU5XKtqONxAZF9wNBFDlcVDy~Y~3AiGLwYwdCX0W-mMjlGvZNBL9ocfJria9ThyqEdf8AdUC0kNztfbTYg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            }
            Icon={LinkedIn}
            {...cardTransitionDown(2)}
          />
        </HoverGrid>
      </Grid2>
      {matches && (
        <MotionStack
          height={1}
          justifyContent={"center"}
          mt={3}
          variants={bottomTextStagger}
          initial={"initial"}
          whileInView={"animate"}
          viewport={{ once: true }}
        >
          <MotionStack
            rowGap={3}
            variants={textStaggerChildren}
          >
            <MotionTypography fontSize={H6_2}>
              Stay informed about our impactful initiatives by following us on our social media platforms.
            </MotionTypography>
            <MotionTypography fontSize={H6_2} fontWeight={700}>
              @bajajbeyond
            </MotionTypography>
          </MotionStack>
          <MotionStack
            direction={"row"}
            gap={2}
            mt={2}
            variants={iconStagger}
          >
            {[
              FacebookIcon,
              TwitterIcon,
              YouTubeIcon,
              InstagramIcon,
              LinkedInIcon,
            ].map((Icon, idx) => (
              <Icon
                key={idx}
                variant='contained'
                SvgIconProps={{
                  sx: {
                    bgcolor: "common.white",
                    width: 32,
                    height: 32,
                  },
                }}
                variants={iconStaggerChildren}
              />
            ))}
          </MotionStack>
        </MotionStack>
      )}
    </SectionWrapper>
  );
};

export default Social;

const gridHover: SxProps = {
  "&:hover": {
    transform: "scale(1.1)",
    transition: "all 0.3s",
    zIndex: 1,
  },
};

const cardTransitionDown = (delay: number): MotionCardProps => {
  return {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.4,
      },
    },
    viewport: {
      once: true,
    },
  };
};
const cardTransitionRight = (delay: number): MotionCardProps => {
  return {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.4,
      },
    },
    viewport: {
      once: true,
    },
  };
};

const textTransition: MotionTypographyProps = {
  initial: {
    y: 145,
    opacity: 0,
  },
  whileInView: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 0.4,
    },
  },
  viewport: {
    once: true,
  },
};

const arrowTransition: MotionBoxProps = {
  initial: {
    x: "-100%",
    opacity: 0,
  },
  whileInView: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 0.4,
    },
  },
  viewport: {
    once: true,
  },
};
