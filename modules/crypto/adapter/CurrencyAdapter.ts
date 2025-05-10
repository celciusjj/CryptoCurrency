import { CryptoCurrency, CryptoCurrencyResponse } from "../models";

export const currencyAdapter = (currencyResponse: CryptoCurrencyResponse[]) => {
  const adapted: CryptoCurrency[] = currencyResponse?.map((currency) => {
    return {
      id: currency.id,
      name: currency.name,
      symbol: currency.symbol,
      priceUsd: parseFloat(currency.price_usd),
      percentChange24h: parseFloat(currency.percent_change_24h),
      marketCapUsd: parseFloat(currency.market_cap_usd),
      rank: Number(currency.rank),
    };
  });

  return adapted;
};
