import { encodeMorse } from '../encodeMorse';

describe('tests for encodeMorse function', () => {
  test('has to return encoded string', () => {
    expect(encodeMorse('HEY JUDE')).toBe('.... . -.--   .--- ..- -.. .');
  });
  test('has to return encoded string SOS', () => {
    expect(encodeMorse('SOS')).toBe('...---...');
  });
});
