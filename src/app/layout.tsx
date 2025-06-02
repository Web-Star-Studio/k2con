import type { Metadata } from "next";
import { Inter, Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./utils/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "K2CON Consórcios | Seu Patrimônio com Inteligência",
  description: "Transforme sua estratégia financeira com consórcios inteligentes e operações estruturadas para máxima rentabilidade. Atendimento personalizado e soluções inovadoras.",
  keywords: "consórcio, investimento, patrimônio, rentabilidade, K2CON",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfairDisplay.variable} ${sourceSans.variable} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
          storageKey="k2con-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
