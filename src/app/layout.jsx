import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
import SearchBox from "@/Components/SearchBox";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Movie App",
  description: "This is a movies database",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <SearchBox />
      </body>
    </html>
  );
}
