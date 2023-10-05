"use client";
import SectionWrapper from "@/commonComponents/section-wrapper";
import TestimonialCard from "./testimonialCard";
import EnhancedSwiper from "@/commonComponents/enhanced-swiper";
import { Navigation } from "swiper/modules";
import SwiperNavigationArrowIcon from "@/commonComponents/swiper-navigation-arrow-icon";
import slideImage from './images/emptestimonial.png'

const EmployeeTestimonial = () => {
    return (
        <>
            <SectionWrapper
                SectionProps={{
                    sx:{
                        backgroundColor:'white'
                    }
                }}
                sx={{
                    p:{xs:0}
                }}
            >
                <EnhancedSwiper
                    data={data || []}
                    SlideComponent={TestimonialCard}
                    modules={[Navigation]}
                    passSlideState
                    navigation={{
                    enabled: true,
                    nextEl: ".swiper-next",
                    prevEl: null,
                    }}
                    // {...EnhancedSwiperProps}
                >
                    <SwiperNavigationArrowIcon
                    direction={"next"}
                    className={"swiper-next"}
                    sx={{
                        right: {
                        xs: 16,
                        md: 40,
                        lg: 64,
                        },
                        fontSize: { xs: 45, md: 70 },
                        top: {
                        xs: "25%",
                        sm: "22%",
                        md: "50%",
                        },
                    }}
                    />
                </EnhancedSwiper>
            </SectionWrapper>
        </>
    )
}

export default  EmployeeTestimonial;

const data = [
    {
      bgImage: slideImage,
      title: "Shilpa Kumari",
      description: `I am truly grateful for the incredible support and opportunities that skill development CSR initiative has brought into my life. As a beneficiary, I have experienced first-hand the positive changes they are making in our community. Their commitment to education and skill development has allowed me to receive valuable training and guidance.`,
      company: "Civil Engineer",
      location: "Wardha, Maharashtra",
    },
    {
      bgImage: slideImage,
      title: "Shilpa Kumari",
      description: `I am truly grateful for the incredible support and opportunities that skill development CSR initiative has brought into my life. As a beneficiary, I have experienced first-hand the positive changes they are making in our community. Their commitment to education and skill development has allowed me to receive valuable training and guidance.`,
      company: "Civil Engineer",
      location: "Wardha, Maharashtra",
    },
    {
      bgImage: slideImage,
      title: "Shilpa Kumari",
      description: `I am truly grateful for the incredible support and opportunities that skill development CSR initiative has brought into my life. As a beneficiary, I have experienced first-hand the positive changes they are making in our community. Their commitment to education and skill development has allowed me to receive valuable training and guidance.`,
      company: "Civil Engineer",
      location: "Wardha, Maharashtra",
    },
    
  ];
  