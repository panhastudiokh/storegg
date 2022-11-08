export type Platform = "Desktop" | "Mobile" | "Others";
export type TransactionStatus = "success" | "pending" | "failed";

export interface IFTransaction {
  game: string;
  gameImage: string;
  platform: Platform;
  item: string;
  price: string;
  status: TransactionStatus;
}

export interface ICategory {
  categoryId: string;
  name: string;
  description: string;
}

// Games or Vouchers
export interface IGameItem {
  voucherId: string;
  gameName: string;
  thumbnail: string;
  gameCoinName: string;
  status: string;
  category: ICategory;
  [key: string]: any;
}

export interface IFeaturedGameQueries {
  limit: number;
  page: number;
  search?: string;
  sortBy?: string;
}