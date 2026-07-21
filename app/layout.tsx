/*
 * Copyright (c) 2026 Ecolely. All rights reserved.
 * Unauthorized copying, modification, distribution, or use of this software is strictly prohibited.
 */

import './globals.css';

import Header from '@/shared/navigation/components/Header';
import Footer from '@/shared/ui/Footer';

export const metadata = {
  title: 'Ecolely',
  description: 'Modern learning platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
