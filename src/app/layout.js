import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ZipRide Driver Module",
  description: "Driver dashboard and management system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Maps JavaScript API */}
        <script
          async
          defer
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBbHKTDaDkQrF3z2UUjzEuv_1oXHdcagj8&libraries=places"
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-amber-50`}
      >
        {children}
      </body>
    </html>
  );
}
