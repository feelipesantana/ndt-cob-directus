import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from 'next/font/local'
import { Header } from "@/components/Header";

import "./globals.css";
import { QueryProvider } from "@/providers/query-provider";


const inter = Inter({ subsets: ["latin"] });

const effra_trial = localFont({
  src: [
    {
      path: '../fonts/Effra_Trial_Rg.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../fonts/Effra_Trial_Md.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../fonts/Effra_Trial_SBd.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../fonts/Effra_Trial_Bd.ttf',
      weight: '700',
      style: 'normal'
    },

  ]
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${effra_trial.className}`}>

        <div className="grid grid-rows-[96px,1fr] h-screen max-w-screen w-full">
          <Header />
          <div className="h-full ">
            <QueryProvider>
              {children}
            </QueryProvider>
          </div>
        </div>

      </body>
    </html>
  );
}
