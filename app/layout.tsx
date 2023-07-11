import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'wavv',
  description: 'AI music generator by wavv',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <div className='h-screen'>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
