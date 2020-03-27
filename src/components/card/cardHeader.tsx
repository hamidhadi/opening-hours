import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors, Text} from '../../theme';
import {Icon} from '../Icon';

interface CardHeaderProps {
  title: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({title}) => (
  <View style={styles.wrapper}>
    <Icon name={'schedule'} size={25} color={Colors.grey3} />
    <Text weight={'bold'} style={styles.textStyle}>
      {title}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 5,
    paddingBottom: 15,
    borderBottomColor: Colors.black,
    borderBottomWidth: 1.5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 30,
    color: Colors.black,
    marginStart: 10
  },
});
