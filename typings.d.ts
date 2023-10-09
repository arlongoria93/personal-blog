export interface Projects {
  _id: string;
  mainImage: string;
  title: string;
  stack: string[];
  slug: {
    current: string;
  };
  description: string;
  github: string;
  deployed: string;
  category: {
    title: string;
  };
  body: [{}];
  publishedAt: string;
}
