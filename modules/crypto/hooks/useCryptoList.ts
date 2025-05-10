import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { CryptoCurrency } from "../models";
import { getCurrencies } from "../services";

export const useCryptoList = () => {
  const [filter, setFilter] = useState("");
  const getTheCryptoCurrencies = (start: number, limit: number) => {
    const query = useQuery({
      queryKey: ["crypto-list", start, limit, filter],
      queryFn: () => getCurrencies<CryptoCurrency[]>({}, start, limit),
    });
    return query;
  };

  return { getTheCryptoCurrencies, filter, setFilter };
};
