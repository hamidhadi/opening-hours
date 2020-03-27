import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';

export const ListSeparator: React.FC<{}> = () => (
  <View style={styles.wrapper} />
);

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.grey2,
  },
});
