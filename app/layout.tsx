import "./globals.css";


export const metadata = {
  title: "Ecolely",
  description: "Modern learning platform",
};


export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {

  return (

      <html lang="en">

      <body>

      {children}

      </body>

      </html>
  );
}