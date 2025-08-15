// app/layout.js (or layout.tsx)
import { Montserrat, Space_Grotesk } from "next/font/google";
import "./globals.css";

// Load Montserrat
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Choose weights as needed
  display: "swap",
});

// Load Space Grotesk
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk", // ✅ must match your CSS var name
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  icons: {
    icon: "/favicon.png",
  },
  title: "BAD RETENTION",
  "description": "Email & SMS marketing agency boosting revenue through automated, high-converting campaigns.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${spaceGrotesk.variable} antialiased scroll-smooth bg-white text-gray-900`}
      >
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
