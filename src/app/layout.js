import { Inter } from "next/font/google";
import "./globals.css";
import "./style.css";
import Header from "../components/utilities/Header/Header";
import SocialMediaSticky from "@/components/utilities/SocialMediaSticky";
import FooterPage from "@/components/utilities/Footer/FooterPage";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ISKCON Jaipur",
  description: "Sri Sri Giridhari Dauji Temple",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <SocialMediaSticky />
        {children}
        <FooterPage />
      </body>
    </html>
  );
}
