import localFont from "next/font/local";

export const helvetica = localFont({
  display: "swap",
  fallback: ["sans-serif"],
  style: "normal",
  preload: true,
  src: [
    {
      weight: "400",
      path: "../styles/fonts/Helvetica.ttf",
    },
    {
      weight: "700",
      path: "../styles/fonts/Helvetica-Bold.ttf",
    },
    {
      weight: "300",
      path: "../styles/fonts/Helvetica-Light.ttf",
    },
  ],
});