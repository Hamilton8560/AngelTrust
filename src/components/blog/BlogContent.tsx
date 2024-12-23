import React from 'react';
import { ConsultationButton } from '../shared/ConsultationButton';

interface BlogContentProps {
  content: {
    title: string;
    introduction: string;
    sections: {
      title: string;
      content: string;
    }[];
    conclusion: string;
  };
}

export function BlogContent({ content }: BlogContentProps) {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="lead text-gray-600 mb-8">{content.introduction}</p>

      {content.sections.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-bold text-navy-900 mb-4">{section.title}</h2>
          {section.content.split('\n\n').map((paragraph, pIndex) => (
            <p key={pIndex} className="text-gray-600 mb-4 whitespace-pre-wrap">{paragraph}</p>
          ))}
        </div>
      ))}

      <div className="bg-navy-900 text-white p-6 rounded-lg my-8">
        <h3 className="text-xl font-semibold mb-4">Ready to Get Started?</h3>
        <p className="mb-6">
          Take the first step toward protecting your legacy. Schedule a consultation to discuss how 
          we can help you create a comprehensive estate plan tailored to your needs.
        </p>
        <ConsultationButton className="w-full text-center py-3" />
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-navy-900 mb-4">Conclusion</h2>
        <p className="text-gray-600">{content.conclusion}</p>
      </div>
    </article>
  );
}