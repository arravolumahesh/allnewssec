import {
  staggerArrowChildren,
  staggerDivArrow,
  staggerStackChildren,
  staggerTextChildren,
} from "@cc/animations";
import {
  MotionImage,
  MotionStack,
  MotionStackProps,
  MotionTypography,
  MotionTypographyProps,
} from "@cc/motion-components";
import line from "./images/line.svg";

export interface StatisticsProps extends Omit<MotionStackProps, "children"> {
  data: {
    title: string;
    subtitle: string;
  }[];
  TitleTypographyProps?: Omit<MotionTypographyProps, "children">;
  SubtitleTypographyProps?: Omit<MotionTypographyProps, "children">;
}

const Statistics = (props: StatisticsProps) => {
  const { data, TitleTypographyProps, SubtitleTypographyProps, ...restProps } =
    props;
  return (
    <MotionStack
      direction={"row"}
      width={1}
      mx={"auto"}
      alignItems={"center"}
      justifyContent={"space-evenly"}
      rowGap={4}
      columnGap={2}
      py={2}
      px={{ xs: 1, md: 5 }}
      bgcolor={"primary.main"}
      variants={staggerDivArrow(0.5)}
      initial={"initial"}
      whileInView={"animate"}
      viewport={{ once: true }}
      divider={
        <MotionImage
          variants={staggerArrowChildren}
          src={line}
          alt="line"
          height={91}
        />
      }
      {...restProps}
    >
      {data.map((item, idx) => {
        const { title, subtitle } = item;
        return (
          <MotionStack
            key={idx}
            alignItems={"center"}
            width={{ xs: "50%", md: "auto" }}
            rowGap={1}
            variants={staggerStackChildren}
            viewport={{ once: true }}
          >
            <MotionTypography
              variants={staggerTextChildren}
              variant="h2"
              component={"h3"}
              fontWeight={700}
              {...TitleTypographyProps}
            >
              {title}
            </MotionTypography>
            <MotionTypography
              textAlign={"center"}
              variants={staggerTextChildren}
              {...SubtitleTypographyProps}
            >
              {subtitle}
            </MotionTypography>
          </MotionStack>
        );
      })}
    </MotionStack>
  );
};

export default Statistics;
