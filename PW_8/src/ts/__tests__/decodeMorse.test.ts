import { decodeMorse } from '../decodeMorse';

describe('tests for decodeMorse function', () => {
  test('has to return decoded string', () => {
    expect(decodeMorse('.... . -.--   .--- ..- -.. .')).toBe('HEY JUDE');
  });
  test('has to return decoded string SOS', () => {
    expect(decodeMorse('...---...')).toBe('SOS');
  });
});
