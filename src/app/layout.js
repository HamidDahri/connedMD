import { GoogFonts } from "./ui/fonts";
import "./globals.css";

export const metadata = {
  title: "connectMD",
  description:
    "ConnectMD provides access to 2,000+ board-certified physicians nationwide who deliver personalized care recommendations based on your complete medical history, offering in-depth evaluations tailored to your unique needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="icon"
          href="/images/favicons/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="icon"
          href="/images/favicons/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
        <link rel="icon" href="/images/favicons/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${GoogFonts.Poppins.variable} ${GoogFonts.PlayFairDisplay.variable} antialiased poppins`}
      >
        {children}
      </body>
    </html>
  );
}
