import "../styles/globals.css";
import Footer from  "@/components/Footer"
import Navbar from "@/components/Navbar";


export const  metadata = {
  title: "OwO",
  description: "test",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <Navbar />
        <main className="flex-grow p-6">{children}</main>
        <Footer />
        </body>
        </html>
    );
}