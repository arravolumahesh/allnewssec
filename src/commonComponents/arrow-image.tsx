"use client";
import React from "react";
import { sxArrayUtil } from "@/utils/sx-helpers";
import { MaterialImage, MaterialImageProps } from "./material-components";
import { MotionBox, MotionBoxProps } from "./motion-components";
import ArrowTransparent from "@cc/arrow-transparent";

export type ArrowImageProps = MaterialImageProps & {
  clipPath?: string;
  aspectRatio?: number;
  width: string | number;
  height: string | number;
  ContainerProps?: MotionBoxProps;
};

const ArrowImage = (props: ArrowImageProps) => {
  const { clipPath, aspectRatio, width, height, sx, ContainerProps, ...rest } =
    props;
  return (
    <MotionBox
      position={"relative"}
      overflow={"hidden"}
      sx={[
        {
          clipPath:
            clipPath ||
            "polygon(70% 0%, 100% 45%, 70% 100%, 0% 100%, 30% 45%, 0% 0%)",
          aspectRatio,
          width,
          height,
        },
        ...sxArrayUtil(sx),
      ]}
      {...ContainerProps}
    >
      <ArrowTransparent
        SVGProps={{
          style: {
            position: "absolute",
            top: "-12%",
            left: "-12%",
            zIndex: 1,
            width: "60%",
            height: "auto",
            aspectRatio: 0.4,
          },
        }}
      />
      <MaterialImage sx={{ objectFit: "cover" }} {...rest} fill />
    </MotionBox>
  );
};

export default ArrowImage;
