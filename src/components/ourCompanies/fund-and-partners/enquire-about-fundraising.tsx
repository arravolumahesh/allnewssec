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
    },
    {
      name: "email",
    },
    {
      name: "phone",
    },
    {
      name: "organization",
    },
    {
      name: "city",
    },
    {
      name: "InitiativeCategory",
    },
    {
      name: "Amount",
    },
    {
      name: "message",
    },
  ];
