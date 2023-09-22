import { Box, IconButton, alpha } from '@mui/material';
import { useSwiper } from 'swiper/react';
import SvgIconArrow from '../icons/arrowIcon';

interface props{
    disablePrev:boolean;
    disableNext:boolean;
}


export default function SlideButtons(prop:props) {
  const {disableNext,disablePrev,...rest}  = prop
  const swiper = useSwiper();
  
  return (
    <>  
    <Box component={'div'}  sx={(theme) => ({
            display:'flex',
            gap:2,
            '& .MuiIconButton-root':{                
                border:`2px solid ${theme.palette.primary.dark}`,
                width:theme.spacing(6),
                height:theme.spacing(6),
                p:0,
                '&:hover:after':{
                  content:'""',
                  position: 'absolute',
                  top: '4px',
                  left: '4px',
                  right: '4px',
                  bottom: '4px',
                  background: alpha(theme.palette.primary.dark,0.25),
                  zIndex: -1,
                },
                '&.Mui-disabled':{
                  opacity:0.5
                },
                '&:first-child':{
                  transform:'scaleX(-1)',
                },
                '&:hover':{
                  background:'none',
                },
                '& svg':{
                  width:theme.spacing(3.75),
                  height:theme.spacing(3.75),
                }
            }
          })}>
        <IconButton onClick={() => swiper.slidePrev()} className="arrow-left arrow" disabled={disablePrev}><SvgIconArrow /></IconButton>
        <IconButton onClick={() => swiper.slideNext()}  className="arrow-right arrow" disabled={disableNext}><SvgIconArrow /></IconButton>
    </Box>
    </>
  );
}