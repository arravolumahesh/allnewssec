"use client";
import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { ReactNode, useState } from "react";
import AnimatedButton, { AnimatedButtonProps } from "./animated-button";
import { H5_1 } from "@/styles/theme/components/typography.fontvariant";
import { CalendarToday, Call, Close, LocationOn } from "@mui/icons-material";
import { StaticImageData } from "next/image";

interface FormDialogButtonProps extends AnimatedButtonProps {
  title: string;
  image: StaticImageData | string;
  description?: string;
  region?: string;
  date?: string;
  number?: string;
  ReactiveForm?: ReactNode;
}

const FormDialogButton = (props: FormDialogButtonProps) => {
  const {
    image,
    title,
    description,
    region,
    date,
    number,
    ReactiveForm,
    ...restAnimatedButtonProps
  } = props;
  const [open, setOpen] = useState(false);
  const fullScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  return (
    <>
      <AnimatedButton
        sx={{
          fontSize: "18px !important",
          width: { xs: 1, xl: "max-content" },
        }}
        onClick={() => setOpen(true)}
        {...restAnimatedButtonProps}
      />
      <Dialog
        onClose={() => setOpen(false)}
        open={open}
        fullWidth
        fullScreen={fullScreen}
        maxWidth={"lg_xl"}
        scroll='paper'
      >
        <DialogContent
          sx={{ width: 1, p: 0, position: "relative", bgcolor: "primary.main" }}
        >
          <IconButton
            onClick={() => setOpen(false)}
            sx={{
              position: "absolute",
              top: 24,
              right: 24,
              color: "common.white",
              zIndex: 1,
            }}
          >
            <Close />
          </IconButton>
          <Stack
            width={1}
            direction={{ xs: "column", md: "row" }}
            alignItems={{ xs: "none", md: "center" }}
          >
            <Stack
              width={{ xs: 1, md: "40%" }}
              py={{ xs: 8, md: 9 }}
              px={{ xs: 3, md: 5 }}
              sx={{
                backgroundImage: `url(${image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              bgcolor={"rgba(0, 0, 0, 0.85)"}
              justifyContent={"space-between"}
              minWidth={{ xs: "none", md: 390 }}
              minHeight={{ xs: "none", md: 625 }}
              position='relative'
            >
              <Box
                sx={{
                  position: "absolute",
                  bgcolor: "#000000d9",
                  width: 1,
                  height: 1,
                  top: 0,
                  left: 0,
                }}
              />
              <Stack rowGap={5}>
                <Typography variant='h3' fontSize={H5_1}>
                  {title}
                </Typography>
                {/* ADD ACCORDION */}
                {description && (
                  <Typography variant='body1'>{description}</Typography>
                )}
              </Stack>
              {(region || date || number) && (
                <Stack rowGap={2} mt={3}>
                  {region && (
                    <Typography
                      display={"flex"}
                      gap={1}
                      alignItems={"center"}
                      fontSize={"16px"}
                    >
                      <LocationOn fontSize='small' /> {region}
                    </Typography>
                  )}

                  {date && (
                    <Typography
                      display={"flex"}
                      gap={1}
                      alignItems={"center"}
                      fontSize={"16px"}
                    >
                      <CalendarToday fontSize='small' />
                      {date}
                    </Typography>
                  )}
                  {number && (
                    <Typography
                      display={"flex"}
                      gap={1}
                      alignItems={"center"}
                      fontSize={"16px"}
                    >
                      <Call fontSize='small' /> {number}
                    </Typography>
                  )}
                </Stack>
              )}
            </Stack>
            <Stack
              width={{ xs: 1, md: "60%" }}
              py={{ xs: 4, md: 7 }}
              px={{ xs: 3, md: 5 }}
            >
              {ReactiveForm}
            </Stack>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FormDialogButton;
