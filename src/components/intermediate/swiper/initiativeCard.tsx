"use client"

import { MotionBox, MotionTypography } from "@/commonComponents/motion-elements";
import companyImage from '../images/companyImage.svg'
import Image from "next/image";
import { useSwiperSlide } from "swiper/react";
import RoomIcon from '@mui/icons-material/Room';
import { Box } from "@mui/material";
import theme from "@/styles/theme";


const InitiativeCard = () =>{
    const swiperSlide = useSwiperSlide();

    const item = {
        visible: 'visible',        
      }

    return (
        <>
            <MotionBox
                initial={{
                        x: (swiperSlide.isPrev ? '-40%' :'40%'),
                        opacity:0
                    }}
                whileInView={{
                    x:'0',
                    opacity:1
                }}                
                transition={{
                    duration:0.5
                }}
                exit={{
                    x:'-40%',
                    opacity:0
                }}
                viewport={{
                    amount:0
                }}
            >
                <Box
                    sx={{
                        overflow:'hidden',
                        '& img':{
                            transition:'all 0.3s ease-in-out',
                            maxWidth:'100%',
                            height:'auto',
                            '&:hover':{
                                transform:'scale(1.05)',
                                transition:'all 0.3s ease-in-out'
                            }
                        }
                    }}
                >
                    <Image src={companyImage} alt="initiative image" />
                </Box>
                <MotionTypography variant="body1" color={'primary'} sx={{
                    display:'flex',
                    alignItems:'center',

                }}><RoomIcon /> Maharashtra</MotionTypography>
                <MotionTypography variant="h5" fontWeight={400} color={'primary'}>Gifting Smiles – No child left behind</MotionTypography>
            </MotionBox>
        </>
    )
}

export default InitiativeCard;