import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import Header from "@/components/header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const cormorantGaramond = Cormorant_Garamond({ subsets: ["latin"], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'Architect Studio',
  description: 'Estudio de arquitectura - Diseños que inspiran',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} ${cormorantGaramond.variable}`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
