// src/app/(auth)/layout.jsx
import { GoogFonts } from "../ui/fonts";

export default function AuthLayout({ children }) {
  return (
    // <html lang="en">
    <div
      className={`${GoogFonts.Poppins.variable} ${GoogFonts.PlayFairDisplay.variable} antialiased poppins`}
    >
      {children}
    </div>
    // </html>
  );
}
