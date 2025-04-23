// src/app/(auth)/layout.jsx
import Footer from "../Footer";
import Header from "../Header";
import { GoogFonts } from "../ui/fonts";

export default function AuthLayout({ children }) {
  return (
    // <html lang="en">
    <div
      className={`${GoogFonts.Poppins.variable} ${GoogFonts.PlayFairDisplay.variable} antialiased poppins`}
    >
      <Header />
      {children}
      <Footer />
    </div>
    // </html>
  );
}
