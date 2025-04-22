// src/app/(auth)/layout.jsx
import { GoogFonts } from "../ui/fonts";

export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${GoogFonts.Poppins.variable} ${GoogFonts.PlayFairDisplay.variable} antialiased poppins`}
      >
        {children}
      </body>
    </html>
  );
}
