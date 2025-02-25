export interface Course {
    id: number;
    title: string;
    author: string;
    image?: string;
    price?: number;
    description?: string;
    duration?: string;
    level?: string;
    category?: string;
    tags?: string[];
    enrollments?: number;
    rating?: number;
    reviews?: number;
  }