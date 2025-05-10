import React, { Fragment } from 'react';
import { StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

interface Props {
  loading: boolean;
}

const Loader = ({ loading }: Props) => {
  return (
    <Fragment>
      {loading ? <ActivityIndicator animating={true} size="large" style={styles.spinner} /> : null}
    </Fragment>
  );
};

export default Loader;

export const styles = StyleSheet.create({
  spinner: {
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99,
  },
});
