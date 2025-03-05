import "./globals.css";
import Providers from "./components/Providers";
import Header from "./components/Header";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TicTac",
  description: "enjoy with tictac",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-full w-full flex flex-col`}>
        <Providers>
          <Header />
          <main className="container mx-auto px-5 py-8">{children}</main>
        </Providers>
        <footer className="bg-gray-900 text-white py-4 flex justify-center items-center w-full">
          <p className="text-lg font-semibold">
            Made with
            <span className="text-red-700"> ❤</span> by Raajz
          </p>
        </footer>
      </body>
    </html>
  );
}
