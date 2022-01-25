import { mappings } from './mappings';

export function decodeMorse(string: string): string {
  let result: string = '';
  const wordsArray: string[] = string.split('   ');

  for (let i = 0; i < wordsArray.length; i++) {
    const outerItem: string = wordsArray[i];
    const symbolsArray: string[] = outerItem.split(' ');
    for (let j = 0; j < symbolsArray.length; j++) {
      const innerItem: string = symbolsArray[j];
      const morseSymbolIndex = mappings.findIndex((element) => {
        if (element.symbol === innerItem) {
          return element;
        }
      });
      result += mappings[morseSymbolIndex].translation;
    }
    result += ' ';
  }
  return result.trim();
}
