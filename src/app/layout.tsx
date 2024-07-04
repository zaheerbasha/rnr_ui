import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { ToastContainer, Zoom } from "react-toastify";
import Providers from "@/app/providers";
import LayoutComponent from "@/components/LayoutComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Razorpay RnR",
  description: "Created By RazorPay Renegades",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/rnr_favicon.png" />
        <title>Razorpay RnR</title>
      </Head>
      <body className={inter.className}>
        <Providers>
          <div className='page-container h-screen'>
            <ToastContainer
              autoClose={4000}
              hideProgressBar={true}
              transition={Zoom}
              position="top-center"
              theme="dark"
            />
            <LayoutComponent>
              {children}
            </LayoutComponent>
          </div>
        </Providers>
      </body>
    </html>
  );
}
