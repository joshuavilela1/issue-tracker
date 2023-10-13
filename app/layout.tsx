import '@radix-ui/themes/styles.css'; // * Radix UI Package
import '../styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Theme } from '@radix-ui/themes';
import NavBar from '@/components/NavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Issue Tracker',
  description: 'Issue Tracker',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <NavBar />
          <main className="p-5">{children}</main>
        </Theme>
      </body>
    </html>
  );
}
