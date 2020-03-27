import {normalizeOpeningsForADay} from './normalizeOpeningsForADay';
import {NormalizedOpeningHour} from '../models/normalizedOpeningHour';
import {RawOpeningHour} from '../models/rawOpeningHour';

const daysOfWeek = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
];

export const getReadableOpeningHours = (
  input: RawOpeningHour,
): NormalizedOpeningHour[] => {
  const today = new Date();
  const inputInArray = Object.entries(input)

  return inputInArray.reduce<NormalizedOpeningHour[]>((acc, curr, index) => {
    const [day, openingHours] = curr;

    const nextDayIndex = index === inputInArray.length - 1 ? 0 : index + 1;
    const nextDayOpenings = inputInArray[nextDayIndex][1]
    
    const normalizedOpeningHours = normalizeOpeningsForADay(
      openingHours,
      nextDayOpenings,
    );

    return [
      ...acc,
      {
        day: `${day.charAt(0).toUpperCase()}${day.slice(1)}`,
        isToday: daysOfWeek[today.getDay()] === day,
        openingHours: normalizedOpeningHours,
      },
    ];
  }, []);
};
