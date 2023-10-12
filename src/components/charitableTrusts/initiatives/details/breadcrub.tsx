import SectionWrapper from "@cc/section-wrapper";
import ReactiveBreadcrumb from "@cc/breadcrumb";

const InitiativeDetailBreadcrumb = () => {
  return (
    <SectionWrapper py={{ xs: 2, md: 3, xxl: 4 }}>
      <ReactiveBreadcrumb
        color={"grey.600"}
        MLinkProps={{
          color: "inherit",
        }}
      />
    </SectionWrapper>
  );
};

export default InitiativeDetailBreadcrumb;
