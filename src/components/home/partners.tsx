"use client";
import { LogoCard, LogoCardProps } from "@/commonComponents/cards/logoCard";
import {
  MaterialSwiper,
  MaterialSwiperSlide,
} from "@/commonComponents/material-components";
import { MotionTypography } from "@/commonComponents/motion-components";
import SectionWrapper from "@/commonComponents/section-wrapper";
import { H3_2 } from "@/styles/theme/components/typography.fontvariant";
import { Stack } from "@mui/material";
import React from "react";
import { Autoplay } from "swiper/modules";

const Partners = () => {
  return (
    <SectionWrapper py={{ xs: 7, md: 12 }} px={0} overflow={"hidden"}>
      <MotionTypography
        variant='h3'
        fontSize={H3_2}
        color={"primary.main"}
        textAlign={"center"}
        maxWidth={951}
        m={"auto"}
        px={{
          xs: 3,
          md: 0,
        }}
        initial={{
          y: "30%",
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.4,
          },
        }}
        viewport={{
          once: true,
        }}
      >
        ASSOCIATED WITH OVER 100+ PARTNERS ACROSS THE COUNTRY
      </MotionTypography>
      {/* <MaterialSwiper
        slidesPerView={"auto"}
        // slidesPerGroupAuto={true}
        // slidesPerGroup={6}
        spaceBetween={24}
        loopedSlides={6}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        width={100}
        modules={[Autoplay]}
      >
        {data.map((item, idx) => (
          <MaterialSwiperSlide
            key={idx}
            sx={{ width: { xs: "128px !important", md: "199px !important" } }}
          >
            <LogoCard data={item} />
          </MaterialSwiperSlide>
        ))}
      </MaterialSwiper> */}
      <Stack
        sx={{
          width: "min-content",
          transform: "translate3d(-50%, 0, 0)",
          animation: "logoScroll 10s infinite linear",
          "@keyframes logoScroll": {
            "100%": {
              WebkitTransform: "translateX(-3.5%)",
            },
          },
        }}
        direction='row'
        justifyContent={"flex-end"}
        columnGap={{ xs: 2, md: 3 }}
        mt={{ xs: 5, md: 6 }}
      >
        {data.map((item, idx) => (
          <LogoCard key={idx} data={item} />
        ))}
      </Stack>
    </SectionWrapper>
  );
};

export default Partners;

