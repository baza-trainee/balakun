import { Inter, PT_Sans, Roboto } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  //weight: ["400", "600"]
  weight: ["400", "700"]
});

export const ptsans = PT_Sans({
    subsets: ["latin"],
    weight: ["700"],
    variable:'--font-ptsans',
})

export const inter = Inter({
    subsets: ["latin"],
    variable:'--font-inter',
})

