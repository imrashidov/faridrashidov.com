import Head from "next/head";
import { Kanit } from "next/font/google";
import "./globals.scss";
import "../../lib/fontawesome";

const kanit = Kanit({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Farid Rashidov",
  description: "Farid Rashidov | Front-end Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body className={kanit.className}>{children}</body>
    </html>
  );
}
