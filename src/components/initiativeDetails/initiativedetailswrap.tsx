"use client"

import SectionWrapper from "@/commonComponents/section-wrapper";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import detailiamge from './image/initiativedetail.svg'
import { H3, H6_2, Subtitle2 } from "@/styles/theme/components/typography.fontvariant";
import IntermediateCount from "../intermediate/intermediateCount";
import AnimatedButton from "@/commonComponents/animated-button";
import { MotionTypography } from "@/commonComponents/motion-components";
import RoomIcon from '@mui/icons-material/Room';
import CountBox from "../intermediate/countBox";

const InitiativeDetailsWrap = () => {
    return (
        <>
            <SectionWrapper
                SectionProps={{
                    sx:{
                        backgroundColor:'primary.main',
                        overflow:'visible',
                        pb:{md:4}
                        // mb:16
                    }
                }}
                sx={{
                    pt:{md:10,sm:4,xs:4},
                    pb:{xs:0,xl:0,xxl:0},
                    mb:{xs:-8,md:-16}
                }}
            >
                <Box maxWidth={1086} mx={'auto'}>
                    <Box
                        sx={{
                            display:'flex',
                            flexWrap:'wrap',
                            columnGap:3,
                            rowGap:{xs:2,md:0},
                            mb:4,                            
                        }}
                    >
                    <AnimatedButton
                        href={"/"}
                        variant='contained'
                        color='secondary'
                        sx={{px:2,py:{md:1.5,xs:0.75},maxWidth:'max-content',height:{xs:'auto'}}}
                        >
                        <Typography variant="body1" fontSize={Subtitle2}>Skill Development</Typography>
                    </AnimatedButton>

                    <MotionTypography
                        component={'span'}
                        variant="body1"
                        color={"white"}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.75,
                            order:{xs:1,md:0}
                        }}
                    >
                    <RoomIcon sx={{ width: { xs: "18px", md: "18px" } }} />{" "}
                        Wardha, Maharashtra
                    </MotionTypography>                        
                    <Typography variant="h1" sx={{fontSize:H3}}>Gifting Smiles – No child left behind</Typography>

                    </Box>
                    <Image src={detailiamge} alt="" />
                </Box>
            </SectionWrapper>
            <SectionWrapper
                color={'grey.600'}
                SectionProps={{
                    sx:{
                        backgroundColor:'white',                        
                    }
                }}
                sx={{
                    
                }}
            >
                <Box maxWidth={1086} mx={'auto'}>
                    <Box sx={{mx:{xs:-3},mt:{md:6,xs:5}}}>
                        <CountBox variant={"secondary"} />
                    </Box>
                    <Box sx={{mt:6}}>
                        <Typography variant="body1" fontSize={H6_2} fontWeight={400}>
                            In partnership with Bharitiya Yuva Shakti (BYST), we aim to empower the disadvantaged youth. Together, we help them turn their business dreams into reality. With the support of dedicated mentors, we guide these young entrepreneurs, nurturing their potential until they stand on their own feet. They not only become self-sufficient but also play a vital role in contributing to society by creating wealth and employment.
                        </Typography>
                    </Box>
                </Box>
            </SectionWrapper>
        </>
    )
}

export default InitiativeDetailsWrap;