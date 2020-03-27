import React from 'react';
import {FlatList, FlatListProps} from 'react-native';

export const List = <T extends {}>(props: FlatListProps<T>) => (
  <FlatList {...props} />
);
