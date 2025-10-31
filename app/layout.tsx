import type { Metadata } from "next";
import { Fredoka, Comic_Neue } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const comicNeue = Comic_Neue({
  variable: "--font-comic",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "AlbaApp - Generador de Música Infantil con IA",
  description: "Crea canciones animadas y divertidas para niños de 3 a 6 años con imágenes en diferentes estilos: plastilina, arcilla, anime, cartoon, 3D Pixar, realista y cinematográfico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${fredoka.variable} ${comicNeue.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
