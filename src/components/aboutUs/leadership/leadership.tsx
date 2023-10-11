"use client";
import ArrowGradient from "@/commonComponents/arrow-gradient";
import { MotionTypography } from "@/commonComponents/motion-components";
import SectionWrapper from "@/commonComponents/section-wrapper";
import { H1, H6_2 } from "@/styles/theme/components/typography.fontvariant";
import { Stack } from "@mui/material";
import React, { useState } from "react";
import InitiativeHeroCard from "@c/ourCompanies/heroesOfInitiatives/initiative-hero-card";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import {
  arrowLeftToRightTransition,
  bottomToToptextTransition,
} from "@/commonComponents/animations";
import GalleryDialog from "./gallery-dialog";

const Leadership = () => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setactiveIndex] = useState(0);
  return (
    <SectionWrapper
      SectionProps={{
        bgcolor: "primary.main",
      }}
      ContainerProps={{ pt: "30px !important" }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        columnGap={1}
        mb={{ xs: 4, md: 2 }}
      >
        <ArrowGradient
          SVGProps={{
            width: 73,
            height: 191,
          }}
          display={{ xs: "none", md: "block" }}
          {...arrowLeftToRightTransition}
        />
        <MotionTypography
          component={"p"}
          variant='h1'
          variants={bottomToToptextTransition(0)}
          initial='initial'
          whileInView={"animate"}
          viewport={{ once: true }}
        >
          Our Inspiring Leadership
        </MotionTypography>
      </Stack>
      <Grid2
        container
        spacing={{ xs: 2, md: 3 }}
        // justifyContent={"space-between"}
        width={1}
      >
        {leaderData.map((item, idx) => (
          <Grid2
            key={idx}
            xs={6}
            md={4}
            // maxWidth={421}
            minHeight={{ xs: 234, md: "auto" }}
          >
            <InitiativeHeroCard
              isActive
              data={item}
              sx={{
                width: "100% !important",
                height: "100%",
                minWidth: "100%",
                backgroundPosition: "center",
              }}
              TitleTypographyProps={{
                sx: {
                  textTransform: "capitalize",
                  fontSize: H6_2,
                },
              }}
              ContentWrapperSxProps={{
                p: 1.5,
              }}
              onClick={() => {
                setOpen(true), setactiveIndex(idx);
              }}
            />
          </Grid2>
        ))}
      </Grid2>
      <GalleryDialog
        open={open}
        setOpen={setOpen}
        data={leaderData}
        activeIndex={activeIndex}
      />
    </SectionWrapper>
  );
};

export default Leadership;

