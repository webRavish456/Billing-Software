import "./globals.css";

export const metadata = {
  title: "Billing Pro - Professional Billing Software",
  description: "Modern billing software for managing invoices, customers, and payments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
