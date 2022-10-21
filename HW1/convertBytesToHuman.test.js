/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman("abcd")).toBe(false)
  expect(convertBytesToHuman(-1)).toBe(false)
  expect(convertBytesToHuman(-1)).not.toBe("1 Б")
  expect(convertBytesToHuman(NaN)).toBe(false)
  expect(convertBytesToHuman(Infinity)).toBe(false)
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(1024)).toBe("1 КБ")
  expect(convertBytesToHuman(123_123_123)).toBe("117 МБ")
  expect(convertBytesToHuman(10)).toBe("10 Б")
  expect(convertBytesToHuman(123_123_123_123_4)).toBe("1147 ГБ")
  // ...
});

// другая группа проверок
