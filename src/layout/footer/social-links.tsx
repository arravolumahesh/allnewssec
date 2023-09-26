import { Stack, Typography } from "@mui/material";
import Logo from "@cc/logo";
import {
  MotionStack,
  MotionTypography,
  MotionVariantProps,
} from "@cc/motion-components";
import {
  MailRounded,
  PhoneRounded,
  SvgIconComponent,
} from "@mui/icons-material";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  YouTubeIcon,
} from "@cc/social-icons";

const SocialLinks = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexWrap={"wrap"}
      rowGap={3}
      columnGap={3}
    >
      <Logo
        SvgIconProps={{
          sx: {
            width: { xs: 107, md: 136, xxl: 166 },
            height: { xs: 64, md: 81, xxl: 99 },
          },
        }}
        variants={footerChildrenMotionVariants}
      />
      <MotionStack
        direction={{
          xs: "column",
          sm: "row",
        }}
        columnGap={3}
        rowGap={2}
        justifyContent={"space-between"}
        width={{ sm: "fit-content", md: 0.4 }}
        variants={footerChildrenMotionVariants}
      >
        {contactInfo.map((item, index) => {
          const { icon: Icon, text } = item;
          return (
            <MotionTypography
              key={index}
              display={"flex"}
              alignItems={"center"}
              variant={"subtitle1"}
              columnGap={1}
              whiteSpace={"nowrap"}
            >
              <Icon fontSize={"small"} /> {text}
            </MotionTypography>
          );
        })}
      </MotionStack>
      <MotionStack
        variants={footerChildrenMotionVariants}
        sx={{
          width: { xs: 1, lg: "fit-content" },
          rowGap: 2,
        }}
      >
        <Typography
          display={{
            xs: "block",
            lg: "none",
          }}
        >
          Follow us on
        </Typography>
        <Stack direction={"row"} spacing={3}>
          {[
            FacebookIcon,
            TwitterIcon,
            YouTubeIcon,
            InstagramIcon,
            LinkedInIcon,
          ].map((SocialIcon, index) => {
            return (
              <SocialIcon
                key={index}
                variant={"outlined"}
                SvgIconProps={{
                  width: { xs: 32, md: 37, xxl: 40 },
                  height: { xs: 32, md: 37, xxl: 40 },
                }}
              />
            );
          })}
        </Stack>
      </MotionStack>
    </Stack>
  );
};

export default SocialLinks;

export const footerChildrenMotionVariants: MotionVariantProps = {
  initial: {
    opacity: 0,
    x: "80%",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const contactInfo: {
  icon: SvgIconComponent;
  text: string;
}[] = [
  {
    icon: MailRounded,
    text: "info@bajajbeyond.com",
  },
  {
    icon: PhoneRounded,
    text: "1800 00 1234",
  },
];
