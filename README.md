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
 Здесь будет ссылка на codepen

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
const numberToWordNumber = require('number-to-word-number');
const wordNumber = numberToWordNumber(123456); // сто двадцать три тысячи четыреста пятьдесят шесть
```

# API

- numberToWordNumber(num)
---

### Метод `numberToWordNumber`

`numberToWordNumber(num)` - Конвертировать число в текстовое представление

#### **Аргументы метода**

`num (Number)`: Число, которое нужно конвертировать

#### **Возвращаемое значение**

`string`: Текстовое представление числа
