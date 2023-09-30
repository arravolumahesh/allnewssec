import SectionWrapper from "@/commonComponents/section-wrapper";
import InitiativeCard from "../intermediate/swiper/initiativeCard";
import { Button, Grid } from "@mui/material";

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
                  py:8
                },
              }}
              sx={{
                py: {xxl:0,md:0,xs:0},
              }}
            >
                <Grid container spacing={3}  rowSpacing={8}>
                    {initiative && initiative.map((item,index)=>{
                        return (
                            <Grid item xs={12} md={4} key={index} >
                                <InitiativeCard data={item} matches={false} />
                            </Grid>
                        )
                    })}
                </Grid>

                <Button variant="outlined" sx={{mt:10,mx:'auto'}}>View More</Button>
                
        </SectionWrapper>
        </>
    )
}

export default CompanyIntermediateInitiatives;