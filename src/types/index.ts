export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: number;
  slug: string;
  image?: string;
  author: {
    name: string;
    avatar: string;
  };
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  count: number;
}