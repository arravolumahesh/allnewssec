"use client";
import DiscoverSection from "@/commonComponents/discover-section";
import React, { useState } from "react";
import GalleryDialog from "./leadership/gallery-dialog";

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setactiveIndex] = useState(0);
  // console.log("activeIndex", activeIndex);
  return (
    <>
      <DiscoverSection
        title='GALLERY WALL'
        ImageData={imageData}
        bgcolor='default'
        color='primary.main'
        clickableSlides
        onImageClick={(index) => {
          setOpen(true), setactiveIndex(index);
        }}
      />
      {/* <GalleryDialog
        open={open}
        setOpen={setOpen}
        data={leaderData}
        activeIndex={activeIndex}
      /> */}
    </>
  );
};

export default Gallery;

const imageData = [
  {
    image:
      "https://s3-alpha-sig.figma.com/img/b22b/4365/98b4aae39152c5fe8cfaec76628347f7?Expires=1698019200&Signature=LEu~ZwX8YIxUAa1IuNfmOChUC19Ot6gurQANkROdxyQnDOeKW5EYzTBvvgUl7QlWFZdnx-nhRquI3hxy3Mafh0u2ysTJfjnk~OoekI1OF9MbW51wsJlbFlDPVrP5tNBdQnBHZA~mw4sLBb7DiP~XXhX4m9TkFJ7zvgfhRfrH95s2f-NvIIM-NIUnXSuiAjXNBcwwSXmke9U3DpXNlAUG~wkV1mnjRXWFiRCQzRoKs0YGZ9QGagcxNAsNS6NauQDCJ4-gVNne9Zg9riX2tk~oYrlEY89mdbwH0t6UglcZaVhcVAn1iCLmxjpisgmc2ujmq8QOPs6Z8IOfm0GmZJ5yyw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/a7b0/3bd8/0fd95c36e57b92917ceda77ee6b1be43?Expires=1698019200&Signature=JH1LUUGjeHh4EQaCUvjwDp0XvswQpOZzL4mXB3TvqPhNVq2PgrP~HoKNMld7qBrEWulW190YzdGaeyZTuo1s6lOego~~jWUra9GHaznIk6McOxUTQjNF0N2XeBOgsHr7Jo4X3~~Gfajld9gBW3JOiHRBMZOK6QFRqit5z1-KRKwdf4hHb7V5VcGCFe-3WS2QG-hCPsxrDp7KU-JgsU4-EtE6oEU8Bjx9gMzGWW8C5iClwKqWijhqGOpRH38qEXgc21l82un~dcrifUXBjlzPI2aNmUKrrWGXqADeyv0s8MrgWhfkUJaRzmlqR1tan1kfVgsONm6uzjJpYzKkbhA9mg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/684e/4912/12d8cf1498aac6661ea59fd7d3ea7038?Expires=1698019200&Signature=f2ug3bbUU3HVorm~mFJAJSqmsojS6D0xoxQVm8L4~6VT97gOsepwMokQuOHakRpLwFVfYdX2Ky8VzKlHjlgI5DCmjPW98gUy-~qtqZVKiYrQElYsh4QGilgy25AVAXGwHYAskCSvFntRy-M6j~m7Rlqic3t~LbOiD2EFpoGY7MJQx1R9eXIgcAZIi~o4nYJ1WgYFcoT8BBxzsiCvnqa6ZUdpjc5XzAYszRfTeFjXPMfbBpKUj39Z3YP49pVmrECNrWwngA5MljfqNAuz3jhuZx77kej9d7kUvLp860bJ8xCEIaKkC4FHMs0sOsZy09OfdFEbw2cibjCMXcpde1n7Tw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/ec95/00d1/11ab4a42463e2862d8a1131d9f72abe2?Expires=1698019200&Signature=pHxi9XY3M5hqkyjQPddzNCZwM0onEPMfT5DO-f8p33eXi2wmgvIvrDjYMqaKKACtdMNEF2Ap1zh5KBpas9N33FuNiSobOJ8pALT8D0oqns~NP9mXm9i~cvOg-qwP1f0AI65GqvLzPz1BWBMvLez1IKmCtyTTTxL51hF-uAODafQ6Q5mBKSYtQWElDsP5wSj3CaYICiGU-JrPsxjemvZp1VP8WieNR7GdM6XohFsEhsVqZtG5oztriEIzq3TtOUM9sc3Y9~bq-8I8max5ZWv4yvXYcRkUa1YWTRFsKOVdM7LZnyRHxorzGYuG0qxFyMerYdDMW1QoQbKmoC5Xy5OJ7w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/c0a7/60bf/0cc6bb658b994e05e38a7418fddc6464?Expires=1698019200&Signature=LARHoVJOvMhNTBP9Z-2Dt77BKWSPQ3wGP6pzuUWWbnh-47SqVLGZUEt2IuVNtHc-qkQp502Y4bcY3woqo9-pfSn5riDBPC1osE9TcKAt7I5CAIhIKn0M-ibMwHDulxcMbx4fCt8S2fM3QLWUID3ioMrR97cuk0LrzUIalCKNdeJT3WxiZVn4TaxmBq4Z2Say8cN2XHrv4jn93JEHW6sy5NS1KTE1mWmOq7oq0Xb1-f5MM4vNUYD2y0kYcwVNaJkfwAiG3OF7ad48FXfkL6nhzjQpTzoWhhrMc-WWVon-zDQ5MpkQoZ92vj1XRJPPKXs0orShd8c~0s7u2svBYJH9Qg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/7a40/d5c7/0ff614c814d795abf60f2b83e8aa5ae6?Expires=1698019200&Signature=IvU1PsMg0zfqwvkkt1oZbhqhPtt0LP4zeIJ3f7vM~Cq2~N3ryFZ0WRZisscekZuKZmwdfPvHvTuJuJSiARO55drrA~d1vV28K2o4VevS-1onBEMMvrZTmjIo~cBxeMfp0mNshUE4QLodyx922bp0pzdfw4B0WNHlKMrogh7U~nPkbRIaYlwNbj9IsFBbvQ13zUo-JonnNQcYZ1TcfnjPH1-XGdwmiVuNKqaUi7uc8UWqBQgB3OV5Ib2kxhXpgi9hMZCrUD6Rqkfy4F7frJ78ep8t-B7G62el3521qtIjadFEKjXJ0X24jBPxtg3SKmpncRShRa75oanosQR0ip0EKw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/8cec/db66/1ba949941b0afc4847368d313ed1ef64?Expires=1698019200&Signature=QAlqSQfauaq8BMRXbwYFcAV8RmlT5jZdW7OeybicPrABUJw3hKV~YQifs62~b-MQUvbRBJd842UEv0fLEkLZZLQ4Z4zdeUHMCF29BzFvBuG4F5Cj8j4Zrq2OjR3b65gDShugW1d2Lk81L2qXLa6Cud3nytn79a8GAX5sUgYy7Vsnn-saonRMkbpkCZztwcR-lTYOOdidMz~wYQ2AHC-0-cObtcuOLEtcSoMN1cKQpp2BtH94nBtrbFssLzwtggEU4mqYb2ubB2MFdH-lMFfyqV3Y~Jdb2dDz~35bH~kYVUxPEj7cZO7tjwm~04amNm5hW-KRtiRtCluAoj8rPuk4xQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/d81e/37c0/9045fcc9cd4fd6529ecfcd91ad15edec?Expires=1698019200&Signature=bN9e6Txze3Gcld-g8cFfFJY~bVIpAyPrIdhMYXR4EoLSANhudXQjZjhtKbi5v-dbdNaSBJraIs1RDB1-bPPLLMXcL7toZAShOLZtlc1jXuH13-V9aToxzDFbshGacrLuECNpdZh7ZubZHuQp~qxPAKaIQx3I9Xz~Ebz~Coi27RdpIS4JQNVoWTFCF886Z~gJ9sD3a8HLcPg477qhc3ZwaHLtWoAPCZwiwhVNlwO49t3AZHt8wv3DcztsSpUCGkqo2B2r4x~WTsLCAtEPE3pNFIG-apn-yl2p1dgTDJcOq~eVzDcDQvOGz0OXoLB9fxK77FURS4V6ddXs22Wiy8SYTQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
];
