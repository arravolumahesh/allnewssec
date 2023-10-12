import InitiativeDetailBreadcrumb from "@c/charitableTrusts/initiatives/details/breadcrub";
import BriefInfo from "@c/charitableTrusts/initiatives/details/brief-Info";
import SectionNavigation, {
  SectionNavigationProps,
} from "@cc/section-navigation";

const CharitableTrustInitiativeDetail = () => {
  return (
    <>
      <InitiativeDetailBreadcrumb />
      <BriefInfo />
      <SectionNavigation
        SectionProps={{
          bgcolor: "secondary.500",
        }}
        SectionHeaderProps={{
          title: "Our programs",
          TitleTypographyProps: {
            color: "primary.main",
          },
        }}
        Sections={sectionNavigation}
        TabsProps={{
          sx: {
            bgcolor: "common.white",
            color: "grey.600",
          },
        }}
      />
    </>
  );
};

export default CharitableTrustInitiativeDetail;

const sectionNavigation: SectionNavigationProps["Sections"] = [
  { title: "Economic Development", href: "#" },
  { title: "Education", href: "#" },
  { title: "Health & Hygiene", href: "#" },
  { title: "Social Development", href: "#" },
  { title: "Impact", href: "#" },
  { title: "More Initiatives", href: "#" },
];
