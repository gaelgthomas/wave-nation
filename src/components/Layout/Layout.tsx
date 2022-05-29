import { ReactNode } from 'react';

import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';

interface Props {
  children: ReactNode | ReactNode[];
}

const Layout = ({ children }: Props) => (
  <div className='flex min-h-screen flex-col bg-yellow-500'>
    <Header />
    <main className='flex-1'>{children}</main>
    <Footer />
  </div>
);

export default Layout;
