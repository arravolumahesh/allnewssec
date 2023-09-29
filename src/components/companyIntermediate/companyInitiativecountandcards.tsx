"use client"
import { Stack } from "@mui/material";
import IntermediateCount from "../intermediate/intermediateCount";
import CompanyIntermediateInitiatives from "./companyInitiatives";

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
        <Stack
        >
            <IntermediateCount />            
            <CompanyIntermediateInitiatives
                initiative={initiative}
                />
        </Stack>
        </>
    )
}

export default IntermediateCountAndCards;