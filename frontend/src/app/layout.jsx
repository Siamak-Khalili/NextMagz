import vazirFont from "@/constants/localFont";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "next-themes";
import AuthProvier from "@/context/AuthContext";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
  title: "نکست مگز | آموزش و اخبار تکنولوژی",
  description:
    "به‌روزترین مقالات، آموزش‌ها و تحلیل‌های دنیای برنامه‌نویسی و فناوری",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body
        className={`flex flex-col min-h-screen ${vazirFont.variable} font-sans`}
      >
        <Toaster />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ReactQueryProvider>
            <AuthProvier>
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </AuthProvier>
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
