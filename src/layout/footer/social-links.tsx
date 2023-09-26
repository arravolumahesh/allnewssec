import { Stack } from "@mui/material";
import Logo from "@cc/logo";
import { MotionStack, MotionTypography } from "@cc/motion-components";
import { ReactNode } from "react";
import { MailRounded, PhoneRounded } from "@mui/icons-material";
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
    >
      <Logo
        SvgIconProps={{
          sx: {
            width: { xs: 107, md: 136, xxl: 166 },
            height: { xs: 64, md: 81, xxl: 99 },
          },
        }}
      />
      <MotionStack
        direction={{
          xs: "column",
          sm: "row",
        }}
        justifyContent={"space-between"}
        width={0.4}
      >
        {contactInfo.map((item, index) => {
          const { icon, text } = item;
          return (
            <MotionTypography
              key={index}
              display={"flex"}
              alignItems={"center"}
              variant={"subtitle1"}
              columnGap={1}
            >
              {icon} {text}
            </MotionTypography>
          );
        })}
      </MotionStack>
      <MotionStack direction={"row"} spacing={3}>
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
                width: { xs: 32, md: 36, xxl: 40 },
                height: { xs: 32, md: 36, xxl: 40 },
              }}
            />
          );
        })}
      </MotionStack>
    </Stack>
  );
};

export default SocialLinks;

const contactInfo: {
  icon: ReactNode;
  text: string;
}[] = [
  {
    icon: <MailRounded />,
    text: "info@bajajbeyond.com",
  },
  {
    icon: <PhoneRounded />,
    text: "1800 00 1234",
  },
];
