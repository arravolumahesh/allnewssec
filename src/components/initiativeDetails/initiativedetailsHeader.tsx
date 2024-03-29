import ReactiveBreadcrumb from "@/commonComponents/breadcrumb";
import SectionWrapper from "@/commonComponents/section-wrapper";

const InitiativeDetailsHeader = () => {
  return (
    <>
      <SectionWrapper
        SectionProps={{
          sx: {
            py: { xs: 0, md: 4 },
            backgroundColor: "white",
          },
        }}
        sx={{ pb: { xxl: 0, md: 0, xs: 1 }, pt: { xxl: 0, md: 0, xs: 2 } }}
        color={"grey.600"}
      >
        <ReactiveBreadcrumb />
      </SectionWrapper>
    </>
  );
};

export default InitiativeDetailsHeader