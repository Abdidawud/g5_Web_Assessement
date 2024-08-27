export interface Author {
    _id: string;
    name: string;
    email: string;
    image: string;
    role: string;
  }
  
  export interface Blog {
    _id: string;
    title: string;
    description: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    isPending: boolean;
    likes: number;
    tags: string[];
    skills: string[];
    relatedBlogs: string[];
    __v: number;
    author: Author;
  }
  