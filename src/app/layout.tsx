import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Provider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { Footer } from "@/components/footer";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Geekmeo AI | Generate Customized Courses",
  description: "Using AI to generated courses for you!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <head>
        {metadata.description && (
          <meta name="description" content={metadata.description} />
        )}
        <link rel="icon" href="/logo-fav.svg" />
      </head>
      <body className={cn(oswald.className, "font-mono antialiased min-h-screen pt-16")}>
        <Provider>
          <Navbar />
          {children}
          <Toaster />
        </Provider>
        
      </body>
    </html>
  );
}