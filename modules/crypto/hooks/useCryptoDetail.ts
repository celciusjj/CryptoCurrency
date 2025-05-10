import { useQuery } from '@tanstack/react-query';
import { useLocalSearchParams } from 'expo-router';
import { CryptoCurrency, SocialStat } from '../models';
import { getSingleCurrency, getSingleSocialStat } from '../services';

const REFETCH_INTERVAL = 30000;

export const useCryptoDetail = () => {
  const { id } = useLocalSearchParams();

  const { data: currencyData, isLoading: isLoadingCurrency } = useQuery({
    queryKey: ['crypto-detail', id],
    queryFn: async () => {
      const response = await getSingleCurrency<CryptoCurrency[]>(id as string);
      return response[0];
    },
    enabled: !!id,
    refetchInterval: REFETCH_INTERVAL,
  });

  const { data: socialStats, isLoading: isLoadingSocial } = useQuery({
    queryKey: ['crypto-social-stats', id],
    queryFn: async () => {
      return await getSingleSocialStat<SocialStat>(id as string);
    },
    enabled: !!id,
    refetchInterval: REFETCH_INTERVAL,
  });

  return {
    currencyData,
    socialStats,
    isLoadingSocial,
    isLoadingCurrency,
  };
};
