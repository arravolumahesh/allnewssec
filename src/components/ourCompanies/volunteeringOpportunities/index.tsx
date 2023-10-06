"use client";
import ArrowSwiperWithInfoSection, {
  ArrowSwiperWithInfoProps,
} from "@cc/arrow-swiper-with-info-section";
import ArrowSlideInfo from "@cc/cards/arrow-slide-info";
import { ArrowSlideDefaultImageProps } from "@cc/cards/arrow-slide-default-image";
import vo from "@/components/ourCompanies/volunteeringOpportunities/images/volunteering-opportunities.jpg";
import FormDialogButton from "@/commonComponents/form-dialog-button";
import RestockFridges from "./restock-fridges";

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
    btnText: (
      <FormDialogButton
        title='Restocking Community Fridges'
        image={
          "https://s3-alpha-sig.figma.com/img/42aa/b045/92d3bd2e3b4b727f604749a4117e82e0?Expires=1697414400&Signature=jrReuomsG0Vt3vhXsLrIXg~1eZBOQEE8w9DL00Hd7VTGT-5JjQ7a97X1SRt3oT~IuFSuDtH2tvZGyai9WKuyVS-z-0p5J0nXxy4a9MN1tepLS3FXAIFqt3b5eON6L9hb~BJLjLY-fToaeEnPVLjiu-UCYEtsNrxfmBG-1TRMdA0zi6~9HAmA73sx8Wb1riEkOuHHxV8jWqkRdgrKzEcs7MHsqjMt8LX~t9bK91D35JiCnqDDtgGsEKDX~KFk6hoFkKHRCLKeDp86aZhLZbX8QGS2VE4wdD6QAGsUNF3GlfLwugndjRJANpV~QzkaUkAbumQvrslM1znACL34I3KBug__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        }
        description='The Restocking Community Fridges volunteering event is an
initiative that aims to address food insecurity. The event
focuses on replenishing and maintaining community fridges
placed in public spaces to provide free and accessible food to
those in need.'
        region='Mumbai, Maharashtra'
        date='15 July 2023 | 10:00 AM - 6:00 PM'
        number='+91 7607907690'
        ReactiveForm={<RestockFridges />}
      >
        Apply Now
      </FormDialogButton>
    ),
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
    btnText: (
      <FormDialogButton
        title='Restocking Community Fridges'
        image={
          "https://s3-alpha-sig.figma.com/img/42aa/b045/92d3bd2e3b4b727f604749a4117e82e0?Expires=1697414400&Signature=jrReuomsG0Vt3vhXsLrIXg~1eZBOQEE8w9DL00Hd7VTGT-5JjQ7a97X1SRt3oT~IuFSuDtH2tvZGyai9WKuyVS-z-0p5J0nXxy4a9MN1tepLS3FXAIFqt3b5eON6L9hb~BJLjLY-fToaeEnPVLjiu-UCYEtsNrxfmBG-1TRMdA0zi6~9HAmA73sx8Wb1riEkOuHHxV8jWqkRdgrKzEcs7MHsqjMt8LX~t9bK91D35JiCnqDDtgGsEKDX~KFk6hoFkKHRCLKeDp86aZhLZbX8QGS2VE4wdD6QAGsUNF3GlfLwugndjRJANpV~QzkaUkAbumQvrslM1znACL34I3KBug__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        }
        description='The Restocking Community Fridges volunteering event is an
initiative that aims to address food insecurity. The event
focuses on replenishing and maintaining community fridges
placed in public spaces to provide free and accessible food to
those in need.'
        region='Mumbai, Maharashtra'
        date='15 July 2023 | 10:00 AM - 6:00 PM'
        number='+91 7607907690'
        ReactiveForm={<RestockFridges />}
      >
        Apply Now
      </FormDialogButton>
    ),
  },
];
