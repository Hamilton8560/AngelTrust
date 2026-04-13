export interface Testimonial {
  name: string;
  initial: string;
  quote: string;
  boldPhrase: string;
}

export const ROW_1_TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah',
    initial: 'S',
    quote: 'Shout out to Adam for helping me through some very difficult circumstances. Adam is friendly, professional, and the kind of attorney you want on your side.',
    boldPhrase: 'some very difficult circumstances.',
  },
  {
    name: 'Anthony',
    initial: 'A',
    quote: 'Adam and his staff have been incredibly helpful in guiding our family. His attention to detail, timeliness, and professionalism have been greatly appreciated. We will be using him for any and all legal matters moving forward.',
    boldPhrase: 'any and all legal matters moving forward.',
  },
  {
    name: 'Ashley',
    initial: 'A',
    quote: 'Exceptional Service and Expertise. A stellar experience with Engel Law Offices.',
    boldPhrase: 'Exceptional Service and Expertise.',
  },
  {
    name: 'Steven',
    initial: 'S',
    quote: 'What a wonderful experience updating our will. He was personable, knowledgeable, and efficient. My husband and I highly recommend this firm.',
    boldPhrase: 'highly recommend this firm.',
  },
  {
    name: 'Linda',
    initial: 'L',
    quote: 'Expert legal work at affordable rates.',
    boldPhrase: 'Expert legal work at affordable rates.',
  },
  {
    name: 'Donald',
    initial: 'D',
    quote: 'Provided sound advice and was attentive to details. Easy to speak with & an all-around kind person. Would recommend.',
    boldPhrase: 'sound advice',
  },
  {
    name: 'Mark',
    initial: 'M',
    quote: 'Adam was incredibly knowledgeable, kind and explained things in a straightforward manner. I felt he was working with me to explain and communicate, which is important because I have a medical condition — I really appreciate his patience and understanding.',
    boldPhrase: 'patience and understanding.',
  },
  {
    name: 'Betty',
    initial: 'B',
    quote: 'Adam was great! Responsive, agile, and professional. Great experience!',
    boldPhrase: 'Responsive, agile, and professional.',
  },
];

export const ROW_2_TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sandra',
    initial: 'S',
    quote: 'I wholeheartedly recommend Adam Engel. His blend of professionalism, knowledge, and genuine care for his clients makes him a standout in his field.',
    boldPhrase: 'professionalism, knowledge, and genuine care',
  },
  {
    name: 'Susan',
    initial: 'S',
    quote: 'I had questions about Power of Attorney and Adam resolved my issue without me needing to come in! Highly recommend!',
    boldPhrase: 'resolved my issue without me needing to come in!',
  },
  {
    name: 'Jessica',
    initial: 'J',
    quote: 'Adam is a top notch professional. His work and business ethics are excellent, and he will do everything he can to make sure all his clients needs are met, and met in a timely fashion.',
    boldPhrase: 'everything he can to make sure all his clients needs are met',
  },
  {
    name: 'Lisa',
    initial: 'L',
    quote: 'Mr. Adam Engel provided me with legal counsel at a time in my life when I needed to get Power of Attorney for my sister\'s estate.',
    boldPhrase: 'at a time in my life when I needed',
  },
  {
    name: 'Patricia',
    initial: 'P',
    quote: 'Adam\'s amazing knowledge, integrity, attention to detail and winning spirit make any transaction a pleasure. Thank you Adam!',
    boldPhrase: 'knowledge, integrity, attention to detail',
  },
  {
    name: 'Michelle',
    initial: 'M',
    quote: 'Mr. Engel is extremely responsive & professional in dealing with our clients!',
    boldPhrase: 'extremely responsive & professional',
  },
  {
    name: 'Nancy',
    initial: 'N',
    quote: 'I had a very good experience with Mr. Engel. He was very thorough and expeditious in successfully dealing with the legal requirements involving updating my will.',
    boldPhrase: 'very thorough and expeditious',
  },
];

export const ALL_TESTIMONIALS: Testimonial[] = [...ROW_1_TESTIMONIALS, ...ROW_2_TESTIMONIALS];
