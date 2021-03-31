import { getInitials, keepNumbers, trimLineBreaks, BLANK_SPACE, EMPTY_STRING } from './stringUtils';

describe('getInitials', () => {
  test('When string.length >= 1', () => {
    expect(getInitials('super Mario world')).toMatch(/s M w/);
    expect(getInitials('Mortal Kombat')).toMatch(/M K/);
    expect(getInitials('Street fighter 2')).toMatch(/S f 2/);
  });

  test('With empty string', () => {
    expect(getInitials(EMPTY_STRING)).toBe(EMPTY_STRING);
  });

  test('When first char is space', () => {
    expect(getInitials(' Splinter Cell conviction')).toMatch(/ S C c/);
  });

  test('With multiple spaces', () => {
    expect(getInitials('  Hitman    Blood      Money ')).toMatch(/ {2}H {4}B {6}M /);
  });

  test('When no args are passed', () => {
    expect(getInitials()).toBeUndefined();
  });
});

describe('keepNumbers', () => {
  test('With strings that do not contain numbers', () => {
    expect(keepNumbers('abc')).toBe(EMPTY_STRING);
    expect(keepNumbers('xyz')).toBe(EMPTY_STRING);
  });

  test('With strings that DO contain numbers', () => {
    expect(keepNumbers('abc1234')).toMatch(/1234/);
    expect(keepNumbers('56 xyz 78')).toMatch(/5678/);
  });

  test('With empty strings and spaces', () => {
    expect(keepNumbers(EMPTY_STRING)).toBe(EMPTY_STRING);
    expect(keepNumbers(BLANK_SPACE)).toBe(EMPTY_STRING);
  });

  test('With integers', () => {
    expect(keepNumbers(123)).toMatch(/123/);
    expect(keepNumbers(456)).toMatch(/456/);
  });

  test('With floating point numbers', () => {
    expect(keepNumbers(1.23)).toMatch(/123/);
    expect(keepNumbers(4.5)).toMatch(/45/);
  });
});

describe('trimLineBreaks', () => {
  test('With strings that do not contain \\n', () => {
    expect(trimLineBreaks('Chun Li')).toMatch(/Chun Li/);
  });

  test('With strings that DO contain \\n', () => {
    expect(trimLineBreaks('Chun \nLi')).toMatch(/Chun Li/);
  });

  test('With empty strings and spaces', () => {
    expect(trimLineBreaks(EMPTY_STRING)).toBe(EMPTY_STRING);
    expect(trimLineBreaks(BLANK_SPACE)).toBe(BLANK_SPACE);
  });

  test('With just \\n', () => {
    expect(trimLineBreaks('\n')).toBe(EMPTY_STRING);
  });
});
