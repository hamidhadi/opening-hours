import {normalizeOpeningsForADay} from './normalizeOpeningsForADay';
import {NormalizedOpeningHourTime} from '../models/normalizedOpeningHour';

describe('Utils', () => {
  describe('normalizeOpeningsForADay', () => {
    test('Should normalize opening hours in correct format for a given day', () => {
      const mockOpenings = [
        {type: 'open', value: 36000},
        {type: 'close', value: 64800},
      ];
      const output = normalizeOpeningsForADay(mockOpenings, []);
      const expected: NormalizedOpeningHourTime[] = [
        {
          from: {
            hour: 10,
            minute: 0,
            label: 'AM',
          },
          to: {
            hour: 6,
            minute: 0,
            label: 'PM',
          },
        },
      ];

      expect(output).toStrictEqual(expected);
    });

    test('Should use the next day timing for closing time', () => {
      const mockOpenings = [{type: 'open', value: 36000}];
      const mockNextDayOpenings = [
        {type: 'close', value: 3600},
        {type: 'open', value: 36000},
      ];

      const output = normalizeOpeningsForADay(
        mockOpenings,
        mockNextDayOpenings,
      );
      const expected: NormalizedOpeningHourTime[] = [
        {
          from: {
            hour: 10,
            minute: 0,
            label: 'AM',
          },
          to: {
            hour: 1,
            minute: 0,
            label: 'AM',
          },
        },
      ];

      expect(output).toStrictEqual(expected);
    });
  });
});
