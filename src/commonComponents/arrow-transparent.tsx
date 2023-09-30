import React from "react";
import { MotionSvg, MotionSvgProps } from "./motion-components";

interface ArrowTransparentProps {
  SVGProps?: Omit<MotionSvgProps, "children">;
}

const ArrowTransparent = (props: ArrowTransparentProps) => {
  const { SVGProps } = props;
  return (
    <MotionSvg
      xmlns='http://www.w3.org/2000/svg'
      width='85'
      height='252'
      viewBox='0 0 85 252'
      fill='none'
      {...SVGProps}
      style={{
        ...(SVGProps ? SVGProps.style : {}),
      }}
    >
      <g filter='url(#filter0_b_867_710)'>
        <path
          d='M20.3394 113.268L20.4125 113.084L20.3394 112.9L-43.7191 -48.6895H19.535L83.6666 113.084L19.535 274.857H-43.7191L20.3394 113.268Z'
          stroke='white'
        />
      </g>
      <defs>
        <filter
          id='filter0_b_867_710'
          x='-64.4552'
          y='-69.1895'
          width='168.66'
          height='364.547'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feGaussianBlur in='BackgroundImageFix' stdDeviation='10' />
          <feComposite
            in2='SourceAlpha'
            operator='in'
            result='effect1_backgroundBlur_867_710'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_backgroundBlur_867_710'
            result='shape'
          />
        </filter>
      </defs>
    </MotionSvg>
  );
};

export default ArrowTransparent;
