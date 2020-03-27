import React from 'react';
import {ListRenderItemInfo} from 'react-native';
import {Card} from '../card';
import {List} from '../list';
import {ListSeparator} from '../list/listSeparator';
import {OpeningHourItem} from './openingHourItem';
import {NormalizedOpeningHour} from '../../models/normalizedOpeningHour';

interface OpeningHoursProps {
  data: NormalizedOpeningHour[];
}

const renderItem = ({item}: ListRenderItemInfo<NormalizedOpeningHour>) => (
  <OpeningHourItem data={item} />
);

const keyExtractor = (item: NormalizedOpeningHour) => item.day;

export const OpeningHours: React.FC<OpeningHoursProps> = ({data}) => (
  <Card title={'Opening Hours'}>
    <List
      data={data}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <ListSeparator />}
      ListFooterComponent={<ListSeparator />}
      keyExtractor={keyExtractor}
      scrollEnabled={false}
    />
  </Card>
);
