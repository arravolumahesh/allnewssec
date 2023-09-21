import { motion } from "framer-motion";

const Arrow = () => {
  return (
    <motion.svg
      width="221"
      height="604"
      viewBox="0 0 221 604"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 31.0327H52.4105L178.27 302.682H125.859L0 31.0327Z"
        fill="#EE7623"
      />
      <path
        d="M178.27 302.682H125.859L-0.00012207 574.331H52.4104L178.27 302.682Z"
        fill="#1D8649"
      />
      <g style={{ mixBlendMode: "screen" }}>
        <ellipse
          cx="125.633"
          cy="193.978"
          rx="19.8445"
          ry="211.675"
          transform="rotate(-24.3649 125.633 193.978)"
          fill="url(#paint0_radial_1462_133)"
        />
      </g>
      <g style={{ mixBlendMode: "screen" }}>
        <ellipse
          cx="19.8445"
          cy="211.675"
          rx="19.8445"
          ry="211.675"
          transform="matrix(0.910937 0.412546 0.412546 -0.910937 25.8362 595.316)"
          fill="url(#paint1_radial_1462_133)"
        />
      </g>
      <g style={{ mixBlendMode: "screen" }}>
        <rect
          x="61.6377"
          y="54.2402"
          width="5.90541"
          height="307.531"
          transform="rotate(-24.36 61.6377 54.2402)"
          fill="url(#paint2_radial_1462_133)"
        />
      </g>
      <g style={{ mixBlendMode: "screen" }}>
        <rect
          width="5.90541"
          height="312.618"
          transform="matrix(0.910972 0.412469 0.412469 -0.910972 66.0667 542.11)"
          fill="url(#paint3_radial_1462_133)"
        />
      </g>
      <defs>
        <radialGradient
          id="paint0_radial_1462_133"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(125.633 193.978) rotate(90) scale(211.675 19.8445)"
        >
          <stop stopColor="#249DD1" />
          <stop offset="1" stopColor="grey" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_1462_133"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(19.8445 211.675) rotate(90) scale(211.675 19.8445)"
        >
          <stop stopColor="#249DD1" />
          <stop offset="1" stopColor="grey" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint2_radial_1462_133"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(64.5904 208.006) rotate(90) scale(153.765 2.95271)"
        >
          <stop stopColor="#249DD1" />
          <stop offset="1" stopColor="grey" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint3_radial_1462_133"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(2.95271 156.309) rotate(90) scale(156.309 2.95271)"
        >
          <stop stopColor="#249DD1" />
          <stop offset="1" stopColor="grey" stopOpacity="0" />
        </radialGradient>
      </defs>
    </motion.svg>
  );
};

export default Arrow;
