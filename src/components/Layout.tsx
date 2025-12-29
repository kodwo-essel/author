import { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
