import React from 'react';
import {View, StyleSheet} from 'react-native';
import {CardHeader} from './cardHeader';
import {Colors} from '../../theme/colors';

interface CardProps {
  title: string
}

export const Card: React.FC<CardProps> = ({ title, children }) => (
  <View style={styles.wrapper}>
    <CardHeader title={title} />
    <View>
      {children}
    </View>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: Colors.white,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 3,
    shadowColor: Colors.black,
    shadowOpacity: 0.1,
    elevation: 3,
  },
});
