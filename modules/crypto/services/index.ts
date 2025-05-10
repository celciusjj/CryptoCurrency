import { http } from "@/services/api";
import { currencyAdapter } from "../adapter/CurrencyAdapter";

export const getCurrencies = async <T>(
  params: {
    id?: string;
    symbol?: string;
    nameid?: string;
    name?: string;
  },
  start = 0,
  limit = 100
) => {
  try {
    const query = new URLSearchParams({
      start: start.toString(),
      limit: limit.toString(),
    });
    if (params.id) query.append("id", params.id);
    if (params.symbol) query.append("symbol", params.symbol);
    if (params.nameid) query.append("nameid", params.nameid);
    if (params.name) query.append("name", params.name);
    const response = await http.get(`/tickers/?${query.toString()}`);
    const adaptedCurrency = currencyAdapter(response.data.data);
    return adaptedCurrency as T;
  } catch (e) {
    return e as T;
  }
};
