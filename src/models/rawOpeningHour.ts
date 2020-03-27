export interface RawOpeningHourTime {
  type: string;
  value: number;
}

export interface RawOpeningHour {
  [key: string]: RawOpeningHourTime[];
}
