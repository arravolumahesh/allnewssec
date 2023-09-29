"use client"

import SectionWrapper from "@/commonComponents/section-wrapper";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import detailiamge from './image/initiativedetail.svg'
import { H3, H6_2 } from "@/styles/theme/components/typography.fontvariant";
import IntermediateCount from "../intermediate/intermediateCount";

const InitiativeDetailsWrap = () => {
    return (
        <>
            <SectionWrapper
                SectionProps={{
                    sx:{
                        backgroundColor:'primary.main',
                        overflow:'visible',
                        // mb:16
                    }
                }}
                sx={{
                    pt:{md:10,sm:4},
                    pb:{xs:0},
                    mb:-16
                }}
            >
                <Box maxWidth={1086} mx={'auto'}>
                    <Box>
                        Skill Development
                        Wardha, Maharashtra
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
                    <IntermediateCount />
                    <Box>
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