const leaderData = [
  {
    title: "Rajiv Bajaj",
    designation: "Managing Director, Bajaj Auto",
    image:
      "https://s3-alpha-sig.figma.com/img/74a2/5f6c/3a772e8e39d50b748e4ee67abf614c80?Expires=1698019200&Signature=B4wdcB-keD4eCHOuJK2v1bo0A3kgsTlfsUElqE72iWcC~H53lRklHdwcJ-th~u5F6I1mpdlKo3ezYzety1DYuvtjABDU1TOqzDBb27gd5HGMDcnza29zuoaAQFU1mFOBlzZfs-ToihRMkGvcAjcCVB6SzQR3-HcHzqd3nPUi4XANg-Ega9gutRWDQfLAnRrDH9QcpyShmybt8zSyYxKvZjeQtqO~aGbhDungCgzAWOEWNGvdOcX9cbN6M9ymvG5CiQXjDvCb4OmsecBsLmn4LAzetDLPViw0QnSzg8~SraxF0cfUjiaG539Nad~pNxwY~gk6xCP7xBtKgDY-b4yh-Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    quote: "Our goal is to transform lives and inspire change",
    biography:
      "Rajiv Bajaj excelled in Mechanical Engineering and Manufacturing Systems Engineering. Rising from the shop floor level at Bajaj Auto, he became the Managing Director in 2005. He has been instrumental in driving the company's motorcycle focus. Currently, he's shaping Bajaj Auto's global brand strategy by applying the scientific principles of Homoeopathy.",
  },
  {
    title: "Sanjiv Bajaj",
    designation: "Chairman and MD, Bajaj Finserv",
    image:
      "https://s3-alpha-sig.figma.com/img/6e45/8c58/c95b69560fa78e5a84de2ed1fb9aef2e?Expires=1698019200&Signature=o9l98ePZzOJvmN6LlbwqIWmRj8NccFcmV68ei4XjfaES9r3rI6Mg3RkVAkskjdF8EZxKGWWL4TRmViHrO1pkjtvjV1z4aQAMBbbrQAfS64lLIOXb3XqXPf-wukTHYqx3dwikYI2iojp2myBGxWSM4kLaD5y618DLcrfV4DKeAfCBz2KOAqihCaU4Cglq8cLMaFJAz0uD0hdclov7hO9DsU7-D3PEjw8EcMgDb9PidE28gQTQugqZI0V9-Owru2c69mFuHUJfuKR2FVCmFUdZIT8B62bk4JlWe2a-joSJJSbNZ~RzYBh9HIig1Dmz8JxWCrozFzR845lCfmSomRfksg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    quote: "Our goal is to transform lives and inspire change",
    biography:
      "Sanjiv Bajaj excelled in Mechanical Engineering and Manufacturing Systems Engineering. Rising from the shop floor level at Bajaj Auto, he became the Managing Director in 2005. He has been instrumental in driving the company's motorcycle focus. Currently, he's shaping Bajaj Auto's global brand strategy by applying the scientific principles of Homoeopathy.",
  },

  {
    title: "Niraj Bajaj",
    designation: "Chairman & MD, Mukand Limited",
    image:
      "https://s3-alpha-sig.figma.com/img/eb5c/9376/8d735e4ab4bf1106c174c541d8a7da34?Expires=1698019200&Signature=KeIq4jVsH6njWyJaFoMUr3uRHdmtMhncjHJgeKGgII7RCaJlLqm5P-NNf8cb111ln3eGoi73lvJ6flgUwQI9VgOa79cPttVUimB5Y6PfDv8DQWBOW3XPTTt0UqWcY9~2NchIlbPPuahwpIqeZdmTk3umhctFNj196j4IvaAJWedLytIBGtBCscnJ2ABTh6d7rUFwiO0lRWEf6jC8wDkjvwf0Lg2pXdv4ZWIGQnge0vxSLUJXbqp5a3PPdZGR5A2o44CBvxNERobNWZqAALNOM0mAWXdC0RkE7EfxV9NEGCWa4o~CfVyLi3zmVyMmySA1pe9~AaxriynaVuhPwsNwJw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    quote: "Our goal is to transform lives and inspire change",
    biography:
      "Niraj Bajaj excelled in Mechanical Engineering and Manufacturing Systems Engineering. Rising from the shop floor level at Bajaj Auto, he became the Managing Director in 2005. He has been instrumental in driving the company's motorcycle focus. Currently, he's shaping Bajaj Auto's global brand strategy by applying the scientific principles of Homoeopathy.",
  },
  {
    title: "Shekhar Bajaj",
    designation: "Chairman & MD, Bajaj Electricals",
    image:
      "https://s3-alpha-sig.figma.com/img/5b05/60eb/6a73d00150c2e5a9ccf3c5851ec69e0f?Expires=1698019200&Signature=X8ZF~kHAEmnIEnCVzpCECpQ8cBbr2VGpA9Nm3hVU74byZX2Xh2zEcAAY6K2hTDjv5MNw5CUcqvyVurgW-Q1Yix7RhiPLuRgtMebBL7RKlWJs2HKzFVAodybooQ8rS7Gcfhs0tWRu6nCJwruCP70TNTbi1b7oDIdky2mkNqc123Z7gPnwu75JGuny1skcocrkNmehj~WDaBENrxVW1q3kDMZljxwgTfdbleMWo-0CKVfbmAOtFM-gsmliv6Wb4miZ-N92ArTyE62BitTVPHG4Q0Xz6agj4pwLQB0SD4hkoLb-nWkxFC0Ctb2RHlVhs42Wo44umLECPVhivYCSJS0OJQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    quote: "Our goal is to transform lives and inspire change",
    biography:
      "Shekhar Bajaj excelled in Mechanical Engineering and Manufacturing Systems Engineering. Rising from the shop floor level at Bajaj Auto, he became the Managing Director in 2005. He has been instrumental in driving the company's motorcycle focus. Currently, he's shaping Bajaj Auto's global brand strategy by applying the scientific principles of Homoeopathy.",
  },
  {
    title: "Madhur Bajaj",
    designation: "Non-Executive Director, Bajaj Auto",
    image:
      "https://s3-alpha-sig.figma.com/img/238f/26b9/7f5a854647205b9e03810417f120b89c?Expires=1698019200&Signature=X5J21h-cg-Gp7KFCyWLlAj7-p5Ij0JCefXYVlfXKJCBMQPqLAJHGk~FRsp33AJ82Ztyiv0~x1ZMqzcXvPFfldwJ7O8coqPfZsOcz9483XOBsR5xbeVhZywXsvCx0mPOXrQ5X0YQ0VznxcbDYb0enpWT0CnhRcU59MXITJOMP9J6hYjr6mT32nfQa1-mNjqSUwi8ga7z45G-2XsObXn3wW10M9etVqWoZoHGBVHcMm-Fow8QJBFJUI1MjKuSIBnynZDixsKjRTYFhGBwxvtzV8lSc3ZUI623iREo9vstyjtrCzQ9CK2a8CmngqBIbpIDNC16-MFBNV60sXbMirSC8fA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    quote: "Our goal is to transform lives and inspire change",
    biography:
      "Madhur Bajaj excelled in Mechanical Engineering and Manufacturing Systems Engineering. Rising from the shop floor level at Bajaj Auto, he became the Managing Director in 2005. He has been instrumental in driving the company's motorcycle focus. Currently, he's shaping Bajaj Auto's global brand strategy by applying the scientific principles of Homoeopathy.",
  },
  {
    title: "Minal Bajaj",
    designation: "Director, Jamnalal Bajaj Foundation",
    image:
      "https://s3-alpha-sig.figma.com/img/4ed1/d333/458806fe560aa0c4795b31741fef8ed1?Expires=1698019200&Signature=e1~4rzjOXlUBhMvF7GNaizahIQxn~8duCLDwUsKhkkYXNVVtj8ymfrVgh2HW81wJIwbL4zpIdX1hTXzVyQ~TFeXfuml7NvkRQscQ-v5Ie5EmgR1skENO0OUM6PvIXncIm7Scv7jpqJT0D3e175rQ2upjahDhCXV6CewlPJqz3UYFUAPZQn255CAnSvVtMSo9DyHqmmKm8thq1F5qzch91KttnaIkBui~Nn7jqOJFu4CSv-Trp21NagBE2iHTj4iDmGJ2JylyA~ldZSqy9dKyv18sbpcNJo6F9vXSHjkZg0NRLH9Pwm~eUyPI8zqFhaQbL4LTcWbB83QOeW3Vi2dKfw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    quote: "Our goal is to transform lives and inspire change",
    biography:
      "Minal Bajaj excelled in Mechanical Engineering and Manufacturing Systems Engineering. Rising from the shop floor level at Bajaj Auto, he became the Managing Director in 2005. He has been instrumental in driving the company's motorcycle focus. Currently, he's shaping Bajaj Auto's global brand strategy by applying the scientific principles of Homoeopathy.",
  },
];

export type LeaderData = typeof leaderData;
