// app/layout.jsx
import { Montserrat, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// Load Montserrat
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Load Space Grotesk
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// --- SEO Metadata ---
export const metadata = {
  title: "BAD RETENTION - Email & SMS Marketing Agency",
  description:
    "Email & SMS marketing agency boosting revenue through automated, high-converting campaigns.",
  keywords: [
    "Email marketing",
    "SMS marketing",
    "Ecommerce growth",
    "Customer retention",
    "Marketing automation",
    "BAD RETENTION"
  ],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "BAD RETENTION - Email & SMS Marketing Agency",
    description:
      "We help ecommerce brands grow revenue with automated, high-performing email & SMS campaigns.",
    url: "https://badretention.com",
    siteName: "BAD RETENTION",
    images: [
      {
        url: "/favicon.jpeg",
        width: 512,
        height: 512,
        alt: "BAD RETENTION Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BAD RETENTION - Email & SMS Marketing Agency",
    description:
      "Boost revenue through automated, high-converting email & SMS marketing campaigns.",
    images: ["/favicon.png"],
  },
  alternates: {
    canonical: "https://badretention.com",
  },
};

// --- Layout ---
export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" data-theme="light">
      <head>
        {/* ✅ Google Search Console verification (paste code here) */}
        <meta
          name="google-site-verification"
          content="PASTE_YOUR_CODE_HERE"
        />

        {/* ✅ Site identity */}
        <meta property="og:site_name" content="BAD RETENTION" />
        <meta name="application-name" content="BAD RETENTION" />
        <meta name="apple-mobile-web-app-title" content="BAD RETENTION" />

        {/* ✅ Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DF5CYVWM5Y"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DF5CYVWM5Y', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>

      <body
        className={`${montserrat.variable} ${spaceGrotesk.variable} antialiased scroll-smooth bg-white text-gray-900`}
      >
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
