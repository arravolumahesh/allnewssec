import ValidationForm, { ValidatorFormProps } from "@cc/validation-form";
import { inputValidationResolver } from "@cc/input-validator-mapper";
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  Length,
  ValidateIf,
} from "class-validator";
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const RestockFridges = () => {
  const [employee, setEmployee] = useState("no");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmployee((event.target as HTMLInputElement).value);
  };
  return (
    <>
      <Typography fontSize={"24px !important"} mb={{ xs: 3, md: 4 }}>
        Volunteer Now!
      </Typography>
      <ValidationForm
        Dto={RestockFridgesDto}
        inputFields={inputFields}
        formProps={{
          resolver: inputValidationResolver(RestockFridgesDto),
        }}
        onValid={(data) => console.log(data)}
        onInvalid={(errors) => console.log(errors)}
        WrapperComponentProps={{
          columnSpacing: 3,
          rowSpacing: 3,
        }}
        SubmitButtonProps={{
          children: "Volunteer Now",
          sx: {
            width: {
              xs: "100%",
              md: "100%",
            },
          },
        }}
      />
      <Stack
        rowGap={1.5}
        p={3}
        bgcolor={"rgba(0, 0, 0, 0.15)"}
        mt={{ xs: 2, md: 3 }}
        // mb={{ xs: 2, md: 4 }}
      >
        <Typography>Are you a Bajaj Auto Employee?</Typography>
        <RadioGroup
          row
          sx={{ columnGap: 8 }}
          value={employee}
          onChange={handleChange}
        >
          <FormControlLabel
            value={"yes"}
            sx={{
              "*": {
                color: "#DADADA",
              },
            }}
            control={
              <Radio
                sx={{
                  py: 0,
                }}
              />
            }
            label='Yes'
          />
          <FormControlLabel
            value={"no"}
            sx={{
              "*": {
                color: "#DADADA",
              },
            }}
            control={
              <Radio
                sx={{
                  py: 0,
                }}
              />
            }
            label='No'
          />
        </RadioGroup>
        <TextField
          disabled={employee === "no"}
          variant='outlined'
          placeholder='Enter Employee ID'
        />
      </Stack>
    </>
  );
};
export default RestockFridges;

class RestockFridgesDto {
  @IsNotEmpty()
  name: string;

  @IsPhoneNumber("IN")
  @IsNotEmpty()
  phone: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}

const inputFields: ValidatorFormProps<RestockFridgesDto>["inputFields"] = [
  {
    name: "name",
    placeholder: "Name",
  },
  {
    name: "email",
    placeholder: "Email ID",
    ItemComponentProps: {
      md: 6,
    },
  },
  {
    name: "phone",
    placeholder: "Phone Number",
    ItemComponentProps: {
      md: 6,
    },
  },
];
