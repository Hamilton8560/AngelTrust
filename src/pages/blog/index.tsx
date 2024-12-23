import React from 'react';
import { BlogSearch } from '../../components/blog/BlogSearch';
import { FeaturedPosts } from './FeaturedPosts';
import { BlogCategories } from './BlogCategories';
import { RecentPosts } from './RecentPosts';
import { SectionHeading } from '../../components/shared/SectionHeading';

export function BlogPage() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Estate Planning Insights"
          subtitle="Expert guidance and insights on estate planning, trust administration, and more"
          centered
        />
        
        <div className="mt-8 mb-12">
          <BlogSearch />
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-navy-900 mb-6">Featured Articles</h2>
          <FeaturedPosts />
        </div>

        <div className="mt-16 grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-navy-900 mb-6">Recent Articles</h2>
            <RecentPosts />
          </div>
          <div className="space-y-8">
            <BlogCategories />
          </div>
        </div>
      </div>
    </div>
  );
}