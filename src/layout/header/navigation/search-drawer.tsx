"use client";
import { sxArrayUtil } from "@util/sx-helpers";
import { CloseRounded, SearchRounded } from "@mui/icons-material";
import {
  alpha,
  Button,
  Drawer,
  IconButton,
  IconButtonProps,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import SectionWrapper from "@cc/section-wrapper";
import { appbarHeight } from "@/layout/header/reactive-appbar";
import BorderedIconButton from "@cc/bordered-icon-button";

export interface SearchDrawerTogglerProps
  extends Omit<IconButtonProps, "children"> {}

const SearchDrawerToggler = (props: SearchDrawerTogglerProps) => {
  const { sx, ...restIconButtonProps } = props;
  const [isDrawer, setIsDrawer] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  return (
    <>
      <BorderedIconButton
        sx={[...sxArrayUtil(sx)]}
        onClick={() => {
          setIsDrawer((prev) => !prev);
        }}
        color={"secondary"}
        size={"small"}
        {...restIconButtonProps}
      >
        {isDrawer ? <CloseRounded /> : <SearchRounded />}
      </BorderedIconButton>
      <Drawer
        open={isDrawer}
        variant={"temporary"}
        onClose={() => {
          setIsDrawer(false);
        }}
        anchor={"top"}
        PaperProps={{
          sx: (theme) => ({
            mt: appbarHeight,
            background: alpha(theme.palette.common.white, 0.96),
          }),
        }}
      >
        <SectionWrapper
          SectionProps={{
            bgcolor: "background.paper",
          }}
          py={0}
        >
          <TextField
            variant={"standard"}
            fullWidth
            placeholder={"Search for initiatives, companies, and more"}
            value={searchKeyword}
            onChange={(e) => {
              setSearchKeyword(e.target.value);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment
                  position={"start"}
                  sx={{
                    mr: {
                      xs: 1,
                      md: 2,
                    },
                  }}
                >
                  <SearchRounded
                    sx={{
                      color: "grey.600",
                    }}
                  />
                </InputAdornment>
              ),
              ...(searchKeyword.length > 0 && {
                endAdornment: (
                  <InputAdornment
                    position={"end"}
                    onClick={() => {
                      setSearchKeyword("");
                    }}
                  >
                    <IconButton>
                      <CloseRounded
                        sx={{
                          color: "grey.600",
                        }}
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }),
            }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: {
                xs: 56,
                md: 72,
                xl: 80,
              },
              bgcolor: "transparent",
              fontSize: { xs: "16px", md: "20px", xl: "24px" },
            }}
          />
        </SectionWrapper>
        <SectionWrapper
          direction={{ md: "row" }}
          sx={{
            py: 3,
            alignItems: { md: "center" },
            justifyContent: "flex-start",
            color: "grey.600",
            columnGap: 2,
            rowGap: 2,
          }}
        >
          <Typography variant={"body2"} color={"inherit"}>
            Suggestions
          </Typography>
          <Stack direction={"row"} flexWrap={"wrap"} columnGap={1} rowGap={1}>
            {suggestions.map((item, index) => {
              return (
                <Button
                  key={`${item}-${index}`}
                  variant={"outlined"}
                  onClick={() => {
                    setSearchKeyword(item);
                  }}
                  sx={{
                    height: {
                      xs: 34,
                      md: 39,
                      xl: 44,
                    },
                  }}
                >
                  {item}
                </Button>
              );
            })}
          </Stack>
        </SectionWrapper>
      </Drawer>
    </>
  );
};

export default SearchDrawerToggler;

const suggestions = [
  "Sustainability",
  "History of Bajaj",
  "Awards",
  "Get Involved",
  "Reports",
];
