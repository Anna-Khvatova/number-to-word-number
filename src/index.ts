const UNITS_WORDS_MALE = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
const UNITS_WORDS_FEMALE = ['', 'одна', 'две', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
const TENS_WORDS = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
const HUNDREDS_WORDS = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];

const NUMBER_REGEX = /^(\d{3})(\d{3})(\d{3})$/;

export function numberToWordNumber(num: Number): String {
  const numStr = num.toString();
  const [, millions, thousands, units] = ('000000000' + numStr).slice(-9).match(NUMBER_REGEX);
  
  let result = '';
  result += millions != '000' ? getWordNumber(millions, 'M') + pluralize(Number(millions),  ' миллион ', ' миллиона ', ' миллионов ') : '';
  result += thousands != '000' ? getWordNumber(thousands, 'F') + pluralize(Number(thousands),  ' тысяча ', ' тысячи ', ' тысяч ') : '';
  result += units != '000' ? getWordNumber(units, 'M') + '' : '';
  return result.trim();
}

function getWordNumber(numStr: String, gender: String) {
  const unitsIndex = Number(Number(numStr.slice(1)) < 20 ? numStr.slice(1) : numStr[2]);
  const unitsWord = gender === 'M' ? UNITS_WORDS_MALE[unitsIndex] : UNITS_WORDS_FEMALE[unitsIndex];
  return (HUNDREDS_WORDS[Number(numStr[0])] + ' ' + TENS_WORDS[Number(numStr[1])] + ' ' + unitsWord).trim();
}

function pluralize(num: number, one: String, other: String, many: String): String {
  if (num % 10 === 1 && !num.toString().endsWith('11')) return one;
  if ([2, 3, 4].includes(num % 10) && ![12, 13, 14].includes(num)) return other;
  return many;
}
