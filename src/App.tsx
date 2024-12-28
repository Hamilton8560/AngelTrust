import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Hero } from "./components/Hero";
import { ServicesPage } from "./pages/services";
import { AboutPage } from "./pages/about";
import { BlogPage } from "./pages/blog";
import { BlogPostPage } from "./pages/blog/BlogPostPage";
import { CategoryPage } from "./pages/blog/CategoryPage";
import { ContactPage } from "./pages/contact";
import { PrivacyPolicy } from "./pages/legal/PrivacyPolicy";
import { Disclaimer } from "./pages/legal/Disclaimer";
import { TermsOfService } from "./pages/legal/TermsOfService";

export default function App() {
  // Use Vite's import.meta.env instead of process.env
  const basename = import.meta.env.BASE_URL || "/";

  return (
    <Router basename={basename}>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div id="hero">
                  <Hero />
                </div>
                <ServicesPage />
                <AboutPage />
                <BlogPage />
                <ContactPage />
              </>
            }
          />
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
