import { AppThemeColors, useAppTheme } from "@/theme/types";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Divider, Icon, Surface, Text } from "react-native-paper";
import { CryptoCurrency } from "../models";

interface Props {
  crypto: CryptoCurrency;
  onPress: (currencyId: number) => void;
}

const CryptoCurrencyItem = ({ crypto, onPress }: Props) => {
  const { colors } = useAppTheme();
  const styles = vehicleStyles(colors);

  return (
    <TouchableOpacity onPress={() => onPress(crypto.rank)}>
      <Surface
        elevation={0}
        style={[styles.container, { borderColor: colors.grey600 }]}
      >
        <View style={styles.itemContainer}>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <Icon color={colors.primary700} size={32} source="currency-usd" />
            <Text variant="titleSmall" style={{ color: colors.primary700 }}>
              {crypto.name} ({crypto.symbol})
            </Text>
          </View>
          <View>
            <Text variant="titleSmall" style={{ color: colors.primary700 }}>
              #{crypto.rank}
            </Text>
          </View>
        </View>

        <Divider />

        <View style={{ marginTop: 10 }}>
          <View style={styles.itemContainer}>
            <Text style={styles.textInfo}>Precio USD</Text>
            <Text>${crypto.priceUsd.toFixed(2)}</Text>
          </View>
          <View style={styles.itemContainer}>
            <Text style={styles.textInfo}>Cambio 24h</Text>
            <Text
              style={{
                color: crypto.percentChange24h >= 0 ? "green" : "red",
              }}
            >
              {crypto.percentChange24h.toFixed(2)}%
            </Text>
          </View>
          <View style={styles.itemContainer}>
            <Text style={styles.textInfo}>Market Cap</Text>
            <Text>${crypto.marketCapUsd.toLocaleString()}</Text>
          </View>
        </View>
      </Surface>
    </TouchableOpacity>
  );
};

export default CryptoCurrencyItem;

export const vehicleStyles = (colors: AppThemeColors) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 15,
      paddingVertical: 10,
      marginBottom: 10,
      borderWidth: 1,
      borderRadius: 16,
    },
    itemContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 10,
    },
    textInfo: {
      fontWeight: "700",
    },
  });
