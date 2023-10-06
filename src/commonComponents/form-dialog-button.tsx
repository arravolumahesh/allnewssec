"use client";
import {
  Dialog,
  DialogContent,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { ReactNode, useState } from "react";
import AnimatedButton, { AnimatedButtonProps } from "./animated-button";
import { H5_1 } from "@/styles/theme/components/typography.fontvariant";
import { CalendarToday } from "@mui/icons-material";

interface FormDialogButtonProps extends AnimatedButtonProps {
  ReactiveForm?: ReactNode;
}

const FormDialogButton = (props: FormDialogButtonProps) => {
  const { ReactiveForm, ...restAnimatedButtonProps } = props;
  const [open, setOpen] = useState(false);
  const fullScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md"),
  );
  return (
    <>
      <AnimatedButton
        onClick={() => setOpen(true)}
        {...restAnimatedButtonProps}
      />
      <Dialog
        onClose={() => setOpen(false)}
        open={open}
        fullWidth
        fullScreen={fullScreen}
        maxWidth={"lg_xl"}
        scroll="paper"
      >
        <DialogContent sx={{ width: 1, p: 0, bgcolor: "primary.main" }}>
          <Stack
            width={1}
            direction={{ xs: "column", md: "row" }}
            alignItems={{ xs: "none", md: "center" }}
          >
            <Stack
              width={{ xs: 1, md: "40%" }}
              py={{ xs: 3, md: 9 }}
              px={{ xs: 3, md: 5 }}
              bgcolor={"rgba(0, 0, 0, 0.85)"}
              justifyContent={"space-between"}
              minHeight={{ xs: "none", md: 625 }}
            >
              <Stack rowGap={5}>
                <Typography variant="h3" fontSize={H5_1}>
                  Restocking Community Fridges
                </Typography>
                {/* ADD ACCORDION */}
                <Typography variant="body1">
                  The Restocking Community Fridges volunteering event is an
                  initiative that aims to address food insecurity. The event
                  focuses on replenishing and maintaining community fridges
                  placed in public spaces to provide free and accessible food to
                  those in need.
                </Typography>
              </Stack>
              <Stack rowGap={2}>
                <Typography
                  display={"flex"}
                  gap={0.5}
                  alignItems={"center"}
                  fontSize={"16px"}
                >
                  <CalendarToday fontSize="small" /> Mumbai, Maharashtra
                </Typography>

                <Typography
                  display={"flex"}
                  gap={0.5}
                  alignItems={"center"}
                  fontSize={"16px"}
                >
                  <CalendarToday fontSize="small" />
                  15 July 2023 | 10:00 AM - 6:00 PM
                </Typography>
                <Typography
                  display={"flex"}
                  gap={0.5}
                  alignItems={"center"}
                  fontSize={"16px"}
                >
                  <CalendarToday fontSize="small" /> +91 7607907690
                </Typography>
              </Stack>
            </Stack>
            <Stack width={{ xs: 1, md: "60%" }}>{ReactiveForm}</Stack>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FormDialogButton;
