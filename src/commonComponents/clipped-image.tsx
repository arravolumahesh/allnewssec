import { styled } from "@mui/material";
import { MotionImage, MotionImageProps } from "@cc/motion-components";
import { sxArrayUtil } from "@util/sx-helpers";

export type ClippedImageProps = MotionImageProps & {
  clipPath?: string;
  aspectRatio?: number;
  width?: string | number;
  height?: string | number;
};

const ClippedImage = styled((props: ClippedImageProps) => {
  const { clipPath, aspectRatio, width, height, sx, ...rest } = props;
  return (
    <MotionImage
      sx={[
        {
          clipPath:
            clipPath || "polygon(0% 0%, 84% 0%, 100% 50%, 84% 100%, 0% 100%)",
          aspectRatio,
          width,
          height,
        },
        ...sxArrayUtil(sx),
      ]}
      {...rest}
    />
  );
})();

export default ClippedImage;

export const clipImagePath =
  "polygon(0% 0%, 84% 0%, 100% 50%, 84% 100%, 0% 100%)";
