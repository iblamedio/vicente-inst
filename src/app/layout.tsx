import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "AVicente Empreendimentos",
  icons: [{ rel: "icon", url: "/vicente-logo.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
