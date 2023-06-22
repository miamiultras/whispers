import "./globals.css";
import { Inter } from "next/font/google";

import SessionProvider from "./components/SessionProvider";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Whispers",
  description: "Text-based game",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SessionProvider>
        <body className={inter.className}>
          <main className="min-h-screen min-w-full bg-orange-600 font-mono">
            <Navbar />
            <div className="flex h-[screen-76px] flex-col items-center p-5">
              <div className="md:max-w-[50%] text-center">
                <h1 className="text-5xl uppercase font-extrabold skew-y-3 mt-10">
                  whispers
                </h1>
                {children}
              </div>
            </div>
          </main>
        </body>
      </SessionProvider>
    </html>
  );
}
