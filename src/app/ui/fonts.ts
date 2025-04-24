import { Playfair_Display, Poppins } from "next/font/google";

const poppins_init = Poppins({
  style: ["normal"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--poppins",
});

const Playfair_Display_init = Playfair_Display({
  // weight: ["400", "500", "600", "700"],
   style: ["italic"],
  subsets: ["latin"],
  // display: "swap",
  variable: "--playfair",
});

export const GoogFonts = {
  Poppins: poppins_init,
  PlayFairDisplay: Playfair_Display_init,
};
