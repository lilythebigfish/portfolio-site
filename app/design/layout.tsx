import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Content */}
      <div>{children}</div>
      {/* Navbar */}
      <Navbar />
      <Footer />
    </div>
  );
}
