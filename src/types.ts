export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: number;
  slug: string;
  image?: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
} 