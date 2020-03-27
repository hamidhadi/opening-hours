import {getReadableOpeningHours} from './getReadableOpeningHours';
import {NormalizedOpeningHour} from '../models/normalizedOpeningHour';

describe('Utils', () => {
  describe('getReadableOpeningHours', () => {
    test('Should return opening hours for the given days in correct format', () => {
      const mockOpeningHours = {
        monday: [],
        tuesday: [
          {type: 'open', value: 36000},
          {type: 'close', value: 64800},
        ],
      };
      const mockToday = new Date();

      const expected: NormalizedOpeningHour[] = [
        {
          day: 'Monday',
          isToday: false,
          openingHours: [],
        },
        {
          day: 'Tuesday',
          isToday: mockToday.getDay() === 2,
          openingHours: [
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
          ],
        },
      ];

      const output = getReadableOpeningHours(mockOpeningHours);
      expect(output).toStrictEqual(expected);
    });
  });
});
