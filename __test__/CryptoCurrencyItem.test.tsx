import CryptoCurrencyItem from '@/modules/crypto/components/CryptoCurrencyItem';
import { CryptoCurrency } from '@/modules/crypto/models';
import { render, waitFor } from '@testing-library/react-native';
import React from 'react';

const createMockCrypto = (percentChange24h: number): CryptoCurrency => ({
  id: '1',
  name: 'Bitcoin',
  symbol: 'BTC',
  rank: 1,
  priceUsd: 50000,
  percentChange1h: 1.2,
  percentChange24h,
  percentChange7d: 5.8,
  marketCapUsd: 900000000000,
  volume24: 35000000000,
  volume24a: 34000000000,
  csupply: 18700000,
  tsupply: 21000000,
  msupply: null,
});

describe('CryptoCurrencyItem', () => {
  it('renders crypto with possitive 24h change in green', async () => {
    const mockCrypto = createMockCrypto(2.5);
    const { getByText } = render(<CryptoCurrencyItem crypto={mockCrypto} />);
    const change24hText = getByText('2.50%');
    await waitFor(() => {
      expect(change24hText).toHaveStyle({ color: 'green' });
    });
  });

  it('renders crypto with negative 24h change in red', async () => {
    const mockCrypto = createMockCrypto(-2.5);
    const { getByText } = render(<CryptoCurrencyItem crypto={mockCrypto} />);
    const change24hText = getByText('-2.50%');
    await waitFor(() => {
      expect(change24hText).toHaveStyle({ color: 'red' });
    });
  });
});
