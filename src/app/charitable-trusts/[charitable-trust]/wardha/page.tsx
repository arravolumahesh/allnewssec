import WardhaBanner from "@c/charitableTrusts/wardha/wardha-banner";
import ObjectiveSection from "@cc/objective-section";
import { H6_1 } from "@theme/components/typography.fontvariant";
import HistoricLegacy from "@c/charitableTrusts/wardha/historic-legacy";

const CharitableTrustWardha = () => {
  return (
    <>
      <WardhaBanner />
      <ObjectiveSection
        Objective={objective}
        ObjectiveTypographyProps={{
          fontSize: H6_1,
        }}
      />
      <HistoricLegacy />
    </>
  );
};

export default CharitableTrustWardha;

const objective = `Wardha, in the heart of India, is 75 km from Nagpur and 780 km from Mumbai. The district is bounded by the Satpura mountain range in the North and by the valley of the Purna river in the West. It was also home to Jamnalal Bajaj and top political leaders including Mahatma Gandhi. Wardha has been a witness to many events of constructive, social, national and historical significance.`;
