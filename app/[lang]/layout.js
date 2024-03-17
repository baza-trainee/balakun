import "./fonts/fonts";
import { roboto } from "./fonts/fonts";
//import { roboto } from "./globals.css";
import "./globals.css";

export const metadata = {
  title: "Balakun",
  description: "Speak me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
