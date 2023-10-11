import { StaticImageData } from "next/image";
import {
  MotionBox,
  MotionBoxProps,
  MotionStack,
  MotionStackProps,
  MotionTypography,
  MotionTypographyProps,
} from "../motion-components";
import { MaterialImage, MaterialImageProps } from "../material-components";
import { alpha } from "@mui/material";

interface InfoSlidesProps {
  img: StaticImageData | string;
  ImageProps?: Partial<MaterialImageProps>;
  title?: string;
  description: string;
  CardWrapperProps?: MotionStackProps;
  ContentWrapperProps?: MotionStackProps;
  TagProps?: MotionBoxProps;
  DescriptionTypographyProps?: MotionTypographyProps;
}

const InfoSlides = (props: InfoSlidesProps) => {
  const {
    img,
    ImageProps,
    title,
    CardWrapperProps,
    ContentWrapperProps,
    TagProps,
    description,
    DescriptionTypographyProps,
    ...restProps
  } = props;
  return (
    <MotionStack
      direction={"row"}
      columnGap={2}
      alignItems={"stretch"}
      {...CardWrapperProps}
      {...restProps}
    >
      <MaterialImage
        src={img}
        alt={title!}
        width={120}
        height={120}
        {...ImageProps}
      />
      <MotionStack
        rowGap={2}
        alignItems={"flex-start"}
        justifyContent={"space-between"}
        {...ContentWrapperProps}
      >
        {title && (
          <MotionBox
            bgcolor={alpha("#fff", 0.2)}
            p={"6px 16px"}
            fontSize={"14px"}
            {...TagProps}
          >
            {title}
          </MotionBox>
        )}
        <MotionTypography variant='body1' {...DescriptionTypographyProps}>
          {description}
        </MotionTypography>
      </MotionStack>
    </MotionStack>
  );
};
export default InfoSlides;
