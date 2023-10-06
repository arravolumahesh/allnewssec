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

const EnquireAboutFundraising = () => {
  return (
    <ValidationForm
      Dto={EnquireAboutFundraisingDto}
      inputFields={inputFields}
      formProps={{
        resolver: inputValidationResolver(EnquireAboutFundraisingDto),
      }}
      onValid={(data) => console.log(data)}
      onInvalid={(errors) => console.log(errors)}
      WrapperComponentProps={{
        columnSpacing: 3,
        rowSpacing: 3,
      }}
      SubmitButtonProps={{
        children: "Submit",
        sx: {
          width: {
            xs: "100%",
            md: "100%",
          },
        },
      }}
    />
  );
};
export default EnquireAboutFundraising;

class EnquireAboutFundraisingDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsPhoneNumber("IN")
  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  organization: string;

  @IsNotEmpty()
  city: string;

  @ValidateIf((_o, v) => !!v)
  @IsOptional()
  @IsNotEmpty()
  InitiativeCategory: string;

  @IsNotEmpty()
  Amount: string;

  @Length(10, 500)
  @IsNotEmpty()
  message: string;
}

const inputFields: ValidatorFormProps<EnquireAboutFundraisingDto>["inputFields"] =
  [
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
    {
      name: "organization",
      placeholder: "Your Organization Name",
      ItemComponentProps: {
        md: 6,
      },
    },
    {
      name: "city",
      placeholder: "City",
      ItemComponentProps: {
        md: 6,
      },
    },
    {
      name: "InitiativeCategory",
      placeholder: "Initiative Category (optional)",
      select: true,
      ItemComponentProps: {
        md: 6,
      },
    },
    {
      name: "Amount",
      placeholder: "Amount to be raised (in ₹)",
      ItemComponentProps: {
        md: 6,
      },
    },
    {
      name: "message",
      placeholder: "Enter A Message",
      multiline: true,
    },
  ];
