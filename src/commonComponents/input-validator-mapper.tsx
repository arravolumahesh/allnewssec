import { isString, map, merge, startCase } from "lodash";
import {
  Controller,
  ControllerProps,
  FieldValues,
  useFormContext,
} from "react-hook-form";
import { ClassConstructor } from "class-transformer";
import { ComponentProps, ComponentType, Fragment } from "react";
import {
  classValidatorResolver,
  Resolver,
} from "@hookform/resolvers/class-validator";
import InputValidator, { InputValidatorProps } from "./input-validator";

export type InputValidatorsMapperProps<
  T extends FieldValues,
  W extends ComponentType<any> = ComponentType<any>,
  I extends ComponentType = ComponentType,
> = {
  Dto: ClassConstructor<T>;
  inputFields: (Pick<ControllerProps<T>, "name" | "rules"> &
    InputValidatorProps & {
      ItemComponentProps?: ComponentProps<I>;
    })[];
} & WrapperAndItemType<W, I>;

type WrapperAndItemType<W extends ComponentType, I extends ComponentType> = {
  WrapperComponent?: W;
  WrapperComponentProps?: ComponentProps<W>;
  ItemComponent?: I;
  ItemComponentProps?: ComponentProps<I>;
};

const InputValidatorsMapper = <
  T extends FieldValues = FieldValues,
  W extends ComponentType<any> = ComponentType<any>,
  I extends ComponentType<any> = ComponentType<any>,
>(
  props: InputValidatorsMapperProps<T, W, I>,
) => {
  const {
    inputFields,
    WrapperComponent = Fragment,
    WrapperComponentProps,
    ItemComponent = Fragment,
    ItemComponentProps,
  } = props;
  const { control } = useFormContext<T>();

  return (
    <WrapperComponent {...WrapperComponentProps}>
      {map(inputFields, (value, index) => {
        const {
          name,
          rules,
          ItemComponentProps: ItemWrapperProps,
          ...rest
        } = value;
        const { label } = rest;
        const controllerRules: ControllerProps["rules"] = {};
        return (
          <ItemComponent
            key={name + index.toString()}
            {...ItemComponentProps}
            {...ItemWrapperProps}
          >
            <Controller
              control={control}
              name={name}
              rules={merge(controllerRules, rules)}
              render={({ field, fieldState }) => {
                const { ref, ...restFields } = field;
                const { error } = fieldState;
                return (
                  <InputValidator
                    error={!!error?.message}
                    placeholder={
                      isString(label)
                        ? startCase("enter" + label)
                        : startCase("enter" + name)
                    }
                    inputRef={ref}
                    helperText={error?.message}
                    {...rest}
                    {...restFields}
                  />
                );
              }}
            />
          </ItemComponent>
        );
      })}
    </WrapperComponent>
  );
};

export default InputValidatorsMapper;

export const inputValidationResolver: Resolver = (
  schema,
  schemaOptions,
  resolverOptions,
) =>
  classValidatorResolver(
    schema,
    merge(schemaOptions, defaultSchemaOptions),
    merge(resolverOptions, defaultResolverOptions),
  );

export const defaultSchemaOptions: Parameters<Resolver>[1] = {
  validator: {
    forbidNonWhitelisted: true,
    forbidUnknownValues: true,
    enableDebugMessages: true,
    whitelist: true,
    validationError: { target: true, value: true },
  },
};
export const defaultResolverOptions: Parameters<Resolver>[2] = {
  mode: "async",
  rawValues: true,
};
