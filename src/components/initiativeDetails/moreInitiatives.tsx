"use client";
import SectionWrapper from "@/commonComponents/section-wrapper";
import CompanyInitiatives from "../intermediate/companyInitiatives";

const MoreInitiatives = () => {
    return (
        <>
        <SectionWrapper              
              SectionProps={{
                sx: {
                  backgroundColor: `default`,
                },
              }}
              sx={{
                py: {xxl:0,md:0,xs:0},
                backgroundColor: `default`,
              }}
              color={'primary.main'}
            >
              <CompanyInitiatives initiativedata={initiativedata} />
        </SectionWrapper>
        </>
    )
}

export default MoreInitiatives;


const initiativedata = {
    companyName: "more skill development initiatives",
    companyPath: "",    
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
      }
    ],
  }
  
    