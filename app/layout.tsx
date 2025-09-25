"use client";
import "./globals.css";
import Navbar from "@/components/NavBar/Navbar";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/app/ui/ScrollToTop/ScrollToTop";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="font-Garamond">
      <body>
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>

        <ScrollToTop />
      </body>
    </html>
  );
}
