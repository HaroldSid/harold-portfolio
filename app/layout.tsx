import type { Metadata } from "next";
import { Space_Grotesk, Geist } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harold Delacroix — Freelance Developer",
  description:
    "I build web applications, business tools, and custom software. Freelance developer available for hire.",
  metadataBase: new URL("https://harolddelacroix.dev"),
  openGraph: {
    title: "Harold Delacroix — Freelance Developer",
    description:
      "I build web applications, business tools, and custom software.",
    url: "https://harolddelacroix.dev",
    siteName: "Harold Delacroix",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harold Delacroix — Freelance Developer",
    description:
      "I build web applications, business tools, and custom software.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      // suppressHydrationWarning is required by next-themes to avoid
      // a mismatch between SSR (no class) and client (dark/light class added)
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${geistSans.variable}`}
    >
      <body className="bg-zinc-50 dark:bg-[#0a0a0a] text-zinc-900 dark:text-zinc-100 antialiased transition-colors duration-300">
        {/* defaultTheme="dark" starts in dark mode; storageKey persists choice */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="hd-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
