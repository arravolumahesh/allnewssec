import AwardsSwiper from "@c/charitableTrusts/awards/awards-swiper";
import AwardsAssociatedWithUs from "@c/charitableTrusts/awards/awards-associated-with-us";
import DiscoverSection, { DiscoverSectionProps } from "@cc/discover-section";
import awardCeremony1 from "@c/charitableTrusts/awards/images/award-ceremony-1.jpg";
import awardCeremony2 from "@c/charitableTrusts/awards/images/award-ceremony-2.jpg";
import awardCeremony3 from "@c/charitableTrusts/awards/images/award-ceremony-3.jpg";
import awardCeremony4 from "@c/charitableTrusts/awards/images/award-ceremony-4.jpg";

const CharitableTrustAwards = () => {
  return (
    <>
      <AwardsSwiper />
      <AwardsAssociatedWithUs />
      <DiscoverSection
        title='Moments From our Award Ceremonies'
        linkProps={{
          href: "#",
          children: "Visit The Jamnalal Bajaj Awards Website",
        }}
        ImageData={imageData}
      />
    </>
  );
};

export default CharitableTrustAwards;

const imageData: DiscoverSectionProps["ImageData"] = [
  { image: awardCeremony1 },
  { image: awardCeremony2 },
  { image: awardCeremony3 },
  { image: awardCeremony4 },
];
