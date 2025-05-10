import { http } from '@/services/api';
import { currencyAdapter } from '../adapter/CurrencyAdapter';
import { socialStatAdapter } from '../adapter/SocialStatAdapter';
import { CryptoCurrency } from '../models';

export const getMultipleCurrencies = async (
  start = 0,
  limit = 100,
): Promise<{ data: CryptoCurrency[]; nextStart: number; hasMore: boolean }> => {
  try {
    const query = new URLSearchParams({
      start: start.toString(),
      limit: limit.toString(),
    });
    const response = await http.get(`/tickers/?${query.toString()}`);
    const adaptedCurrency = currencyAdapter(response.data.data);
    return {
      data: adaptedCurrency,
      nextStart: start + limit,
      hasMore: adaptedCurrency?.length === limit,
    };
  } catch {
    return {
      data: [],
      nextStart: start,
      hasMore: false,
    };
  }
};

export const getSingleCurrency = async <T>(ids: string): Promise<T> => {
  try {
    const query = new URLSearchParams({
      id: ids,
    });
    const response = await http.get(`/ticker/?${query.toString()}`);
    const adaptedCurrency = currencyAdapter(response.data);
    return adaptedCurrency as T;
  } catch {
    return [] as T;
  }
};

export const getSingleExchange = async <T>(id: string): Promise<T> => {
  try {
    const response = await http.get(`/exchange/?id=${id}`);
    const adaptedCurrency = currencyAdapter(response.data);
    return adaptedCurrency as T;
  } catch {
    return [] as T;
  }
};

export const getSingleSocialStat = async <T>(id: string): Promise<T> => {
  try {
    const response = await http.get(`/coin/social_stats/?id=${id}`);
    const adaptedStat = socialStatAdapter(response.data);
    return adaptedStat as T;
  } catch {
    return [] as T;
  }
};
