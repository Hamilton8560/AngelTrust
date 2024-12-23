import React from 'react';
import { Navigation } from './shared/Navigation';
import { Footer } from './shared/Footer';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}