import { BlogPost, BlogCategory } from '../types';

export const categories: BlogCategory[] = [
  { id: '1', name: 'Estate Planning', slug: 'estate-planning', count: 13 },
  { id: '2', name: 'Trusts', slug: 'trusts', count: 13 },
  { id: '3', name: 'Probate', slug: 'probate', count: 5 },
  { id: '4', name: 'Elder Law', slug: 'elder-law', count: 5 },
  { id: '5', name: 'Tax Planning', slug: 'tax-planning', count: 7 },
  { id: '6', name: 'Asset Protection', slug: 'asset-protection', count: 3 }
];

export const featuredPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Why Every Young Family Needs an Estate Plan',
    excerpt: 'Learn why estate planning is crucial for young families and how to protect your children\'s future.',
    date: 'March 15, 2024',
    readTime: 5,
    slug: 'why-every-young-family-needs-estate-plan',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80',
    author: {
      name: 'Adam Engel',
      avatar: 'https://www.engellawoffices.com/wp-content/uploads/2022/08/Adam_Engel_Headshot_Trans_2022-1.png'
    },
    category: 'estate-planning',
  },
  {
    id: '2',
    title: 'Understanding Living Trusts: A Comprehensive Guide',
    excerpt: 'Discover the benefits of living trusts and how they can help you avoid probate and protect your assets.',
    date: 'March 10, 2024',
    readTime: 7,
    slug: 'understanding-living-trusts-comprehensive-guide',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80',
    author: {
      name: 'Adam Engel',
      avatar: 'https://www.engellawoffices.com/wp-content/uploads/2022/08/Adam_Engel_Headshot_Trans_2022-1.png'
    },
    category: 'trusts',
  }
];

