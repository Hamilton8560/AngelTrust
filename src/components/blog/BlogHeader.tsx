import React from 'react';
import { CalendarDays, Clock, ArrowLeft } from 'lucide-react';

interface BlogHeaderProps {
  title: string;
  date: string;
  readTime: number;
  author: {
    name: string;
    avatar: string;
  };
  onBack: () => void;
}

export function BlogHeader({ title, date, readTime, author, onBack }: BlogHeaderProps) {
  return (
    <div className="mb-8">
      <button
        onClick={onBack}
        className="flex items-center text-gray-600 hover:text-gold-500 mb-4"
      >
        <span>← Back to Blog</span>
      </button>

      <h1 className="text-4xl font-bold text-navy-900 mb-6">{title}</h1>

      <div className="flex items-center">
        <img
          src={author.avatar}
          alt={author.name}
          className="h-12 w-12 rounded-full mr-4"
        />
        <div>
          <div className="font-medium text-navy-900">{author.name}</div>
          <div className="flex items-center text-sm text-gray-500">
            <CalendarDays className="h-4 w-4 mr-1" />
            <span>{date}</span>
            <Clock className="h-4 w-4 ml-4 mr-1" />
            <span>{readTime} min read</span>
          </div>
        </div>
      </div>
    </div>
  );
}