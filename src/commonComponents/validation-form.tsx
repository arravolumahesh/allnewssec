import {
  FieldValues,
  FormProvider,
  useForm,
  UseFormProps,
  UseFormReturn,
} from "react-hook-form";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Stack, StackProps } from "@mui/material";
import InputValidatorsMapper, {
  InputValidatorsMapperProps,
} from "./input-validator-mapper";
import { useEffect } from "react";
import { SubscriptionLike } from "rxjs";

export interface ValidatorFormProps<T extends FieldValues>
  extends InputValidatorsMapperProps<T, typeof Grid2, typeof Grid2>,
    Omit<StackProps<"form">, "children" | "onSubmit"> {
  onValid?: (data: T) => void;
  onInvalid?: (errors: unknown) => void;
  formProps?: UseFormProps<T>;
  getFormMethods?: (
    formMethods: UseFormReturn<T>,
  ) => Omit<SubscriptionLike, "closed"> | void;
}

const ValidatorForm = <T extends FieldValues = FieldValues>(
  props: ValidatorFormProps<T>,
) => {
  const {
    onValid = () => {},
    onInvalid = () => {},
    formProps,
    getFormMethods,
    Dto,
    inputFields,
    SubmitButtonProps = { children: "Submit" },
    ButtonItemComponentProps,
    WrapperComponentProps,
    ItemComponentProps,
    ItemComponent,
    WrapperComponent,
    isLoading,
    ...rest
  } = props;

  const formMethods = useForm<T>({
    mode: "all",
    delayError: 400,
    criteriaMode: "all",
    reValidateMode: "onChange",
    shouldFocusError: true,
    progressive: true,
    ...formProps,
  });
  const { handleSubmit } = formMethods;

  useEffect(() => {
    const formMethodReturn = getFormMethods && getFormMethods(formMethods);
    return () => {
      formMethodReturn?.unsubscribe();
    };
  }, [formMethods, getFormMethods]);

  // Todo add getFormMethods to props of input fields

  return (
    <FormProvider {...formMethods}>
      <Stack
        width={1}
        component={"form"}
        onSubmit={handleSubmit(onValid, onInvalid)}
        rowGap={3.5}
        {...rest}
      >
        <InputValidatorsMapper
          Dto={Dto}
          inputFields={inputFields}
          WrapperComponent={WrapperComponent || Grid2}
          WrapperComponentProps={{
            container: true,
            p: 0,
            columnSpacing: 3,
            rowSpacing: 3.5,
            ...WrapperComponentProps,
          }}
          ItemComponent={ItemComponent || Grid2}
          ItemComponentProps={{
            xs: 12,
            ...ItemComponentProps,
          }}
          isLoading={isLoading}
          SubmitButtonProps={SubmitButtonProps}
          ButtonItemComponentProps={{
            xs: 12,
            md: 6,
            ...ButtonItemComponentProps,
          }}
        />
      </Stack>
    </FormProvider>
  );
};

export default ValidatorForm;
