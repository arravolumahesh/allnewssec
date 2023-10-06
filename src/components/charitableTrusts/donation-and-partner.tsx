"use client";
import Enquire, { EnquireProps } from "@cc/enquire";
import FormDialogButton from "@cc/form-dialog-button";
import EnquireAboutFundraising from "@c/ourCompanies/fund-and-partners/enquire-about-fundraising";

const DonationsAndPartners = () => {
  return <Enquire data={enquireData} />;
};

export default DonationsAndPartners;

const enquireData: EnquireProps["data"] = [
  {
    title: "REQUEST FOR DONATION",
    description:
      "We can help with spreading the word and collecting funds for your cause.",
    image:
      "https://s3-alpha-sig.figma.com/img/8ec6/c2d6/b2ba014114e354804918c7c439af9b29?Expires=1697414400&Signature=JDgrUUXg3yKTf09VUD-c5VQOfE83S3ZtRe2je8oGYBf79401B8F6Zh58nJb40kP4dhhY1BAah5x1edRDdXUyOuTGVAHTyicAeqOgWaYrZ35F4~Ig2p9r6IPyUaM2j7jRF8UBKCaSuTckSkqkLiR4KWybzLPdrUzLnppE84xEe81VMVwpyvT1VUDl160moisxF9UJz1emmyg8KksHn4fnDd-tBbbP7hZvofqAaMwGDu6vvhsUCYk6pVG0Ua3mUvUoX1pth4R3e-Qq6899r7fJJdSLk0G3HJDRIFF07JclecT76oidiAK0ilKbx438SoRQyA-FOUZeBpi5Ft0Tk9bJPg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    btn: (
      <FormDialogButton
        title='Restocking Community Fridges'
        image={
          "https://s3-alpha-sig.figma.com/img/42aa/b045/92d3bd2e3b4b727f604749a4117e82e0?Expires=1697414400&Signature=jrReuomsG0Vt3vhXsLrIXg~1eZBOQEE8w9DL00Hd7VTGT-5JjQ7a97X1SRt3oT~IuFSuDtH2tvZGyai9WKuyVS-z-0p5J0nXxy4a9MN1tepLS3FXAIFqt3b5eON6L9hb~BJLjLY-fToaeEnPVLjiu-UCYEtsNrxfmBG-1TRMdA0zi6~9HAmA73sx8Wb1riEkOuHHxV8jWqkRdgrKzEcs7MHsqjMt8LX~t9bK91D35JiCnqDDtgGsEKDX~KFk6hoFkKHRCLKeDp86aZhLZbX8QGS2VE4wdD6QAGsUNF3GlfLwugndjRJANpV~QzkaUkAbumQvrslM1znACL34I3KBug__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        }
        description='The Restocking Community Fridges volunteering event is an
    initiative that aims to address food insecurity. The event
    focuses on replenishing and maintaining community fridges
    placed in public spaces to provide free and accessible food to
    those in need.'
        region='Mumbai, Maharashtra'
        date='15 July 2023 | 10:00 AM - 6:00 PM'
        number='+91 7607907690'
        ReactiveForm={<EnquireAboutFundraising />}
      >
        Enquire About Donations
      </FormDialogButton>
    ),
  },
  {
    title: "Partner with us",
    description: "Our team will join hands with you in your initiatives.",
    image:
      "https://s3-alpha-sig.figma.com/img/c56c/3893/8f08ddddc04eb10de0936899328c5533?Expires=1697414400&Signature=PvnqFC~Pz3oLYztt3dba6yFRJYQ6HscwN9l8Skn4MVukvFVCJ79enrbmrT32h93Z4tMZu~cp8Z-TZuDlonqA~CbBDq-dOckUz4imMyLc~qz6M7D5cuHMqI1-SuJq76lqrPlcoGsqy3ZbR1qaA3SgCgCPBqwQSTUTaudrmEjllpmBBMR254VgX4UhJNfEw3hLVeTOIrPnvqqi13SIi~wh93UNInLoLmHq7~trsdeAdr3lC5Ag~IZohHgUlKuhGcA2fV3XE3nzC4OYfilqmUCY38zbXWNcwc~V~Z9MVrtZGMXOGcQtnW9T4G6~tcjAkvgEyOasPZ0ZBauXtwuRpyerMA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    btn: (
      <FormDialogButton
        title='Restocking Community Fridges'
        image={
          "https://s3-alpha-sig.figma.com/img/42aa/b045/92d3bd2e3b4b727f604749a4117e82e0?Expires=1697414400&Signature=jrReuomsG0Vt3vhXsLrIXg~1eZBOQEE8w9DL00Hd7VTGT-5JjQ7a97X1SRt3oT~IuFSuDtH2tvZGyai9WKuyVS-z-0p5J0nXxy4a9MN1tepLS3FXAIFqt3b5eON6L9hb~BJLjLY-fToaeEnPVLjiu-UCYEtsNrxfmBG-1TRMdA0zi6~9HAmA73sx8Wb1riEkOuHHxV8jWqkRdgrKzEcs7MHsqjMt8LX~t9bK91D35JiCnqDDtgGsEKDX~KFk6hoFkKHRCLKeDp86aZhLZbX8QGS2VE4wdD6QAGsUNF3GlfLwugndjRJANpV~QzkaUkAbumQvrslM1znACL34I3KBug__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        }
        description='The Restocking Community Fridges volunteering event is an
    initiative that aims to address food insecurity. The event
    focuses on replenishing and maintaining community fridges
    placed in public spaces to provide free and accessible food to
    those in need.'
        region='Mumbai, Maharashtra'
        date='15 July 2023 | 10:00 AM - 6:00 PM'
        number='+91 7607907690'
        ReactiveForm={<EnquireAboutFundraising />}
      >
        Enquire About Partnerships
      </FormDialogButton>
    ),
  },
];
