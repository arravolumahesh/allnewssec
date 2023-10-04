"use client";
import { StaticImageData } from "next/image";
import { MotionStack, MotionStackProps } from "@cc/motion-components";
import { sxArrayUtil } from "@util/sx-helpers";
import { Stack, Typography } from "@mui/material";

export interface InitiativeHeroCardProps
  extends Omit<MotionStackProps, "children"> {
  data: {
    title: string;
    designation: string;
    description: string;
    image: string | StaticImageData;
  };
  isActive?: boolean;
}

const InitiativeHeroCard = (props: InitiativeHeroCardProps) => {
  const { data, isActive, ...restMotionStackProps } = props;
  const { title, designation, description, image } = data;
  const { sx, ...restProps } = restMotionStackProps;
  return (
    <MotionStack
      key={title}
      sx={[
        {
          background: `url(${typeof image === "string" ? image : image.src})`,
          backgroundSize: "cover",
          width: {
            xs: 160,
            md: 179.5,
            xl: 199,
          },
          height: "fit-content",
          flexShrink: 0,
          aspectRatio: "1/1",
        },
        ...sxArrayUtil(sx),
      ]}
      {...restProps}
    >
      {isActive && (
        <Stack
          mt={"auto"}
          sx={{
            p: 2,
            mt: "auto",
            background: (theme) => theme.palette.gradient.transparentToDark_V2,
          }}
        >
          <Typography variant={"h6"} mb={0.5}>
            {title}
          </Typography>
          <Typography variant={"subtitle1"} component={"span"} mb={1}>
            {designation}
          </Typography>
          <Typography variant={"subtitle2"} component={"p"}>
            {description}
          </Typography>
        </Stack>
      )}
    </MotionStack>
  );
};

export default InitiativeHeroCard;
