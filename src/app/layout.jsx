import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
import SearchBox from "@/Components/SearchBox";
import Providers from "./providers";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Movie App",
  description: "This is a movies database",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <NavBar />
          <SearchBox />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
