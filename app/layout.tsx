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
            {children}
          </main>
        </body>
      </SessionProvider>
    </html>
  );
}
