"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { ThirdwebProvider } from "thirdweb/react";
import { config } from "./wagmi";

const inter = Inter({ subsets: ["latin"] });


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5, 
    },
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <ThirdwebProvider>
              {children}
              <Footer />
            </ThirdwebProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </body>
    </html>
  );
}
