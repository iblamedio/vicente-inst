import { type Metadata } from "next";

import Header from "./components/Header";
import Footer from "./components/Footer";

import '../styles/globals.css';

export const metadata: Metadata = {
  title: "AVicente Empreendimentos",
  icons: [{ rel: "icon", url: "/vicente-logo.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html suppressHydrationWarning>
      <body id="app" suppressHydrationWarning>
        <Header/>
        <main>{ children }</main>
        <Footer/>
      </body>
    </html>
  );
}
