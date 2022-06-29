export interface Projects {
  _id: string;
  title: string;
  stack: string[];
  slug: {
    current: string;
  };
  description: string;
  link: string;
}
