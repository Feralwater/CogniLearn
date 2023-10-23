export interface Review {
  id: number;
  name: string;
  review: string;
  rating: number;
}

export interface ServerReview {
  id: number;
  name: string;
  body: string;
  postId: number;
  email: string;
}