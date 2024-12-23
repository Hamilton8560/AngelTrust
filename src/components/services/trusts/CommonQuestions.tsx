import React from 'react';
import { HelpCircle } from 'lucide-react';

const questions = [
  {
    question: 'What is the difference between a revocable and irrevocable trust?',
    answer: 'A revocable trust can be modified during your lifetime, while an irrevocable trust cannot be changed once established.'
  },
  {
    question: 'Do I still need a will if I have a living trust?',
    answer: 'Yes, a "pour-over" will is recommended to handle any assets not transferred to your trust.'
  },
  {
    question: 'How does a living trust avoid probate?',
    answer: 'Assets in the trust bypass probate because they are owned by the trust, not you personally.'
  },
  {
    question: 'Can I be my own trustee?',
    answer: 'Yes, with a revocable living trust, you can be your own trustee and maintain complete control.'
  }
];

export function CommonQuestions() {
  return (
    <div className="bg-navy-900 text-white p-6 rounded-lg mb-8">
      <h3 className="text-xl font-semibold mb-4">Common Questions</h3>
      <div className="space-y-4">
        {questions.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-start">
              <HelpCircle className="h-5 w-5 text-gold-500 mr-2 mt-1 flex-shrink-0" />
              <p className="font-medium">{item.question}</p>
            </div>
            <p className="text-gray-300 ml-7">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}