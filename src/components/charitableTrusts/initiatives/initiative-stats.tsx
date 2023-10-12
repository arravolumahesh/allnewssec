import Statistics, { StatisticsProps } from "@cc/statistics";
import SectionWrapper, { basePx } from "@cc/section-wrapper";

const InitiativeStats = () => {
  return (
    <SectionWrapper
      color={"secondary.main"}
      px={{
        ...basePx,
        xs: 0,
      }}
    >
      <Statistics
        data={staticsData}
        TitleTypographyProps={{
          variant: "h4",
        }}
        SubtitleTypographyProps={{
          variant: "body2",
        }}
      />
    </SectionWrapper>
  );
};

export default InitiativeStats;

const staticsData: StatisticsProps["data"] = [
  {
    title: "93k",
    subtitle: "Students Educated",
  },
  {
    title: "300+",
    subtitle: "Programs Conducted",
  },
  {
    title: "100+",
    subtitle: "Training Institutions",
  },
];
