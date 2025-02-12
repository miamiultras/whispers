import "./globals.css";
import { Press_Start_2P } from "next/font/google";
import SessionProvider from "./components/SessionProvider";
import Navbar from "./components/Navbar";

// Change font to pixel-art style
const pixelFont = Press_Start_2P({
  weight: '400',
  subsets: ["latin"]
});

export const metadata = {
  title: "Whispers | Journey Through The Mind",
  description: "A psychological choice-driven narrative",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SessionProvider>
        <body className={pixelFont.className}>
          <main className="min-h-screen min-w-full bg-gray-900 text-green-500">
            {/* Scanline effect overlay */}
            <div className="absolute inset-0 pointer-events-none bg-scanlines opacity-10"></div>

            <div className="relative flex flex-col items-center p-5 min-h-screen">
              <div className="w-full md:max-w-[600px] text-center px-4">
                <h1 className="text-2xl uppercase glitch-text mb-8 mt-10">
                  whispers_
                </h1>
                {/* CRT monitor style container */}
                <div className="relative border border-green-500/30 bg-black/90 p-6 rounded-lg shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                  {children}
                </div>
              </div>
            </div>
          </main>
        </body>
      </SessionProvider>
    </html>
  );
}
