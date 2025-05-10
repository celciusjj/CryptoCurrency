export interface CryptoCurrency {
  id: string;
  name: string;
  symbol: string;
  priceUsd: number;
  percentChange24h: number;
  marketCapUsd: number;
  rank: number;
}
