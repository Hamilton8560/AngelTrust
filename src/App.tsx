import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { LandingPage } from './components/landing/LandingPage';
import { BlogPage } from './pages/blog';
import { BlogPostPage } from './pages/blog/BlogPostPage';
import { CategoryPage } from './pages/blog/CategoryPage';
import { PrivacyPolicy } from './pages/legal/PrivacyPolicy';
import { Disclaimer } from './pages/legal/Disclaimer';
import { TermsOfService } from './pages/legal/TermsOfService';

export default function App() {
  const basename = import.meta.env.BASE_URL || '/';

  return (
    <Router basename={basename}>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/category/:category" element={<CategoryPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
      </Layout>
    </Router>
  );
}
