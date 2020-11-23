export interface Reward {
  title: string;
  items: {
    basic: ItemReward[];
    mid: ItemReward[];
    rare: ItemReward[];
    ultra: ItemReward[];
  }
}

export interface ItemReward {
  item: string;
  qty: number;
  probability: number;
}

export interface Rules {
  version: string;
  rules: any;
}

export interface ShopItem {
  id: string;
  title: string;
  description: any;
  image: Image;
  amount: number;
}

export interface CarouselServer {
  title: string;
  image: Image;
}

export interface CarouselUser {
  title: string;
  creators: string;
  image: Image;
}

export interface UserAchievements {
  userName: string;
  achievements: string;
  userImage: Image;
  date: Date;
}

export interface Blog {
  icon: string
  title: string;
  description: any;
  photo: Image;
  publishDate: string;
  tag: string;
  author: string;
}

export interface Image {
  fields: Fields2;
}

export interface Fields2 {
  title: string;
  description: string;
  file: File;
}

export interface File {
  url: string;
  details: Details;
  fileName: string;
  contentType: string;
}

export interface Details {
  size: number;
  image: Image2;
}

export interface Image2 {
  width: number;
  height: number;
}
