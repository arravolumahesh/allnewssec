"use client";
import Enquire, { EnquireProps } from "@cc/enquire";
import FormDialogButton from "@cc/form-dialog-button";
import EnquireAboutFundraising from "@c/ourCompanies/fund-and-partners/enquire-about-fundraising";

const FundsAndPartners = () => {
  return <Enquire data={enquireData} />;
};

export default FundsAndPartners;

const enquireData: EnquireProps["data"] = [
  {
    title: "Raise Funds",
    description:
      "We can help with spreading the word and collecting funds for your cause.",
    image:
      "https://s3-alpha-sig.figma.com/img/8ec6/c2d6/b2ba014114e354804918c7c439af9b29?Expires=1697414400&Signature=JDgrUUXg3yKTf09VUD-c5VQOfE83S3ZtRe2je8oGYBf79401B8F6Zh58nJb40kP4dhhY1BAah5x1edRDdXUyOuTGVAHTyicAeqOgWaYrZ35F4~Ig2p9r6IPyUaM2j7jRF8UBKCaSuTckSkqkLiR4KWybzLPdrUzLnppE84xEe81VMVwpyvT1VUDl160moisxF9UJz1emmyg8KksHn4fnDd-tBbbP7hZvofqAaMwGDu6vvhsUCYk6pVG0Ua3mUvUoX1pth4R3e-Qq6899r7fJJdSLk0G3HJDRIFF07JclecT76oidiAK0ilKbx438SoRQyA-FOUZeBpi5Ft0Tk9bJPg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    btn: (
      <FormDialogButton ReactiveForm={<EnquireAboutFundraising />}>
        Enquire About Fundraising
      </FormDialogButton>
    ),
  },
  {
    title: "Partner with us",
    description: "Our team will join hands with you in your initiatives.",
    image:
      "https://s3-alpha-sig.figma.com/img/c56c/3893/8f08ddddc04eb10de0936899328c5533?Expires=1697414400&Signature=PvnqFC~Pz3oLYztt3dba6yFRJYQ6HscwN9l8Skn4MVukvFVCJ79enrbmrT32h93Z4tMZu~cp8Z-TZuDlonqA~CbBDq-dOckUz4imMyLc~qz6M7D5cuHMqI1-SuJq76lqrPlcoGsqy3ZbR1qaA3SgCgCPBqwQSTUTaudrmEjllpmBBMR254VgX4UhJNfEw3hLVeTOIrPnvqqi13SIi~wh93UNInLoLmHq7~trsdeAdr3lC5Ag~IZohHgUlKuhGcA2fV3XE3nzC4OYfilqmUCY38zbXWNcwc~V~Z9MVrtZGMXOGcQtnW9T4G6~tcjAkvgEyOasPZ0ZBauXtwuRpyerMA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    btn: <FormDialogButton>Enquire About Partnerships</FormDialogButton>,
  },
];