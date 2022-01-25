import { mappings } from './mappings';

export function encodeMorse(string: string): string {
  let result: string = '';
  const wordsArray: string[] = string.split(' ');

  for (let i = 0; i < wordsArray.length; i++) {
    const outerItem = wordsArray[i];
    const symbolsArray: string[] = outerItem.split('');
    for (let j = 0; j < symbolsArray.length; j++) {
      const innerItem: string = symbolsArray[j];
      const morseSymbolIndex = mappings.findIndex((element) => {
        if (element.translation === innerItem) {
          return element;
        }
      });
      result += mappings[morseSymbolIndex].symbol + ' ';
    }
    result += '  ';
  }
  result = result.replace(/... --- .../g, '...---...');
  return result.trim();
}

console.log(encodeMorse('HEY JUDE')); // should return ".... . -.-- .--- ..- -.. ."
