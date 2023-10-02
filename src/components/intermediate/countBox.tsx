import { MotionTypography, MotionTypographyProps } from "@/commonComponents/motion-components";
import { Box, Grid } from "@mui/material";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface props {
    variant ?: "primary" | "secondary" | null | undefined
}

const count = [
    {
      value: "93k",
      title: "Students Educated",
    },
    {
      value: "300+",
      title: "Programs Conducted",
    },
    {
      value: "100+",
      title: "Training Institutions",
    },
  ];
const contAnimation: MotionTypographyProps = {
initial: {
    y: "40%",
    opacity: 0,
},
whileInView: {
    y: 0,
    opacity: 1,
},
transition: {
    duration: 1,
},
viewport: {
    once: true,
},
};
const CountBox = (prop: props) => {
    const invref = useRef(null);
    const isInView = useInView(invref, { once: true });
    const {variant="primary",...rest} = prop
    
    return (
        <Box
          ref={invref}
          sx={{
            backgroundColor: variant==="primary" ? 'primary.main' : 'white',
            borderTop:`1px solid ${variant==="primary" ? 'white' : '#EAEAEA'}`,
            borderBottom:`1px solid ${variant==="primary" ? 'white' : '#EAEAEA'}`,
            px: {
              xs: 1,
              md: 5,
            },
            py: 2,
          }}
        >
          <Grid
            container
            spacing={0}
            sx={{
              "& .MuiGrid-item": {
                position: "relative",
                "&:after": {
                  content: `""`,
                  position: "absolute",
                  right: 0,
                  top: 0,
                  width: "1px",
                  height: "0%",
                  backgroundColor: variant==="primary" ? 'white' : '#EAEAEA',
                  transition: "all 1s ease-in-out",
                  ...(isInView && {
                    height: "100%",
                  }),
                },
                "&:last-child": {
                  "&:after": {
                    display: "none",
                  },
                },
              },
            }}
          >
            {count.map((item, index) => (
              <Grid
                item
                xs={true}
                key={index}
                sx={{
                  textAlign: "center",
                }}
              >
                <MotionTypography
                  variant="h3"
                  color={variant==="primary" ? 'white' : 'primary.main'}
                  {...contAnimation}
                >
                  {item.value}
                </MotionTypography>
                <MotionTypography
                  variant="body1"
                  color={variant==="primary" ? 'white' : 'primary.main'}
                  fontWeight={400}
                  {...contAnimation}
                >
                  {item.title}
                </MotionTypography>
              </Grid>
            ))}
          </Grid>
        </Box>
    )
}

export default CountBox