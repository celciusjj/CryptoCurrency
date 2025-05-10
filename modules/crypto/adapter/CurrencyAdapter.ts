import { CryptoCurrency, CryptoCurrencyResponse } from '../models';

export const currencyAdapter = (currencyResponse: CryptoCurrencyResponse[]) => {
  const adapted: CryptoCurrency[] = currencyResponse?.map(currency => {
    return {
      id: currency.id,
      name: currency.name,
      symbol: currency.symbol,
      rank: Number(currency.rank),
      priceUsd: parseFloat(currency.price_usd),
      percentChange1h: parseFloat(currency.percent_change_1h),
      percentChange24h: parseFloat(currency.percent_change_24h),
      percentChange7d: parseFloat(currency.percent_change_7d),
      marketCapUsd: parseFloat(currency.market_cap_usd),
      volume24: currency.volume24,
      volume24a: currency.volume24a,
      csupply: parseFloat(currency.csupply),
      tsupply: parseFloat(currency.tsupply),
      msupply: currency.msupply ? parseFloat(currency.msupply) : null,
    };
  });

  return adapted ?? [];
};
