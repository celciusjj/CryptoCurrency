import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

interface ArrowAnimation {
  color?: string;
  size?: number;
}

function withArrowDownAnimation<P extends ArrowAnimation>(
  WrappedComponent: React.ComponentType<P>,
) {
  const ArrowDownAnimation = (props: P) => {
    const positionAnimation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(positionAnimation, {
            toValue: 5,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(positionAnimation, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    }, []);

    return (
      <View style={styles.container}>
        <Animated.View style={{ transform: [{ translateY: positionAnimation }] }}>
          <WrappedComponent {...props} color={'red'} name="arrow-down" />
        </Animated.View>
      </View>
    );
  };
  return ArrowDownAnimation;
}

export default withArrowDownAnimation;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
