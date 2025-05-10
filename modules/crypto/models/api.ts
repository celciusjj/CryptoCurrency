export interface CryptoCurrencyResponse {
  id: string;
  symbol: string;
  name: string;
  nameid: string;
  rank: number;
  price_usd: string;
  price_btc: string;
  market_cap_usd: string;
  volume24: number;
  volume24a: number;
  percent_change_1h: string;
  percent_change_24h: string;
  percent_change_7d: string;
  csupply: string;
  tsupply: string;
  msupply: string | null;
}
