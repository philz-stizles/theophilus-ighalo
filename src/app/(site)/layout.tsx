import '@/app/globals.css';
import { Raleway } from 'next/font/google';
import { Footer, Header } from '@/components/layout';
import { ScrollButton } from '@/components/ui';

const inter = Raleway({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
});

export const metadata = {
  title: 'Theophilus Ighalo',
  description: 'Online portfolio',
};

export default function HomeLayout({
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
        <ScrollButton />
      </body>
    </html>
  );
}
