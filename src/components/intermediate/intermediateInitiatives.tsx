"use client";
import CompanyInitiatives from "./companyInitiatives";
import SectionWrapper from "@/commonComponents/section-wrapper";

const IntermediateInitiatives = () => {
  return (
    <>
      {initiativedata &&
        initiativedata.map((item, index) => {
          return (
            <SectionWrapper
              key={index}
              SectionProps={{
                sx: {
                  backgroundColor: `${index % 2 === 0 ? "white" : "default"}`,
                },
              }}
              sx={{
                py: {xxl:0,md:0,xs:0},
                backgroundColor: `${index % 2 === 0 ? "white" : "default"}`,
              }}
              color={'primary.main'}
            >
              <CompanyInitiatives initiativedata={item} key={index} />
            </SectionWrapper>
          );
        })}
    </>
  );
};

export default IntermediateInitiatives;

export const initiativedata = [
  {
    companyName: "Bajaj AUTO Limited",
    companyPath: "/",
    initiative: [
      {
        imageUrl: "",
        location: "Maharashtra",
        title: "Gifting Smiles – No child left behind",
        slug: "test",
      },
      {
        imageUrl: "",
        location: "India",
        title: "Implementing skill-based education in schools",
        slug: "test",
      },
      {
        imageUrl: "",
        location: "Maharashtra",
        title: "Gifting Smiles – No child left behind",
        slug: "test",
      },
      {
        imageUrl: "",
        location: "Delhi",
        title: "IPH-Triveni Program",
        slug: "test",
      },
      {
        imageUrl: "",
        location: "Maharashtra",
        title: "Gifting Smiles – No child left behind",
        slug: "test",
      },
      {
        imageUrl: "",
        location: "Maharashtra",
        title: "Gifting Smiles – No child left behind",
        slug: "test",
      },
    ],
  },
  {
    companyName: "Bajaj Electricals Limited",
    companyPath: "/",
    initiative: [
      {
        imageUrl: "",
        location: "Maharashtra",
        title: "Empowering through training",
        slug: "test",
      },
      {
        imageUrl: "",
        location: "India",
        title: "Building a Skilled India",
        slug: "test",
      },
      {
        imageUrl: "",
        location: "India",
        title: "Equipping India's Workforce",
        slug: "test",
      },
      {
        imageUrl: "",
        location: "Delhi",
        title: "IPH-Triveni Program",
        slug: "test",
      },
      {
        imageUrl: "",
        location: "Maharashtra",
        title: "Gifting Smiles – No child left behind",
        slug: "test",
      },
      {
        imageUrl: "",
        location: "Maharashtra",
        title: "Gifting Smiles – No child left behind",
        slug: "test",
      },
    ],
  },
  {
    companyName: "Bajaj FINSERV limited",
    companyPath: "/",
    initiative: [
      {
        imageUrl: "",
        location: "Maharashtra",
        title: "Elevating Careers",
        slug: "test",
      },
      {
        imageUrl: "",
        location: "Delhi",
        title: "Excelling through Training",
        slug: "test",
      },
      {
        imageUrl: "",
        location: "Delhi",
        title: "Excelling through Training",
        slug: "test",
      },
    ],
  },
  {
    companyName: "MUKAND LIMITED",
    companyPath: "/",
    initiative: [
      {
        imageUrl: "",
        location: "Maharashtra",
        title: "Empowering through Training",
        slug: "test",
      },
      {
        imageUrl: "",
        location: "India",
        title: "Building a Skilled India",
        slug: "test",
      },
      {
        imageUrl: "",
        location: "India",
        title: "Equipping India's Workforce",
        slug: "test",
      },
      {
        imageUrl: "",
        location: "Delhi",
        title: "IPH-Triveni Program",
        slug: "test",
      },
      {
        imageUrl: "",
        location: "Maharashtra",
        title: "Gifting Smiles – No child left behind",
        slug: "test",
      },
      {
        imageUrl: "",
        location: "Maharashtra",
        title: "Gifting Smiles – No child left behind",
        slug: "test",
      },
    ],
  },
  {
    companyName: "JAMNALAL BAJAJ FOUNDATION",
    companyPath: "/",
    initiative: [
      {
        imageUrl: "",
        location: "Maharashtra",
        title: "Elevating Careers",
        slug: "test",
      },
      {
        imageUrl: "",
        location: "Delhi",
        title: "Excelling through Training",
        slug: "test",
      },
      {
        imageUrl: "",
        location: "Delhi",
        title: "Excelling through Training",
        slug: "test",
      },
      {
        imageUrl: "",
        location: "Delhi",
        title: "IPH-Triveni Program",
        slug: "test",
      },
    ],
  },
];