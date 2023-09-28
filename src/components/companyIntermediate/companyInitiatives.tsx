import SectionWrapper from "@/commonComponents/section-wrapper";
import InitiativeCard from "../intermediate/swiper/initiativeCard";
import { Grid } from "@mui/material";

interface props{
    initiative?: {imageUrl: string;
        location: string;
        title: string;
        slug: string;}[]

}


const CompanyIntermediateInitiatives = (prop: props) => {
    const {initiative,...rest} = prop
    return (
        <>
        <SectionWrapper              
              SectionProps={{
                sx: {
                  backgroundColor: `#E6E6E6`,
                  py:8
                },
              }}
              sx={{
                py: {xxl:0,md:0,xs:0},                
                backgroundColor: `#E6E6E6`,
              }}
            >
                <Grid container spacing={3}  rowSpacing={8}>
                    {initiative && initiative.map((item,index)=>{
                        return (
                            <Grid item xs={12} md={4} key={index} >
                                <InitiativeCard data={item} matches={true} />
                            </Grid>
                        )
                    })}
                </Grid>
                
        </SectionWrapper>
        </>
    )
}

export default CompanyIntermediateInitiatives;