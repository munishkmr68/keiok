"use client";
import "./globals.css";
import { useState, useEffect } from "react";
import Loader from "../common/Loader";
import Header from "@/common/Header";
import Script from 'next/script';

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>

      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBvy4in2chFztIjmTz-92od4VTnRPYYdtI&libraries=places`}
        strategy="beforeInteractive"
      />

        {loading ? (
          <Loader />
        ) : (
          <>
            {/* <!-- ===== Header Start ===== --> */}

            <Header />

            {/* <!-- ===== Header End ===== --> */}

            {/* <!-- ===== Main Content Start ===== --> */}
            <main className="h-full">{children}</main>
            {/* <!-- ===== Main Content End ===== --> */}

            {/* <!-- ===== Footer Start ===== --> */}
          </>
        )}
      </body>
      
    </html>
  );
}
