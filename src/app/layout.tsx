export const metadata = {
  title: "this things are provided by Next.js",
  description: "Generated by Next.js",
};
import Header from "@/components/Header";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <Header />
        </header>
        {children}
        <footer style={{ background: "Red" }}>
          <p className="text-center">this is footer </p>
        </footer>
      </body>
    </html>
  );
}
