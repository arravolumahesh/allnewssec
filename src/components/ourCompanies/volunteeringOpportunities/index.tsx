import ArrowSwiperWithInfoSection, {
  ArrowSwiperWithInfoProps,
} from "@cc/arrow-swiper-with-info-section";
import ArrowSlideInfo from "@cc/cards/arrow-slide-info";
import { ArrowSlideDefaultImageProps } from "@cc/cards/arrow-slide-default-image";
import vo from "@/components/ourCompanies/volunteeringOpportunities/images/volunteering-opportunities.jpg";

const VolunteeringOpportunities = () => {
  return (
    <ArrowSwiperWithInfoSection
      data={data}
      SwiperKey={VolunteeringOpportunities.name}
      SectionWrapperProps={{
        color: "primary.main",
        SectionHeaderProps: {
          title: "Volunteering Opportunities",
        },
        SectionProps: {
          id: "volunteering-opportunities",
        },
        ContainerProps: {
          pb: 0,
        },
      }}
      ArrowSlideInfoProps={{
        isNavigation: true,
        SlotProps: {
          ButtonProps: {
            href: "#",
            color: "primary",
          },
        },
      }}
    />
  );
};

export default VolunteeringOpportunities;

const data: (ArrowSwiperWithInfoProps<
  typeof ArrowSlideInfo
>["data"][number]["data"][number] &
  ArrowSlideDefaultImageProps)[] = [
  {
    title: "Restocking Community Fridges",
    suffix: {
      date: "12th November 2021",
      region: "Mumbai",
    },
    description:
      "An initiative to replenish community fridges to nourish lives and foster a caring community.",
    image: vo,
    btnText: "Apply Now",
    btnLink: "/",
  },
  {
    title: "Restocking Community Fridges 2",
    suffix: {
      date: "12th November 2021",
      region: "Mumbai",
    },
    description:
      "An initiative to replenish community fridges to nourish lives and foster a caring community.",
    image: vo,
    btnText: "Apply Now",
    btnLink: "/",
  },
];
