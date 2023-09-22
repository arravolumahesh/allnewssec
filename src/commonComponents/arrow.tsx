import { MotionSvg, MotionSvgProps } from "@cc/motion-components";

const Arrow = (props: Omit<MotionSvgProps, "children">) => {
  const { style, ...restSvgProps } = props;
  return (
    <MotionSvg
      width='209'
      height='572'
      viewBox='0 0 209 572'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{
        mixBlendMode: "screen",
        ...style,
      }}
      {...restSvgProps}
    >
      <g
        style={{
          mixBlendMode: "screen",
        }}
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M49.6115 29.031H7.61681e-05L119.137 286.172L0 543.313H49.6115L168.749 286.172L49.6115 29.031Z'
          fill='url(#paint0_radial_1462_143)'
        />
      </g>
      <g
        style={{
          mixBlendMode: "screen",
        }}
      >
        <ellipse
          cx='118.923'
          cy='183.274'
          rx='18.7847'
          ry='200.37'
          transform='rotate(-24.3649 118.923 183.274)'
          fill='url(#paint1_radial_1462_143)'
        />
      </g>
      <g
        style={{
          mixBlendMode: "screen",
        }}
      >
        <ellipse
          cx='18.7847'
          cy='200.37'
          rx='18.7847'
          ry='200.37'
          transform='matrix(0.910937 0.412546 0.412546 -0.910937 24.4563 563.177)'
          fill='url(#paint2_radial_1462_143)'
        />
      </g>
      <g
        style={{
          mixBlendMode: "screen",
        }}
      >
        <rect
          x='58.3457'
          y='50.999'
          width='5.59002'
          height='291.106'
          transform='rotate(-24.36 58.3457 50.999)'
          fill='url(#paint3_radial_1462_143)'
        />
      </g>
      <g
        style={{
          mixBlendMode: "screen",
        }}
      >
        <rect
          width='5.59002'
          height='295.922'
          transform='matrix(0.910972 0.412469 0.412469 -0.910972 62.5383 512.813)'
          fill='url(#paint4_radial_1462_143)'
        />
      </g>
      <defs>
        <radialGradient
          id='paint0_radial_1462_143'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(111.276 286.23) rotate(94.91) scale(312.266 102.462)'
        >
          <stop stopColor='#E0E0E0' />
          <stop offset='1' stopOpacity='0' />
        </radialGradient>
        <radialGradient
          id='paint1_radial_1462_143'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(118.923 183.274) rotate(90) scale(200.37 18.7847)'
        >
          <stop stopColor='#249DD1' />
          <stop offset='1' stopColor='#000101' stopOpacity='0' />
        </radialGradient>
        <radialGradient
          id='paint2_radial_1462_143'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(18.7847 200.37) rotate(90) scale(200.37 18.7847)'
        >
          <stop stopColor='#249DD1' />
          <stop offset='1' stopColor='#000101' stopOpacity='0' />
        </radialGradient>
        <radialGradient
          id='paint3_radial_1462_143'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(61.1407 196.552) rotate(90) scale(145.553 2.79501)'
        >
          <stop stopColor='#249DD1' />
          <stop offset='1' stopColor='#000101' stopOpacity='0' />
        </radialGradient>
        <radialGradient
          id='paint4_radial_1462_143'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(2.79501 147.961) rotate(90) scale(147.961 2.79501)'
        >
          <stop stopColor='#249DD1' />
          <stop offset='1' stopColor='#000101' stopOpacity='0' />
        </radialGradient>
      </defs>
    </MotionSvg>
  );
};

export default Arrow;
