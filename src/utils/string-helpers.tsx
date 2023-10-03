import { SxProps, Theme } from "@mui/material";

export const textEllipsis = (maxLines?: number): SxProps<Theme> => {
  return {
    maxLines: maxLines || 1,
    lineClamp: maxLines || 1,
    textOverflow: "ellipsis",
    display: "-webkit-box",
    overflow: "hidden",
    WebkitLineClamp: maxLines || 1,
    WebkitBoxOrient: "vertical",
  };
};

export const onlyCharacters = (value: string) => {
  return value.replace(new RegExp("\\d", "g"), "");
};
export const onlyNumerics = (value: string) => {
  return value.replace(new RegExp("([^0-9])", "g"), "");
};
