import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Tech Amigos Club - CGC Landran",
  description: "Empowering Innovation, Building Community",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="m-0 p-0">
        <Navbar />
        <main className="min-h-screen m-0 p-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
