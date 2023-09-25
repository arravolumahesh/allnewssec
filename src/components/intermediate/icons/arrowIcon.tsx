import * as React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

export default function SvgIconArrow(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="37"
        viewBox="0 0 36 37"
        fill="none"
      >
        <path
          d="M12.2043 25.9954L19.7026 18.485L12.2043 10.9868C11.4497 10.2321 11.4497 9.00873 12.2043 8.26621C12.9469 7.51152 14.1702 7.51152 14.9249 8.26621L23.8047 17.1338C24.5472 17.8885 24.5472 19.1119 23.8047 19.8665L14.9249 28.7342C14.1702 29.4889 12.9469 29.4889 12.2043 28.7342C11.4618 27.9917 11.4497 26.744 12.2043 26.0015L12.2043 25.9954Z"
          fill="#005DAC"
        />
      </svg>
    </SvgIcon>
  );
}
