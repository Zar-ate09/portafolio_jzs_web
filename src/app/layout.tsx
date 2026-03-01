// src/app/layout.tsx
import './globals.css';
import Navbar from '@/components/Navbar';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Joaquín Zárate | Solutions Architect",
  description: "Portafolio de Ingeniería y Arquitectura de Software",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Bulma CSS via CDN - Solución infalible para Vercel */}
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css" 
        />
        {/* Font Awesome para los iconos del Búnker */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
        />
      </head>
      <body>
         <Navbar />
         <main>{children}</main>
      </body>
    </html>
  );
}