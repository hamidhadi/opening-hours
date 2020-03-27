import {NormalizedTime} from '../models/normalizedTime';

export const timeNormalizer = (rawTime: number): NormalizedTime => {
  const _rawTime = Number(rawTime);

  const date = new Date()
  date.setHours(0, 0, 0, 0)
  date.setSeconds(_rawTime)

  const hour = date.getHours() % 12
  const minute = date.getMinutes()
  const label = date.getHours() >= 12? 'PM' : 'AM'

  let output = {
    minute,
    label, 
    hour: hour ? hour : 12,
  };

  return output;
};
