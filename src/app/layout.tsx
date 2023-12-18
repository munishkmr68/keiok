"use client";
import "./globals.css";
import { useState, useEffect } from "react";
import Loader from "../common/Loader";
import Header from "@/common/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
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
