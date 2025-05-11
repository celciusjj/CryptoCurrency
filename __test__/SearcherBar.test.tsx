import { SearcherBar } from '@/modules/common/components/SearcherBar';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import React from 'react';

describe('SearcherBar', () => {
  it('filters out non-numeric and non-comma characters', async () => {
    const errorValue = 'A123,45!';
    const mockOnChange = jest.fn();
    const { getByPlaceholderText } = render(
      <SearcherBar placeholder="Search..." value={''} onChange={mockOnChange} />,
    );
    const input = getByPlaceholderText('Search...');
    fireEvent.changeText(input, errorValue);
    await waitFor(() => {
      expect(mockOnChange).not.toHaveBeenCalled();
    });
  });
});
