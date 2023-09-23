import { SvgIconComponent } from "@mui/icons-material";
import { MotionCard, MotionCardProps } from "../motion-components";
import { CardContent } from "@mui/material";
import Link from "next/link";

interface SocialCardProps extends Omit<MotionCardProps, "children"> {
  img: string;
  href: string;
  Icon: SvgIconComponent;
}

const SocialCard = (props: SocialCardProps) => {
  const { img, href, Icon, sx, ...restProps } = props;
  return (
    <Link href={href}>
      <MotionCard
        sx={{
          display: "flex",
          position: "relative",
          width: { xs: 1, lg: 289 },
          aspectRatio: 1,
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.67) 100%), url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: 0,
          ...sx,
        }}
        {...restProps}
      >
        <CardContent
          sx={{
            alignSelf: "flex-end",
            p: { xs: 1, sm_md: 2.5 },
            pb: { xs: "8px !important", sm_md: "16px !important" },
          }}
        >
          <Icon sx={{ color: "white", fontSize: { xs: 16, sm_md: 26 } }} />
        </CardContent>
      </MotionCard>
    </Link>
  );
};
export default SocialCard;
