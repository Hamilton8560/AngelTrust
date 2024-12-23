import React from 'react';
import { CalendarDays, Clock, ArrowLeft } from 'lucide-react';
import { ConsultationButton } from '../../components/shared/ConsultationButton';

interface BlogPostProps {
  post: {
    title: string;
    date: string;
    readTime: number;
    author: {
      name: string;
      avatar: string;
    };
    image?: string;
  };
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="max-w-4xl mx-auto">
      <div className="mb-8">
        <a 
          href="/blog" 
          className="text-gold-500 hover:text-gold-600 transition-colors flex items-center"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </a>
      </div>

      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
        />
      )}

      <div className="flex items-center mb-6">
        <img
          src={post.author.avatar}
          alt={post.author.name}
          className="h-12 w-12 rounded-full mr-4"
        />
        <div>
          <div className="font-medium text-navy-900">{post.author.name}</div>
          <div className="flex items-center text-sm text-gray-500">
            <CalendarDays className="h-4 w-4 mr-1" />
            <span>{post.date}</span>
            <Clock className="h-4 w-4 ml-4 mr-1" />
            <span>{post.readTime} min read</span>
          </div>
        </div>
      </div>

      <h1 className="text-4xl font-bold text-navy-900 mb-6">{post.title}</h1>

      <div className="prose prose-lg max-w-none">
        <h2>The Importance of Early Planning</h2>
        <p>
          Many young families believe estate planning is something only wealthy retirees need to worry about. 
          However, having children changes everything - it's no longer just about you and your spouse, but 
          about ensuring your children's future security and well-being.
        </p>

        <h2>Key Components of a Young Family's Estate Plan</h2>
        <h3>1. Guardian Designation</h3>
        <p>
          Perhaps the most critical element for young parents is naming guardians for minor children. 
          Without this designation, the court will decide who raises your children if something happens 
          to both parents - a decision that may not align with your wishes.
        </p>

        <h3>2. Life Insurance Planning</h3>
        <p>
          Adequate life insurance ensures your family maintains their standard of living and can achieve 
          important goals like college education, even if a primary earner passes away unexpectedly.
        </p>

        <h3>3. Trust Creation</h3>
        <p>
          A trust can protect assets for your children's benefit and ensure they're managed responsibly 
          until they reach an age where they can handle the responsibility themselves. It also helps 
          avoid the costly and time-consuming probate process.
        </p>

        <h2>Common Misconceptions</h2>
        <ul>
          <li>"We don't have enough assets to need an estate plan"</li>
          <li>"We're too young to worry about this now"</li>
          <li>"Our family will know what to do if something happens"</li>
          <li>"It's too expensive and time-consuming"</li>
        </ul>

        <h2>The Risks of Not Having an Estate Plan</h2>
        <p>
          Without proper planning, your family could face significant challenges:
        </p>
        <ul>
          <li>Court-appointed guardians for your children</li>
          <li>Assets tied up in probate for months or years</li>
          <li>Higher estate taxes and legal fees</li>
          <li>Family conflicts over asset distribution</li>
          <li>Difficulty accessing funds for immediate needs</li>
        </ul>

        <h2>Getting Started</h2>
        <p>
          Creating an estate plan doesn't have to be overwhelming. Start with these basic steps:
        </p>
        <ol>
          <li>List your assets and debts</li>
          <li>Identify potential guardians for your children</li>
          <li>Review your life insurance coverage</li>
          <li>Consider your wishes for asset distribution</li>
          <li>Consult with an experienced estate planning attorney</li>
        </ol>

        <div className="bg-navy-900 text-white p-6 rounded-lg my-8">
          <h3 className="text-xl font-semibold mb-4">Take Action Now</h3>
          <p className="mb-6">
            Don't wait until it's too late. Protect your family's future with a comprehensive estate plan 
            tailored to your unique needs and circumstances.
          </p>
          <ConsultationButton className="w-full text-center py-3" />
        </div>
      </div>
    </article>
  );
}