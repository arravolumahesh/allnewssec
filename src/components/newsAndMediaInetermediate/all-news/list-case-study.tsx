"use client";
import AnimatedButton from "@/commonComponents/animated-button";
import { arrowImageTransition, formStagger, formStaggerChildrenRight } from "@/commonComponents/animations";
import { Navigation } from "swiper/modules";
import { MotionStackProps, MotionTypography } from "@/commonComponents/motion-components";
import React from "react";
import SectionWrapper from "@/commonComponents/section-wrapper";
import { List, ListItem, Divider, useMediaQuery,Grid,Stack } from "@mui/material";
import EnhancedSwiper from "@/commonComponents/enhanced-swiper";
import SwiperNavigationButton from "@/commonComponents/swiper-navigation-button";
import { CaseStudySlideList, CaseStudySlideProps } from "./case-study-slide-list";

type CaseStudiesProps = {
  SectioHeader?: string;
  data: CaseStudySlideProps[];
  ContainerEndChildrenProps?: Omit<MotionStackProps, "children">;
};

const ListCaseStudy = (props: CaseStudiesProps) => {
  const { SectioHeader, data, ContainerEndChildrenProps } = props;

  return (
    <SectionWrapper
      SectionProps={{ id: "case-studies", bgcolor:"secondary.500" }}
      color={"primary.main"}
    >
        <List>
            {data.map((item,index)=>(
               <div key={index}>
               <ListItem>
                 <CaseStudySlideList {...item} />
               </ListItem>
               {index < data.length - 1 && <Divider />}
             </div> 
            ))}
        </List>
      <AnimatedButton
            href={"#"}
            rotation='anticlockwise'
            variant={"contained"}
            color={"primary"}
            animationDelay={2000}
            variants={formStaggerChildrenRight}
            sx={{
                alignSelf:"center",
                marginTop:"30px",
                background:"secondary.main"
            }}
          >
            View More
          </AnimatedButton>

             {/* <Grid item xs={12} md={isDesktop ? 4 : 12}>     
            <Stack width={1}>
                <EnhancedSwiper
                slidesPerView={"auto"} 
                SlideWrapperProps={{
                    sx: {
                    width: { xs: 301, lg: 643 },
                    mr: 3,
                    },
                }}
                sx={{
                    overflow: { xs: "visible", xxl: "hidden" },
                }}
                SlideComponent={CaseStudySlide}
                data={data}
                Slots={{
                    ContainerStartChildren: (
                    <Stack
                        direction='row'
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        mb={{ xs: 5, md: 6 }}
                    >
        
                    </Stack>
                    ),
                }}
                />
                
            </Stack>
            </Grid> */}
           
    </SectionWrapper>
  );
};

export default ListCaseStudy;
