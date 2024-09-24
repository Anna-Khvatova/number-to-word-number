# number-to-word-number

Простой модуль преобразования числа в слова.

### Примеры работы

```
1          ->  один
1000       ->  одна тысяча
123456789  ->  сто двадцать три миллиона четыреста пятьдесят шесть тысяч семьсот восемьдесят девять
```

### Ограничения
 Только положительные числа до миллиарда

 # Демонстрация
(https://codepen.io/Anna-Khvatova/pen/bGXGZrN)

 # Установка 

 С помощью npm:

```bash
npm install number-to-word-number
```

Или используя yarn:

```bash
yarn add number-to-word-number
```

# Использование

```js
import { numberToWordNumber } from 'number-to-word-number';
...
const wordNumber = numberToWordNumber.convert(123456); // сто двадцать три тысячи четыреста пятьдесят шесть
```

# API

- convert(num)
---

### Метод `convert`

`convert(num)` - Конвертировать число в текстовое представление

#### **Аргументы метода**

`num (Number)`: Число, которое нужно конвертировать

#### **Возвращаемое значение**

`string`: Текстовое представление числа
