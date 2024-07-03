import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { ToastContainer, Zoom } from "react-toastify";
import Providers from "@/app/providers";

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
        <meta name="description" content="This is a one stop place where you will be appreciated with rewards for your performance and you can nominate others for awards & rewards also." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
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
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
