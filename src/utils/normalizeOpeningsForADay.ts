import {timeNormalizer} from './timeNormalizer';
import {RawOpeningHourTime} from '../models/rawOpeningHour';
import {NormalizedOpeningHourTime} from '../models/normalizedOpeningHour';

export const normalizeOpeningsForADay = (
  openings: RawOpeningHourTime[],
  nextDayOpenings: RawOpeningHourTime[],
): NormalizedOpeningHourTime[] => {
  if (openings.length === 0) return [];

  return openings.reduce<NormalizedOpeningHourTime[]>(
    // @ts-ignore
    (hoursAcc, hoursCurr, hoursCurrIndex, inputArray) => {
      if (hoursCurr.type === 'close') {
        if (hoursCurrIndex === 0) return hoursAcc;

        return [
          ...hoursAcc.slice(0, hoursAcc.length - 1),
          {
            ...hoursAcc[hoursAcc.length - 1],
            to: timeNormalizer(hoursCurr.value),
          },
        ];
      }

      let to = null;
      if (hoursCurrIndex === inputArray.length - 1) {
        to = timeNormalizer(nextDayOpenings[0].value);
      }

      return [
        ...hoursAcc,
        {
          from: timeNormalizer(hoursCurr.value),
          to,
        },
      ];
    },
    [],
  );
};
