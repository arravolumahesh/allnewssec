import {
  capitalize,
  Stack,
  StackProps,
  SvgIconProps,
  SvgIconTypeMap,
  Typography,
  TypographyProps,
} from "@mui/material";
import { InfoOutlined } from "@mui/icons-material";
import { ReactNode } from "react";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { isString } from "class-validator";

export interface HelperTextProps extends Omit<StackProps, "children"> {
  icon?: OverridableComponent<SvgIconTypeMap> & { muiName: string };
  iconProps?: SvgIconProps;
  label: ReactNode;
  labelTypographyProps?: TypographyProps;
}

const HelperText = (props: HelperTextProps) => {
  const { icon, iconProps, label, labelTypographyProps, ...rest } = props;
  const LabelIcon = icon || InfoOutlined;

  return (
    <Stack
      component={"span"}
      direction={"row"}
      alignItems={"flex-start"}
      spacing={0.5}
      color={"currentColor"}
      {...rest}
    >
      <LabelIcon fontSize={"small"} color={"inherit"} {...iconProps} />
      <Typography
        component={"span"}
        variant={"body2"}
        color={"inherit"}
        fontWeight={"normal"}
        lineHeight={1.2}
        whiteSpace={"pre-line"}
        {...labelTypographyProps}
      >
        {isString(label) ? capitalize(label).replace("_", " ") : label}
      </Typography>
    </Stack>
  );
};

export default HelperText;
