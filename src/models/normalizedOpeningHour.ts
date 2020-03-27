import {NormalizedTime} from './normalizedTime';

export interface NormalizedOpeningHourTime {
  from: NormalizedTime;
  to: NormalizedTime;
}

export interface NormalizedOpeningHour {
  day: string;
  isToday: boolean;
  openingHours: NormalizedOpeningHourTime[];
}
