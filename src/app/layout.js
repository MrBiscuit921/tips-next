import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SharedSecrets",
  description: "A place where you can share your tips with others",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-between max-w-6xl mx-auto">
          <div className='hidden sm:inline border-r h-screen'>
            <Sidebar />
          </div>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
