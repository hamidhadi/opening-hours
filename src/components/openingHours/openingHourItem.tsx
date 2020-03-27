import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors, Text} from '../../theme';
import {NormalizedOpeningHour} from '../../models/normalizedOpeningHour';
import {NormalizedTime} from '../../models/normalizedTime';

interface OpeningHourItemProps {
  data: NormalizedOpeningHour;
}

const openingTimeRenderer = (time: NormalizedTime) => {
  let output = `${time.hour}`;
  if (time.minute > 0) {
    output += time.minute < 10 ? `:0${time.minute}` : `:${time.minute}`;
  }

  output += ` ${time.label}`;

  return output;
};

export const OpeningHourItem: React.FC<OpeningHourItemProps> = ({data}) => (
  <View style={styles.wrapper}>
    <View style={styles.dayWrapper}>
      <Text numberOfLines={1} weight={'medium'} style={styles.dayLabel}>
        {data.day}
      </Text>
      {!!data.isToday && (
        <Text weight={'bold'} style={styles.todayLabel}>
          TODAY
        </Text>
      )}
    </View>
    <View>
      {data.openingHours.length ? (
        data.openingHours.map((opening, index) => (
          <Text
            key={index}
            numberOfLines={1}
            style={[
              styles.openingTimeLabel,
              {paddingTop: index > 0 ? 5 : 0},
            ]}>{`${openingTimeRenderer(opening.from)} - ${openingTimeRenderer(
            opening.to,
          )}`}</Text>
        ))
      ) : (
        <Text style={styles.closedLabel}>Closed</Text>
      )}
    </View>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 10,
    flexDirection: 'row',
  },
  dayWrapper: {
    flex: 1,
    flexShrink: 2,
    flexDirection: 'row',
    alignContent: 'center',
    overflow: 'hidden'
  },
  dayLabel: {
    fontSize: 16,
    paddingEnd: 10,
  },
  todayLabel: {
    fontSize: 12,
    paddingTop: 2.5,
    color: Colors.green,
  },
  openingTimeLabel: {
    fontSize: 16,
    color: Colors.black,
  },
  closedLabel: {
    fontSize: 16,
    color: Colors.grey3,
  },
});
