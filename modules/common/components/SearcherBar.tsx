 
import { useThemeContext } from '@/theme/context/ThemeContextProvider';
import { AppThemeColors, ThemeTypes, useAppTheme } from '@/theme/types';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { IconButton, Searchbar } from 'react-native-paper';

interface Props {
  placeholder: string;
  onChange?: React.Dispatch<React.SetStateAction<string>>;
  value?: string;
  onBlur?: () => void;
  onFocus?: () => void;
  autoFocus?: boolean;
  onSubmitEditing?: () => void;
}

export const SearcherBar = ({
  placeholder,
  onChange,
  value,
  onBlur,
  onFocus,
  autoFocus,
  onSubmitEditing,
}: Props) => {
  const [active, setActive] = useState(false);
  const { colors } = useAppTheme();
  const { currentTheme } = useThemeContext();
  const styles = barStyles(colors, currentTheme as string);

  const handleChangeText = (text: string) => {
    const regex = /^[0-9,]*$/;
    if (regex.test(text)) {
      onChange?.(text);
    }
  };

  return (
    <Searchbar
      autoFocus={autoFocus}
      inputStyle={styles.inputStyle}
      value={value ?? ''}
      onSubmitEditing={onSubmitEditing}
      onFocus={() => {
        onFocus?.();
        setActive(true);
      }}
      onBlur={() => {
        onBlur?.();
        setActive(false);
      }}
      onChangeText={handleChangeText}
      placeholder={placeholder}
      right={() => (
        <IconButton
          iconColor={active ? colors.primary : colors.grey600}
          onPress={() => onChange?.('')}
          icon="close"
          size={26}
        />
      )}
      style={[styles.container, { borderColor: active ? colors.primary : colors.grey600 }]}
      placeholderTextColor={colors.grey700}
    />
  );
};

export const barStyles = (colors: AppThemeColors, mode: string) =>
  StyleSheet.create({
    container: {
      backgroundColor: mode === ThemeTypes.DARK ? colors.paperDefault : colors.white,
      borderWidth: 1,
      justifyContent: 'center',
    },
    inputStyle: {
      color: colors.grey900,
    },
  });
