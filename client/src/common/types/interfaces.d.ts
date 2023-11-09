export interface PostCardProps {
  post: PostCard;
}

export interface PostCard {
  id: number;
  community: string;
  caption: string;
  author: string;
  image: string;
  votes: number;
}

export interface NavTextProps {
  text: string;
  link: string;
}
