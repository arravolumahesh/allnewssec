"use client";
import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { usePathname } from "next/navigation";
import { Typography } from "@mui/material";

export default function CommonBreadcrumb() {
  
  const paths = usePathname();
  const pathNames = paths && paths.split("/").filter((path) => path);

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon sx={{opacity:0.5}} fontSize="small" />}
        aria-label="breadcrumb"
        sx={{
          color:'inherit'
        }}
      >
        <Typography
          component={Link}
          sx={{
            opacity:0.5,
            '&:hover':{
              background:'none',              
            }
          }}
          href="/"
          underline="hover"
          
        >
          Home  
        </Typography>
        
        {pathNames &&
          pathNames.map((item, index) => {
            if(pathNames?.length === index+1){
              return(
                <Typography textTransform="capitalize" key={index}>
                  {item.replace("-", " ")}
                </Typography>
              )
            }

            return(
              <Typography
                  textTransform="capitalize"
                  component={Link}
                  sx={{
                    opacity:0.5,
                    '&:hover':{
                      background:'none'                     
                    }
                  }}
                  href={item}
                  underline="hover"                  
                  key={index}
                >
                  {item.replace("-", " ")}
                </Typography>
              )
          })}
      </Breadcrumbs>
    </Stack>
  );
}
