import './globals.css';
import { Poppins, Raleway } from 'next/font/google';
import { Footer, Header } from '@/components/layout';

const inter = Raleway({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700']
});

export const metadata = {
  title: 'Theophilus Ighalo',
  description: 'Online portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
