export interface CryptoCurrency {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  priceUsd: number;
  percentChange1h: number;
  percentChange24h: number;
  percentChange7d: number;
  marketCapUsd: number;
  volume24: number;
  volume24a: number;
  csupply: number;
  tsupply: number;
  msupply: number | null;
}

export interface SocialStat {
  redditActiveUsers: number | null;
  redditSubscribers: number | null;
  twitterFollowers: number;
  twitterPosts: number;
}
