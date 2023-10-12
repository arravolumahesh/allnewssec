"use client";
import SectionWrapper from "@cc/section-wrapper";
import {
  arrowImageTransition,
  formStagger,
  formStaggerChildrenRight,
} from "@cc/animations";
import { MotionStack } from "@cc/motion-components";
import React, { ReactNode, SyntheticEvent, useCallback, useState } from "react";
import {
  MenuItem,
  Tab,
  tabClasses,
  TabProps,
  Tabs,
  Typography,
} from "@mui/material";
import { inputValidationResolver } from "@cc/input-validator-mapper";
import { IsNotEmpty } from "class-validator";
import ValidationForm, { ValidatorFormProps } from "@cc/validation-form";

import artfulGiving from "./images/programmes/artful-giving.jpg";
import summerWorkshop from "./images/programmes/summer-workshop.jpg";
import ArrowImage from "@cc/arrow-image";
import { KeyboardArrowDown } from "@mui/icons-material";

function a11yProps(index: number): TabProps {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `programmes-tab-panel-${index}`,
    sx: {
      fontSize: {
        xs: 20,
        md: 26,
        xxl: 32,
      },
      fontWeight: 400,
      textTransform: { md: "uppercase" },
      borderColor: (theme) => theme.palette.secondary.main,
      color: "secondary.500",
      opacity: 0.6,
      [`&.${tabClasses.selected}`]: {
        opacity: 1,
      },
    },
  };
}

const Programmes = () => {
  const [value, setValue] = useState(0);

  const handleChange = useCallback(
    (_event: SyntheticEvent, newValue: number) => {
      setValue(newValue);
    },
    [],
  );

  return (
    <SectionWrapper
      SectionProps={{
        sx: {
          background: (theme) => theme.palette.gradient.lightToDark,
        },
      }}
      direction={{ xs: "column", lg: "row" }}
      rowGap={3}
      columnGap={5}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <ArrowImage
        src={value === 0 ? artfulGiving : summerWorkshop}
        alt=""
        width={470}
        height={545}
        sx={{
          display: {
            xs: "none",
            lg: "block",
          },
          minWidth: 217,
          width: "100%",
          height: "100%",
          aspectRatio: "1/1.2",
        }}
        ContainerProps={{ ...arrowImageTransition }}
      />
      <MotionStack
        rowGap={5}
        maxWidth={{ xs: 1, md_lg: 670 }}
        variants={formStagger}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: true }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="programmes tabs"
          textColor={"secondary"}
          TabIndicatorProps={{
            sx: {
              backgroundColor: (theme) => theme.palette.secondary.main,
            },
          }}
        >
          <Tab label="Artful Giving" {...a11yProps(0)} />
          <Tab label="Summer Workshop" {...a11yProps(1)} />
        </Tabs>
        <MotionStack
          rowGap={{ xs: 4, md: 5 }}
          variants={formStaggerChildrenRight}
        >
          <Typography
            fontSize={"18px"}
            textAlign={{
              xs: "center",
              sm: "left",
            }}
          >
            {value === 0
              ? "Spread your talent in the areas of music, culture, dance, spirituality, meditation, etc. and conduct classes for our beneficiaries."
              : "Conduct workshops for women and children covering a range of activities including art, crafts, life skills, fine arts, dance, music, cooking, and much more."}
          </Typography>

          <ArrowImage
            src={value === 0 ? artfulGiving : summerWorkshop}
            alt=""
            width={342}
            height={398}
            sx={{
              display: {
                xs: "block",
                lg: "none",
              },
              mx: "auto",
              width: "100%",
              maxWidth: 342,
              maxHeight: 398,
              aspectRatio: "1/1.2",
            }}
            ContainerProps={{ ...arrowImageTransition }}
          />

          <ValidationForm
            Dto={ProgrammeFormDto}
            inputFields={inputFields}
            formProps={{
              resolver: inputValidationResolver(ProgrammeFormDto),
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
            // InputFieldsProps={{
            //   color: "secondary",
            //   SelectProps: {
            //     displayEmpty: true,
            //     IconComponent: KeyboardArrowDown,
            //   },
            // }}
          />
        </MotionStack>
      </MotionStack>
    </SectionWrapper>
  );
};

export default Programmes;

class ProgrammeFormDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  profession: string;
  @IsNotEmpty()
  phone: string;
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  session: string;
  @IsNotEmpty()
  volunteerCenter: string;
}

const inputFields: ValidatorFormProps<ProgrammeFormDto>["inputFields"] = [
  {
    name: "name",
    placeholder: "Name",
    ItemComponentProps: {
      md: 6,
    },
  },
  {
    name: "profession",
    placeholder: "Profession",
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
    name: "email",
    placeholder: "Email ID",
    ItemComponentProps: {
      md: 6,
    },
  },
  {
    name: "session",
    select: true,
    color: "secondary",
    SelectProps: {
      renderValue: (value: unknown) => {
        return (
          value === "" ? "What session can you offer?" : value
        ) as ReactNode;
      },
      displayEmpty: true,
      IconComponent: KeyboardArrowDown,
    },
    ItemComponentProps: {
      md: 6,
    },
    children: ["Option 1", "Option 2", "Option 3", "Option 4"].map(
      (item, idx) => (
        <MenuItem key={idx} value={item} sx={{ py: 2 }}>
          {item}
        </MenuItem>
      ),
    ),
  },
  {
    name: "volunteerCenter",
    select: true,
    color: "secondary",
    SelectProps: {
      renderValue: (value: unknown) => {
        return (
          value === "" ? "Preferred Volunteering Center" : value
        ) as ReactNode;
      },
      displayEmpty: true,
      IconComponent: KeyboardArrowDown,
    },
    ItemComponentProps: {
      md: 6,
    },
    children: ["Option 1", "Option 2", "Option 3", "Option 4"].map(
      (item, idx) => (
        <MenuItem key={idx} value={item} sx={{ py: 2 }}>
          {item}
        </MenuItem>
      ),
    ),
  },
];
