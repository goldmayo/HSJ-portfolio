import "../styles/globals.css";
import Head from "@/app/head";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kr">
      <Head />
      <body>{children}</body>
    </html>
  );
}
