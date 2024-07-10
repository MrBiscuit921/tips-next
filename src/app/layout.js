import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Info from "@/components/Info";
import SessionWrapper from "@/components/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SharedSecrets",
  description: "A place where you can share your tips with others",
};

export default function RootLayout({ children }) {
  return (
    <SessionWrapper>
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-between max-w-6xl mx-auto">
          <div className='hidden sm:inline border-r h-screen'>
            <Sidebar />

          </div>
          <div className="w-2x1 flex-1">{children}</div>
          <div className='lg:flex-col p-3 h-screen border-l hidden lg:flex w-[24rem]'>
              <Info />
            </div>
        </div>
      </body>
    </html>
    </SessionWrapper>
  );
}
