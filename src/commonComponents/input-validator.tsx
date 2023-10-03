import {
  IconButton,
  InputAdornment,
  inputClasses,
  InputProps,
  outlinedInputClasses,
  styled,
  SxProps,
  TextField,
  TextFieldProps,
  Theme,
  Typography,
} from "@mui/material";
import {
  ChangeEvent,
  Dispatch,
  memo,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { isObject, isString, merge, startCase } from "lodash";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import HelperText from "./helper-text";
import { onlyCharacters, onlyNumerics } from "@util/string-helpers";
import { deepmerge } from "@mui/utils";

export type InputValidatorProps = {
  label?: string;
  helperText?: string;
  onError?: (error: any) => void;
  isTypeAlpha?: boolean;
  isTypeNumeric?: boolean;
  setValueOnChange?: Dispatch<SetStateAction<any>>;
} & TextFieldProps;

const MyTextField = styled<typeof TextField>((props) => {
  const {
    InputLabelProps,
    FormHelperTextProps,
    InputProps,
    type,
    ...restTextFieldProps
  } = props;
  const startAdornment: InputProps["startAdornment"] =
    InputProps?.startAdornment ? (
      <InputAdornment position={"start"}>
        {InputProps?.startAdornment}
      </InputAdornment>
    ) : null;
  const endAdornment: InputProps["endAdornment"] = InputProps?.endAdornment ? (
    <InputAdornment position={"end"}>{InputProps?.endAdornment}</InputAdornment>
  ) : null;
  return (
    <TextField
      InputLabelProps={deepmerge(
        { sx: labelPropsSx, shrink: true },
        InputLabelProps,
      )}
      FormHelperTextProps={deepmerge(
        { sx: helperPropsSx },
        FormHelperTextProps,
      )}
      InputProps={merge({ sx: inputPropsSx }, InputProps, {
        startAdornment,
        endAdornment,
      })}
      {...restTextFieldProps}
    />
  );
})(({ theme }) => {
  return theme.unstable_sx({
    [`.${outlinedInputClasses.notchedOutline}`]: {
      top: 0,
      legend: {
        display: "none",
      },
    },
    [`.${inputClasses.underline}`]: {
      mt: 0,
    },
  });
});

const InputValidator = (props: InputValidatorProps) => {
  const {
    label,
    helperText,
    isTypeAlpha,
    isTypeNumeric,
    value: tempValue,
    setValueOnChange,
    onChange,
    InputProps,
    ...rest
  } = props;

  const [value, setValue] = useState(String(tempValue || ""));
  const isPassword = rest.type === "password";
  const [isShowPassword, setIsShowPassword] = useState(false);
  const Icon = isPassword
    ? isShowPassword
      ? VisibilityOff
      : Visibility
    : null;

  useEffect(() => {
    setValue(
      isObject(tempValue) ? JSON.stringify(tempValue) : String(tempValue || ""),
    );
  }, [label, tempValue]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (isTypeAlpha) {
        e.target.value = onlyCharacters(e.target.value);
      }
      if (isTypeNumeric) {
        e.target.value = onlyNumerics(e.target.value);
      }
      setValue(e.target.value);
      setValueOnChange && setValueOnChange(e.target.value);
      onChange && onChange(e);
    },
    [isTypeAlpha, isTypeNumeric, onChange, setValueOnChange],
  );

  return (
    <MyTextField
      fullWidth
      value={value}
      placeholder={
        rest.placeholder || isString(label)
          ? startCase("Enter" + label)
          : undefined
      }
      onChange={handleChange}
      InputProps={{
        type: isPassword ? (isShowPassword ? "text" : "password") : rest.type,
        endAdornment: Icon ? (
          <IconButton
            color={"default"}
            onClick={() => setIsShowPassword(!isShowPassword)}
          >
            <Icon />
          </IconButton>
        ) : undefined,
        ...InputProps,
      }}
      {...(typeof label === "string"
        ? {
            label: <Typography variant={"body1"}>{label}</Typography>,
          }
        : { label })}
      {...(typeof helperText === "string"
        ? {
            helperText: <HelperText label={helperText} />,
          }
        : { helperText })}
      {...rest}
    />
  );
};
export default memo(InputValidator, (prevProps, nextProps) => {
  return (
    prevProps.value === nextProps.value &&
    prevProps.error === nextProps.error &&
    prevProps.helperText === nextProps.helperText &&
    prevProps.disabled === nextProps.disabled &&
    prevProps.children === nextProps.children
  );
});

const labelPropsSx: SxProps<Theme> = {
  position: "relative",
  fontWeight: 400,
  animation: "none",
  transform: "none",
  color: "inherit",
  textTransform: "capitalize",
  mb: 1,
  "&.Mui-focused": {
    color: "text.secondary",
  },
};

const inputPropsSx: SxProps<Theme> = {
  input: {
    "&::-ms-clear, &::-ms-reveal": {
      display: "none",
    },
  },
};

const helperPropsSx: SxProps<Theme> = {
  m: 0,
  mt: 1.5,
  lineHeight: 1.15,
  color: "text.secondary",
};
