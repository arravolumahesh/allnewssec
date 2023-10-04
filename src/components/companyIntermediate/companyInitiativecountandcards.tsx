"use client"
import { Stack } from "@mui/material";
import IntermediateCount from "../intermediate/intermediateCount";
import CompanyIntermediateInitiatives from "./companyInitiatives";
import SectionWrapper from "@/commonComponents/section-wrapper";
import CountBox from "../intermediate/countBox";

interface props{
    initiative?: {imageUrl: string;
        location: string;
        title: string;
        slug: string;}[]
}

const IntermediateCountAndCards = (prop:props) => {
    const {initiative,...rest} = prop

    return (
        <>
            <SectionWrapper
                sx={{
                pt: 5,
                pb: {xxl:0,xl:0,lg:0,md:0},                
                }}
            >
                <CountBox />
            </SectionWrapper>            
            <CompanyIntermediateInitiatives
                initiative={initiative}
                />        
        </>
    )
}

export default IntermediateCountAndCards;