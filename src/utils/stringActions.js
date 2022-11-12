// Функция позволяет удалить все лишние пробелы.
// Лишними пробелами считаются: Пробелы в начале и конце (Да есть функция trim(), но учтено и это)
// Так же если в строке между словами больше 1 проблаЮ они считаются лишними.
export function removeExtraSpaces(message) {
  const length = message.length;
  if (length === 0) return message;

  let result = '';
  for (let i = 0; i < length; i++) {
    const char = message[i];
    if (char !== ' ') {
      result += char;
    } else if (result.length !== 0 && i !== (length - 1) && message[i + 1] != ' ') {
      result += char;
    }
  }

  return result;
}

// Функция позволяющая удалить лишние символы из текста.
// Пропускается Кириллица, Латинница, пробелы, запятые и точки.
export function removeExtraChars(message) {
  const length = message.length;
  if (length === 0) return message;

  const allowedChars = /[A-ZА-Я0-9 .,]/;
  const regex = new RegExp(allowedChars, 'i');

  let result = '';
  for (let i = 0; i < length; i++) {
    const char = message[i];
    if (char.match(regex)) {
      result += char;
    }
  }

  return result;
}