const data: LogoCardProps["data"][] = [
  {
    img: "https://s3-alpha-sig.figma.com/img/94ff/5d47/78dce75bf115837418f0230f36bec744?Expires=1696204800&Signature=mI~f5z4cYUOqf7LI5oqE7qVvZcqOhzB25Fy-EAhQjqcBn0Qx~5P29nVNdT9V1HKuRCbp5Z45dvqPiCKtU2IHUTVbPszHFc2hZHJL5hU~NhIyH05kRg~7lxw6VyshfRbMyRnzmoS7NeN5~Wm-89tFPkhGcTD7qs7-l~wJNMZF3vYfmswRl94JkjYdtfBlTyghdoohF3qmA0754rjXSmSQNiAM~cOBQHtAomPo-brFSk47v5v5dQsEP8V17YW7Bb3GI6YfVwKj0a2wFxn6xuW2VqKyxtvhEGzceFd-KTUqfpDlsZ3mSWkuaD47RfZ7px0aeaR~RlnN6Vq-wgAF~IWUig__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/8a2c/4b9b/5a5bf73dc6c45202f91ddb722aadfdd3?Expires=1696204800&Signature=cwV0-DWdyQQeVA6z0h6yTt5JnLc4JaTLel71Pf4ZUDdZamtluHI-vGIp6ozLfwTeLmp3TrtWwG3mDQUBwW~E5t~E0Z7VGkwQN~cCrSC0GudvFRKbsRljWvJrSEkn8a1Bgs5ow9EkhB04e4RLqdpaJiZ4UKJsYpWMMJS7a7ZwJTuFYtwCdBmPSTHJ50QyxpNoRa2klzNjzM9fuuAnH7X-HObBWwdNMYRKbLLg4e-J6QqKjxZ1qwF-XahjsKXh2AWVubg-BLzr3ECGjrmBmD0qgxwedTiq4ecWXHVQp~oQ1Y8IusM2pVaX2RJWCH6yqzQUjCvNCUxUW2JJZ3U~F7EQyw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/f1af/e712/3e8f0e61c9ee49c27d33861e96b09b67?Expires=1696204800&Signature=C4yq-73DFotBbg3ZM1pcuIjJd838F~RKgRwyzpjd0Pd-QUvDuodz7o4yBct-DrlWeLuJuRWiV3chBwHc-6XhSBElw1DLeRBluFOXJa5C1PzoPWykcXX3OmIqaCUt8QkmVKe4799xaF05E1m~Vb-kXGwvH5ubebw0Qv4zyNlL9NIdUCCEciFrbFuP5aDG8gwxuOXWV7olJC1bqnmqR7jRJEsq2ozpLAYsBLFvOHrSTaP8qMBGrIPimd9HX~e86sZRz1GLeUBUpH2FLvYabCHgH2YNau8bZQZlsJVMB5jUHU616edQ4gH-x2Ndc6K8W1SMPAPrW2643KYBfDM2lX9JCQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/8a4d/0221/bf291bf992752f01061211d87c03e765?Expires=1696204800&Signature=M1MsRfmpXZnnZzIhbbxhLne76QqYyTchdHVwRp7cLWMNApZqp8rwhiclLY7EeyEHH5BzV~kzc6aYVnfO87QlVMVpmZvXpzG7-K5kfaFcS3jsfek~DH4g11xwMpFHyQED8xoQT-xo6B9PzzKmrF9qwq6xTW22~jf2g1Pe7YN03fGC13Lc6GR0TnVagrWNHDbC12yEkG5T4Nkm3Dp3OHamqwbxF2-9byWq4RId9T3ZEUA47vTjMMLkdlruT8YUqyxkbOjOzS9GHj9eNercfZeL~H3Mz-1YGDqnPSArjcFX9zac3MGbFGb6mUQlQ4twrhxzmtS02ONSnTl7SBjrzw60BA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/7c79/2435/69c580b30d6deee2dafbcaedef8297d8?Expires=1696204800&Signature=cL8~NB8zbAZMZPjm8ex6GYNv-Izvh1bU2hkbl848lfy3k7uwPksOKfAgQDFju9EG-Q6epem6Cx~e4ziO60Nxd47mgjrM8lnLc3Cr5FAstcEFeZOS0XAfuSb-XDdDoGPCaEAHyC5Kd3AVLLhTOtqljWUJVBCOSw~Noj1kmks7fTQiS3UzlCmNwZdldwoeUmNRIRnzBqPKWk8W6flib4eA6iQmHAvWubQ98R2lfvMTNH7Dn3e2ImL4Ba6rnNYFyZr3IwTPRCtv3-XlI2OillW7nPZpKTqURZTxarUxfrvY7LodqJquxO7JJ4b6KnjsiS20wgthOOSVgYBJA27h5qTO5Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/2842/eeab/8dab4664ba001660986860ab1ec26446?Expires=1696204800&Signature=nL6~gVKp3KN4knNiD1-16lVR3DCuUn037K08TPD6Fo2DNrNo9z6Lf6t9oChvTsZ2qdZv6~UKMieDWebngVEc8G9590eE9~a23q-FL8UxLdYbOKQP0jXQwNOYQ1jger~kTq~AOgxaTUW0zb7xowMwHm-csuV~2QfvqrccyfQy4m1hKXNgUq2sUMEg-1HFdRteviIHrguNoAkd5W~PS0Fcp5ZlTpcrb92aQ7YhfI1xocxwTklaOGilHYsUdrmsYnDi2agxT6nTgfBL703wBwV1pDxcNA~ueqkBmWzC0ZsOm~S1qXineeu4QcBEwhlrl~js12uagoHKC33IqQpku1YmTA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/94ff/5d47/78dce75bf115837418f0230f36bec744?Expires=1696204800&Signature=mI~f5z4cYUOqf7LI5oqE7qVvZcqOhzB25Fy-EAhQjqcBn0Qx~5P29nVNdT9V1HKuRCbp5Z45dvqPiCKtU2IHUTVbPszHFc2hZHJL5hU~NhIyH05kRg~7lxw6VyshfRbMyRnzmoS7NeN5~Wm-89tFPkhGcTD7qs7-l~wJNMZF3vYfmswRl94JkjYdtfBlTyghdoohF3qmA0754rjXSmSQNiAM~cOBQHtAomPo-brFSk47v5v5dQsEP8V17YW7Bb3GI6YfVwKj0a2wFxn6xuW2VqKyxtvhEGzceFd-KTUqfpDlsZ3mSWkuaD47RfZ7px0aeaR~RlnN6Vq-wgAF~IWUig__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/8a2c/4b9b/5a5bf73dc6c45202f91ddb722aadfdd3?Expires=1696204800&Signature=cwV0-DWdyQQeVA6z0h6yTt5JnLc4JaTLel71Pf4ZUDdZamtluHI-vGIp6ozLfwTeLmp3TrtWwG3mDQUBwW~E5t~E0Z7VGkwQN~cCrSC0GudvFRKbsRljWvJrSEkn8a1Bgs5ow9EkhB04e4RLqdpaJiZ4UKJsYpWMMJS7a7ZwJTuFYtwCdBmPSTHJ50QyxpNoRa2klzNjzM9fuuAnH7X-HObBWwdNMYRKbLLg4e-J6QqKjxZ1qwF-XahjsKXh2AWVubg-BLzr3ECGjrmBmD0qgxwedTiq4ecWXHVQp~oQ1Y8IusM2pVaX2RJWCH6yqzQUjCvNCUxUW2JJZ3U~F7EQyw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/f1af/e712/3e8f0e61c9ee49c27d33861e96b09b67?Expires=1696204800&Signature=C4yq-73DFotBbg3ZM1pcuIjJd838F~RKgRwyzpjd0Pd-QUvDuodz7o4yBct-DrlWeLuJuRWiV3chBwHc-6XhSBElw1DLeRBluFOXJa5C1PzoPWykcXX3OmIqaCUt8QkmVKe4799xaF05E1m~Vb-kXGwvH5ubebw0Qv4zyNlL9NIdUCCEciFrbFuP5aDG8gwxuOXWV7olJC1bqnmqR7jRJEsq2ozpLAYsBLFvOHrSTaP8qMBGrIPimd9HX~e86sZRz1GLeUBUpH2FLvYabCHgH2YNau8bZQZlsJVMB5jUHU616edQ4gH-x2Ndc6K8W1SMPAPrW2643KYBfDM2lX9JCQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/8a4d/0221/bf291bf992752f01061211d87c03e765?Expires=1696204800&Signature=M1MsRfmpXZnnZzIhbbxhLne76QqYyTchdHVwRp7cLWMNApZqp8rwhiclLY7EeyEHH5BzV~kzc6aYVnfO87QlVMVpmZvXpzG7-K5kfaFcS3jsfek~DH4g11xwMpFHyQED8xoQT-xo6B9PzzKmrF9qwq6xTW22~jf2g1Pe7YN03fGC13Lc6GR0TnVagrWNHDbC12yEkG5T4Nkm3Dp3OHamqwbxF2-9byWq4RId9T3ZEUA47vTjMMLkdlruT8YUqyxkbOjOzS9GHj9eNercfZeL~H3Mz-1YGDqnPSArjcFX9zac3MGbFGb6mUQlQ4twrhxzmtS02ONSnTl7SBjrzw60BA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/7c79/2435/69c580b30d6deee2dafbcaedef8297d8?Expires=1696204800&Signature=cL8~NB8zbAZMZPjm8ex6GYNv-Izvh1bU2hkbl848lfy3k7uwPksOKfAgQDFju9EG-Q6epem6Cx~e4ziO60Nxd47mgjrM8lnLc3Cr5FAstcEFeZOS0XAfuSb-XDdDoGPCaEAHyC5Kd3AVLLhTOtqljWUJVBCOSw~Noj1kmks7fTQiS3UzlCmNwZdldwoeUmNRIRnzBqPKWk8W6flib4eA6iQmHAvWubQ98R2lfvMTNH7Dn3e2ImL4Ba6rnNYFyZr3IwTPRCtv3-XlI2OillW7nPZpKTqURZTxarUxfrvY7LodqJquxO7JJ4b6KnjsiS20wgthOOSVgYBJA27h5qTO5Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/2842/eeab/8dab4664ba001660986860ab1ec26446?Expires=1696204800&Signature=nL6~gVKp3KN4knNiD1-16lVR3DCuUn037K08TPD6Fo2DNrNo9z6Lf6t9oChvTsZ2qdZv6~UKMieDWebngVEc8G9590eE9~a23q-FL8UxLdYbOKQP0jXQwNOYQ1jger~kTq~AOgxaTUW0zb7xowMwHm-csuV~2QfvqrccyfQy4m1hKXNgUq2sUMEg-1HFdRteviIHrguNoAkd5W~PS0Fcp5ZlTpcrb92aQ7YhfI1xocxwTklaOGilHYsUdrmsYnDi2agxT6nTgfBL703wBwV1pDxcNA~ueqkBmWzC0ZsOm~S1qXineeu4QcBEwhlrl~js12uagoHKC33IqQpku1YmTA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/94ff/5d47/78dce75bf115837418f0230f36bec744?Expires=1696204800&Signature=mI~f5z4cYUOqf7LI5oqE7qVvZcqOhzB25Fy-EAhQjqcBn0Qx~5P29nVNdT9V1HKuRCbp5Z45dvqPiCKtU2IHUTVbPszHFc2hZHJL5hU~NhIyH05kRg~7lxw6VyshfRbMyRnzmoS7NeN5~Wm-89tFPkhGcTD7qs7-l~wJNMZF3vYfmswRl94JkjYdtfBlTyghdoohF3qmA0754rjXSmSQNiAM~cOBQHtAomPo-brFSk47v5v5dQsEP8V17YW7Bb3GI6YfVwKj0a2wFxn6xuW2VqKyxtvhEGzceFd-KTUqfpDlsZ3mSWkuaD47RfZ7px0aeaR~RlnN6Vq-wgAF~IWUig__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
];
