import { useSwiper } from 'swiper/react';

interface props{
    disablePrev:boolean;
    disableNext:boolean;
}


export default function SlideButtons(prop:props) {
  const {disableNext,disablePrev,...rest}  = prop
  const swiper = useSwiper();
  
  return (
    <>        
        <button onClick={() => swiper.slidePrev()} className="arrow-left arrow" disabled={disablePrev}>Prev</button>
        <button onClick={() => swiper.slideNext()}  className="arrow-right arrow" disabled={disableNext}>next</button>
    </>
  );
}