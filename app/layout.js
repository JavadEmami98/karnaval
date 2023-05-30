import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import "../style/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