export const recentPosts: BlogPost[] = [
  {
    id: '3',
    title: '5 Common Estate Planning Mistakes to Avoid',
    excerpt: 'Learn about the most common estate planning pitfalls and how to avoid them to protect your legacy.',
    date: 'March 5, 2024',
    readTime: 4,
    slug: '5-common-estate-planning-mistakes',
    author: {
      name: 'Adam Engel',
      avatar: 'https://www.engellawoffices.com/wp-content/uploads/2022/08/Adam_Engel_Headshot_Trans_2022-1.png'
    },
    category: 'estate-planning',
  },
  {
    id: '4',
    title: 'Special Needs Trusts: Protecting Vulnerable Loved Ones',
    excerpt: 'Understanding how special needs trusts work and why they are essential for families with disabled dependents.',
    date: 'March 1, 2024',
    readTime: 6,
    slug: 'special-needs-trusts-protecting-loved-ones',
    author: {
      name: 'Adam Engel',
      avatar: 'https://www.engellawoffices.com/wp-content/uploads/2022/08/Adam_Engel_Headshot_Trans_2022-1.png'
    },
    category: 'trusts',
  },
  {
    id: '5',
    title: 'Estate Tax Planning Strategies for 2024',
    excerpt: 'Stay updated on the latest estate tax laws and learn strategies to minimize tax burden on your estate.',
    date: 'February 25, 2024',
    readTime: 8,
    slug: 'estate-tax-planning-strategies-2024',
    author: {
      name: 'Adam Engel',
      avatar: 'https://www.engellawoffices.com/wp-content/uploads/2022/08/Adam_Engel_Headshot_Trans_2022-1.png'
    },
    category: 'tax-planning',
  },
  {
    id: '6',
    title: 'Blended Families and Estate Planning',
    excerpt: 'Navigate the complexities of estate planning for blended families with multiple sets of children.',
    date: 'February 20, 2024',
    readTime: 6,
    slug: 'blended-families-estate-planning',
    author: {
      name: 'Adam Engel',
      avatar: 'https://www.engellawoffices.com/wp-content/uploads/2022/08/Adam_Engel_Headshot_Trans_2022-1.png'
    },
    category: 'estate-planning',
  },
  {
    id: '7',
    title: 'Guardianship 101: Protecting Minor Children',
    excerpt: 'Learn how to choose and legally appoint guardians for your minor children in your estate plan.',
    date: 'February 15, 2024',
    readTime: 5,
    slug: 'guardianship-101-protecting-minor-children',
    author: {
      name: 'Adam Engel',
      avatar: 'https://www.engellawoffices.com/wp-content/uploads/2022/08/Adam_Engel_Headshot_Trans_2022-1.png'
    },
    category: 'estate-planning',
  },
  {
    id: '8',
    title: 'Revocable vs. Irrevocable Trusts: Understanding the Differences',
    excerpt: 'Compare these two main trust types, their advantages, disadvantages, and common scenarios for each.',
    date: 'February 10, 2024',
    readTime: 6,
    slug: 'revocable-vs-irrevocable-trusts',
    author: {
      name: 'Adam Engel',
      avatar: 'https://www.engellawoffices.com/wp-content/uploads/2022/08/Adam_Engel_Headshot_Trans_2022-1.png'
    },
    category: 'estate-planning',
  },
  {
    id: '9',
    title: 'Charitable Remainder Trusts: Combining Philanthropy and Tax Savings',
    excerpt: 'Explore how CRTs can provide income, support a favorite cause, and reduce overall tax liability.',
    date: 'February 5, 2024',
    readTime: 7,
    slug: 'charitable-remainder-trusts',
    author: {
      name: 'Adam Engel',
      avatar: 'https://www.engellawoffices.com/wp-content/uploads/2022/08/Adam_Engel_Headshot_Trans_2022-1.png'
    },
    category: 'estate-planning',
  },
  {
    id: '10',
    title: 'Spendthrift Trusts: Protecting Beneficiaries from Themselves',
    excerpt: 'Discuss how these trusts prevent creditors or irresponsible spending from jeopardizing a beneficiary\'s inheritance.',
    date: 'January 30, 2024',
    readTime: 5,
    slug: 'spendthrift-trusts',
    author: {
      name: 'Adam Engel',
      avatar: 'https://www.engellawoffices.com/wp-content/uploads/2022/08/Adam_Engel_Headshot_Trans_2022-1.png'
    },
    category: 'estate-planning',
  },
  {
    id: '11',
    title: 'Trustee Selection and Responsibilities: Best Practices for Appointing the Right Person',
    excerpt: 'Outline what qualities a trustee should have and how to avoid common pitfalls in trust administration.',
    date: 'January 25, 2024',
    readTime: 6,
    slug: 'trustee-selection-responsibilities',
    author: {
      name: 'Adam Engel',
      avatar: 'https://www.engellawoffices.com/wp-content/uploads/2022/08/Adam_Engel_Headshot_Trans_2022-1.png'
    },
    category: 'estate-planning',
  },
  {
    id: '12',
    title: 'Specialty Trusts for Pets: Ensuring Lifelong Care for Furry Friends',
    excerpt: 'Explain how "pet trusts" work and why they matter for animal lovers who want to secure pet care.',
    date: 'January 20, 2024',
    readTime: 4,
    slug: 'specialty-trusts-for-pets',
    author: {
      name: 'Adam Engel',
      avatar: 'https://www.engellawoffices.com/wp-content/uploads/2022/08/Adam_Engel_Headshot_Trans_2022-1.png'
    },
    category: 'estate-planning',
  },
  {
    id: '13',
    title: 'How to Properly Fund Your Trust: Real Estate, Bank Accounts, and Beyond',
    excerpt: 'A practical guide detailing the step-by-step process of transferring assets into the trust\'s name.',
    date: 'January 15, 2024',
    readTime: 8,
    slug: 'how-to-fund-your-trust',
    author: {
      name: 'Adam Engel',
      avatar: 'https://www.engellawoffices.com/wp-content/uploads/2022/08/Adam_Engel_Headshot_Trans_2022-1.png'
    },
    category: 'estate-planning',
  },
  {
    id: '14',
    title: 'Navigating State Inheritance and Estate Taxes: Key Differences and Strategies',
    excerpt: 'Provide an overview of various state-level taxes and practical tips for cross-state property owners.',
    date: 'January 10, 2024',
    readTime: 6,
    slug: 'state-inheritance-estate-taxes',
    author: {
      name: 'Adam Engel',
      avatar: 'https://www.engellawoffices.com/wp-content/uploads/2022/08/Adam_Engel_Headshot_Trans_2022-1.png'
    },
    category: 'estate-planning',
  },
  {
    id: '15',
    title: 'The Power of Lifetime Gifting: Reducing Estate Taxes Early',
    excerpt: 'Dive deeper into gift tax exclusions, how to structure gifts, and the documentation required.',
    date: 'January 5, 2024',
    readTime: 7,
    slug: 'lifetime-gifting-strategies',
    author: {
      name: 'Adam Engel',
      avatar: 'https://www.engellawoffices.com/wp-content/uploads/2022/08/Adam_Engel_Headshot_Trans_2022-1.png'
    },
    category: 'estate-planning',
  },
  {
    id: '16',
    title: 'Family Limited Partnerships (FLPs): A Tool for Minimizing Taxable Estates',
    excerpt: 'Explain how FLPs work to consolidate family assets and lower overall tax burdens.',
    date: 'December 30, 2023',
    readTime: 8,
    slug: 'family-limited-partnerships',
    author: {
      name: 'Adam Engel',
      avatar: 'https://www.engellawoffices.com/wp-content/uploads/2022/08/Adam_Engel_Headshot_Trans_2022-1.png'
    },
    category: 'estate-planning',
  },
  {
    id: '17',
    title: 'Qualified Personal Residence Trusts (QPRTs): Minimizing the Home\'s Taxable Value',
    excerpt: 'Discuss how transferring a residence into a QPRT can help reduce future estate tax impacts.',
    date: 'December 25, 2023',
    readTime: 6,
    slug: 'qualified-personal-residence-trusts',
    author: {
      name: 'Adam Engel',
      avatar: 'https://www.engellawoffices.com/wp-content/uploads/2022/08/Adam_Engel_Headshot_Trans_2022-1.png'
    },
    category: 'estate-planning',
  },
  {
    id: '18',
    title: 'Portability of Estate Tax Exemptions for Married Couples',
    excerpt: 'Detail how spouses can "inherit" each other\'s unused exemption and the practical steps to implement portability.',
    date: 'December 20, 2023',
    readTime: 5,
    slug: 'estate-tax-exemption-portability',
    author: {
      name: 'Adam Engel',
      avatar: 'https://www.engellawoffices.com/wp-content/uploads/2022/08/Adam_Engel_Headshot_Trans_2022-1.png'
    },
    category: 'estate-planning',
  },
  {
    id: '19',
    title: 'Advanced Trust Planning: Grantor Retained Annuity Trusts (GRATs)',
    excerpt: 'Highlight how GRATs let high-net-worth individuals shift growth out of their taxable estate at a reduced tax cost.',
    date: 'December 15, 2023',
    readTime: 7,
    slug: 'grantor-retained-annuity-trusts',
    author: {
      name: 'Adam Engel',
      avatar: 'https://www.engellawoffices.com/wp-content/uploads/2022/08/Adam_Engel_Headshot_Trans_2022-1.png'
    },
    category: 'estate-planning',
  },
  {
    id: '20',
    title: 'Probate Basics: A Step-by-Step Guide to the Court Process',
    excerpt: 'Break down what probate is, how it works, and common challenges families face during estate settlement.',
    date: 'December 10, 2023',
    readTime: 7,
    slug: 'probate-basics-guide',
    author: {
      name: 'Adam Engel',
      avatar: 'https://www.engellawoffices.com/wp-content/uploads/2022/08/Adam_Engel_Headshot_Trans_2022-1.png'
    },
    category: 'probate',
  },
  {
    id: '21',
    title: 'Common Reasons for Probate Delays and How to Avoid Them',
    excerpt: 'Identify hurdles like unclear wills, missing documents, and estate disputes, plus tips for speeding things up.',
    date: 'December 5, 2023',
    readTime: 6,
    slug: 'common-probate-delays',
    author: {
      name: 'Adam Engel',
      avatar: 'https://www.engellawoffices.com/wp-content/uploads/2022/08/Adam_Engel_Headshot_Trans_2022-1.png'
    },
    category: 'probate',
  },
  {
    id: '22',
    title: 'Contesting a Will: Grounds, Procedures, and Possible Outcomes',
    excerpt: 'Discuss the legal bases for challenging a will and the implications for families and executors.',
    date: 'November 30, 2023',
    readTime: 8,
    slug: 'contesting-will-guide',
    author: {
      name: 'Adam Engel',
      avatar: 'https://www.engellawoffices.com/wp-content/uploads/2022/08/Adam_Engel_Headshot_Trans_2022-1.png'
    },
    category: 'probate',
  },
  {
    id: '23',
    title: 'Handling Debts and Liabilities During Probate',
    excerpt: 'Guide executors on how to deal with creditors\' claims, outstanding bills, and other financial obligations.',
    date: 'November 25, 2023',
    readTime: 6,
    slug: 'probate-debts-liabilities',
    author: {
      name: 'Adam Engel',
      avatar: 'https://www.engellawoffices.com/wp-content/uploads/2022/08/Adam_Engel_Headshot_Trans_2022-1.png'
    },
    category: 'probate',
  },
  {
    id: '24',
    title: 'The Executor\'s Responsibilities: Managing and Distributing the Estate',
    excerpt: 'Clarify an executor\'s duties, timeline, and best practices for maintaining transparency.',
    date: 'November 20, 2023',
    readTime: 7,
    slug: 'executor-responsibilities',
    author: {
      name: 'Adam Engel',
      avatar: 'https://www.engellawoffices.com/wp-content/uploads/2022/08/Adam_Engel_Headshot_Trans_2022-1.png'
    },
    category: 'probate',
  },
  {
    id: '25',
    title: 'When Probate Is Necessary (and When It Might Not Be)',
    excerpt: 'Explore property types and planning tools—like beneficiary designations and living trusts—that can circumvent probate.',
    date: 'November 15, 2023',
    readTime: 5,
    slug: 'when-probate-necessary',
    author: {
      name: 'Adam Engel',
      avatar: 'https://www.engellawoffices.com/wp-content/uploads/2022/08/Adam_Engel_Headshot_Trans_2022-1.png'
    },
    category: 'estate-planning',
  },
  {
    id: '26',
    title: 'Domestic Asset Protection Trusts: Shielding Your Wealth from Creditors',
    excerpt: 'Explain how DAPTs work, the states that allow them, and potential pitfalls or limitations.',
    date: 'November 10, 2023',
    readTime: 7,
    slug: 'domestic-asset-protection-trusts',
    category: 'asset-protection',
    author: {
      name: 'Adam Engel',
      avatar: 'https://www.engellawoffices.com/wp-content/uploads/2022/08/Adam_Engel_Headshot_Trans_2022-1.png'
    }
  },
  {
    id: '27',
    title: 'Protecting Real Estate from Lawsuits: Homestead Exemptions and Beyond',
    excerpt: 'Explore legal structures and exemptions designed to protect one\'s primary residence from creditor claims.',
    date: 'November 5, 2023',
    readTime: 6,
    slug: 'real-estate-asset-protection',
    category: 'asset-protection',
    author: {
      name: 'Adam Engel',
      avatar: 'https://www.engellawoffices.com/wp-content/uploads/2022/08/Adam_Engel_Headshot_Trans_2022-1.png'
    }
  },
  {
    id: '28',
    title: 'Business Entities for Asset Protection: LLCs, Corporations, and Series LLCs',
    excerpt: 'Compare various corporate structures for entrepreneurs and real estate investors to minimize personal liability.',
    date: 'October 31, 2023',
    readTime: 8,
    slug: 'business-entities-asset-protection',
    category: 'asset-protection',
    author: {
      name: 'Adam Engel',
      avatar: 'https://www.engellawoffices.com/wp-content/uploads/2022/08/Adam_Engel_Headshot_Trans_2022-1.png'
    }
  },
  {
    id: '29',
    title: 'Offshore Asset Protection Trusts: Weighing the Pros, Cons, and Legal Realities',
    excerpt: 'Investigate how offshore trusts operate, their regulatory environment, and ethical considerations.',
    date: 'October 25, 2023',
    readTime: 7,
    slug: 'offshore-asset-protection-trusts',
    category: 'asset-protection',
    author: {
      name: 'Adam Engel',
      avatar: 'https://www.engellawoffices.com/wp-content/uploads/2022/08/Adam_Engel_Headshot_Trans_2022-1.png'
    }
  },
  {
    id: '30',
    title: 'Long-Term Care Planning: Protecting Your Assets While Ensuring Quality Care',
    excerpt: 'Learn how to navigate long-term care options, including Medicaid planning, long-term care insurance, and trusts, to safeguard your assets and secure quality care.',
    date: 'December 10, 2023',
    readTime: 7,
    slug: 'long-term-care-planning',
    category: 'elder-law',
    author: {
      name: 'Adam Engel',
      avatar: 'https://www.engellawoffices.com/wp-content/uploads/2022/08/Adam_Engel_Headshot_Trans_2022-1.png'
    }
  },
  {
    id: '31',
    title: 'Guardianship and Conservatorship: When Loved Ones Need Legal Support',
    excerpt: 'Understand the differences between guardianship and conservatorship, the process of establishing them, and how to choose the right person to manage an elderly loved one\'s affairs.',
    date: 'December 17, 2023',
    readTime: 6,
    slug: 'guardianship-conservatorship',
    category: 'elder-law',
    author: {
      name: 'Adam Engel',
      avatar: 'https://www.engellawoffices.com/wp-content/uploads/2022/08/Adam_Engel_Headshot_Trans_2022-1.png'
    }
  },
  {
    id: '32',
    title: 'Avoiding Elder Financial Abuse: Tips for Safeguarding Your Loved Ones',
    excerpt: 'Discover practical strategies to protect seniors from scams and financial exploitation, along with the legal remedies available for victims of elder financial abuse.',
    date: 'December 22, 2023',
    readTime: 5,
    slug: 'avoiding-elder-financial-abuse',
    category: 'elder-law',
    author: {
      name: 'Adam Engel',
      avatar: 'https://www.engellawoffices.com/wp-content/uploads/2022/08/Adam_Engel_Headshot_Trans_2022-1.png'
    }
  },
  {
    id: '33',
    title: 'Understanding Powers of Attorney: A Guide for Seniors and Caregivers',
    excerpt: 'Explore the importance of powers of attorney for healthcare and finances, how to choose an agent, and why these documents are essential for seniors.',
    date: 'December 27, 2023',
    readTime: 7,
    slug: 'powers-of-attorney-guide',
    category: 'elder-law',
    author: {
      name: 'Adam Engel',
      avatar: 'https://www.engellawoffices.com/wp-content/uploads/2022/08/Adam_Engel_Headshot_Trans_2022-1.png'
    }
  },
  {
    id: '34',
    title: 'Estate Planning for Seniors: Preparing for the Golden Years',
    excerpt: 'Learn how seniors can simplify asset management, update healthcare directives, and create tax-efficient plans for passing on their legacy.',
    date: 'January 5, 2024',
    readTime: 8,
    slug: 'senior-estate-planning',
    category: 'elder-law',
    author: {
      name: 'Adam Engel',
      avatar: 'https://www.engellawoffices.com/wp-content/uploads/2022/08/Adam_Engel_Headshot_Trans_2022-1.png'
    }
  }
];