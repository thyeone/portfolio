import { PropsWithChildren } from 'react';
import Header from '@components/common/Header';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main className="flex flex-col w-full h-full max-w-4xl px-4 py-16">
      <Header />
      {children}
    </main>
  );
};

export default Layout;
