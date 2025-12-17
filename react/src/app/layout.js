import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Entrega de Panetone",
  description: "Consulta de CEP com Promise",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          min-h-screen
          bg-gradient-to-br
          from-black
          via-zinc-900
          to-red-900
        `}>
        <main className="min-h-screen flex items-center justify-center px-4">
          {children}
        </main>
      </body>
    </html>
  );
}
