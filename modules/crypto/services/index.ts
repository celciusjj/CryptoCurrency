import { http } from '@/services/api';
import { currencyAdapter } from '../adapter/CurrencyAdapter';
import { CryptoCurrency, TickerOption } from '../models';

export const getCurrencies = async (
  params: { ids?: string[] },
  start = 0,
  limit = 100,
): Promise<{ data: CryptoCurrency[]; nextStart: number; hasMore: boolean }> => {
  try {
    const { ids } = params;
    const endpointUrl = ids ? TickerOption.SINGLE : TickerOption.MULTIPLE;
    const query = new URLSearchParams({
      start: start.toString(),
      limit: limit.toString(),
    });

    if (ids?.length) query.append('id', ids.join(','));
    console.log(`/${endpointUrl}/?${query.toString()}`);
    const response = await http.get(`/${endpointUrl}/?${query.toString()}`);
    const rawData = endpointUrl === TickerOption.SINGLE ? response.data : response.data.data;
    const adaptedCurrency = currencyAdapter(rawData);

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
