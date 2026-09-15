import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://nullwave.io"),
  title: "NullWave — Private Voice Containment Wearable",
  description:
    "Building the future of voice. NullWave is a premium wearable engineered for acoustic voice containment, allowing private calls and AI voice interaction anywhere without disturbing others.",
  keywords: [
    "NullWave",
    "voice containment",
    "acoustic wearable",
    "private calls",
    "confidential voice",
    "bladeless cooling",
    "live translation",
    "premium hardware",
  ],
  authors: [{ name: "NullWave" }],
  openGraph: {
    title: "NullWave — Your Voice. Your Space.",
    description: "The future of voice is not possible without privacy. Acoustic voice containment wearable.",
    images: ["/images/mask-studio.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NullWave — Private Voice Wearable",
    description: "Acoustic voice containment engineered for public privacy and seamless voice interaction.",
    images: ["/images/mask-studio.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Anti-flash script to instantly apply user-chosen theme from localStorage */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('nw-theme');
                  if (saved === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-nw-gold selection:text-nw-pitch relative flex flex-col font-sans transition-colors">
        {/* Subtle Ambient Grain Layer */}
        <div className="fixed inset-0 pointer-events-none z-30 grain-overlay opacity-30" />
        
        <SmoothScroll>
          <Navbar />
          <main className="flex-1 w-full relative z-10">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
