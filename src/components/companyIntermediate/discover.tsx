'use client'
import SectionWrapper from "@/commonComponents/section-wrapper";
import { Box, Container, Grid, Stack, styled } from "@mui/material";

const HorizontalSlider = styled(Box)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
  }));

const DiscoverCompanyIntermidiate = () => {
    return (
        <>
            <SectionWrapper>
                <Container maxWidth={"lg"}>
                    <Grid container spacing={10}>
                        <Grid item>
                            <HorizontalSlider>
                                t
                            </HorizontalSlider>
                        </Grid>
                        <Grid item>

                        </Grid>
                    </Grid>
                </Container>
            </SectionWrapper>
        </>
    )
}

export default DiscoverCompanyIntermidiate;