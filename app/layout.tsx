import '@radix-ui/themes/styles.css'; // * Radix UI Package
import '../styles/globals.css';
import '../styles/theme-config.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Theme, ThemePanel } from '@radix-ui/themes';
import NavBar from '@/components/NavBar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

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
      <body className={inter.variable}>
        <Theme appearance="light" accentColor="violet">
          <NavBar />
          <main className="p-5">{children}</main>
          {/* <ThemePanel /> is used to customize radix ui */}
        </Theme>
      </body>
    </html>
  );
}
