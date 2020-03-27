import { timeNormalizer } from './timeNormalizer'
import { NormalizedTime } from '../models/normalizedTime'

describe('Utils', () => {
  describe('timeNormalizer', () => {
    test('Should return normalized version of given time', () => {
      const output = timeNormalizer(37800)
      const expected: NormalizedTime = {
        hour: 10,
        minute: 30,
        label: 'AM'
      }

      expect(output).toStrictEqual(expected)
    })
  })
})