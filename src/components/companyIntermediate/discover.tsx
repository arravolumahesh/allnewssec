'use client'
import SectionWrapper from "@/commonComponents/section-wrapper";
import { Box, Container, Grid, Stack, Typography, styled } from "@mui/material";
import blockImg from './image/Rectangle 25143.png'
import blockImg2 from './image/Rectangle 25144.png'
import blockImg3 from './image/Rectangle 25147.png'
import Image from "next/image";
import React from "react";
import { H5_1, H6_2 } from "@/styles/theme/components/typography.fontvariant";
import { MotionLink } from "@/commonComponents/motion-components";
import SvgIconArrow from "../intermediate/icons/arrowIcon";
import UpdownSlide from "./updownslide";


const HorizontalSlider = styled(Box)(({ theme }) => ({
    maxHeight:522,
    overflow:'hidden',
    [theme.breakpoints.down('md')]:{
        maxHeight:290,
    }
  }));

const InnerSlider = styled(Box)(({ theme }) => ({
    columnCount:2,    
    gap:theme.spacing(1),
    '& img':{
        maxWidth:'100%',
        marginBottom:theme.spacing(1),
    },
    animation: "horizontalScroll 5s infinite linear",
        "@keyframes horizontalScroll": {
        "100%": {
            WebkitTransform: "translateY(-10.5%)",
        },
    },
    '&:hover':{
        animationPlayState:'paused'
    }
  }));

  const reletedCompany = [
    {
        title:"Bajaj Finserv",
        url:"#"
    },
    {
        title:"Bajaj Electricals",
        url:"#"
    },
    {
        title:"Mukand Ltd.",
        url:"#"
    },
  ]

const DiscoverCompanyIntermidiate = () => {
    return (
        <>
            <SectionWrapper
                SectionProps={{
                    sx:{
                        backgroundColor:"white",
                        py:{}
                    }
                }}
                sx={{
                    py: {xxl:0,md:0,xs:0},
                    px:{xs:0}
                  }}
                  color={"primary.main"}
            >
                <Box maxWidth={"lg"} sx={{
                    mx:'auto'
                }}>
                    <Grid container spacing={{md:10,xs:0}}>
                        <Grid item xs={12} md={6}>
                            
                            {/* <HorizontalSlider>
                                <InnerSlider>
                                    {Array(23).fill('1').map((item,index)=>{
                                        return (
                                            <React.Fragment key={index}>
                                            <Image src={blockImg} alt="" />                                                                                        
                                            <Image src={blockImg2} alt="" />
                                            </React.Fragment>
                                        )
                                    })}
                                </InnerSlider>
                            </HorizontalSlider> */}

                            <Box maxHeight={500} 
                            // sx={{
                            //     background:'#333',
                            //     '& .swiper':{
                            //         height:'200px !important',
                            //     },
                            //     '& .swiper-wrapper':{
                            //         height:'200px !important',
                            //     }
                            // }}
                            
                            >
                            <UpdownSlide />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                                <Box sx={{mt:{md:10,xs:4},px:{xs:3}}}>
                                    <Typography variant="h3" sx={{fontSize:H5_1,mb:{xs:3,md:5}}}>Discover initiatives by other companies</Typography>
                                    {reletedCompany.map((item,index)=>{
                                        return (
                                            <MotionLink 
                                                endIcon={<SvgIconArrow />} 
                                                key={index} 
                                                href={item.url}
                                                sx={{
                                                    fontSize:H6_2,
                                                    display:'block',
                                                    width: '100%',
                                                    px:0,
                                                    py:2,
                                                    position: 'relative',
                                                    borderBottom: '0.5px solid #EAEAEA',
                                                    '& .MuiButton-endIcon':{
                                                        position: 'absolute',
                                                        zIndex: 99,
                                                        top: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        margin: 'auto',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        '& svg':{
                                                            fontSize:H6_2,
                                                        }
                                                    }
                                                }}
                                                >
                                                {item.title}
                                            </MotionLink>
                                        )
                                    })
                                    }
                                </Box>
                        </Grid>
                    </Grid>
                </Box>
            </SectionWrapper>
        </>
    )
}

export default DiscoverCompanyIntermidiate;