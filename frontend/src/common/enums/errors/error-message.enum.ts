/* eslint-disable @typescript-eslint/quotes */
enum ErrorMessage {
  EMAIL = 'Імейл: містить знак @ та поштовий сервер',
  PASSWORD = 'Пароль: 6-12 символів, латинські великі/малі літери, числа та символи',
  FULLNAME = "Повне ім'я: 2 слова латиницею/кирилицею, 1-15 символів на слово, перша літера слова - велика",
  AGE = 'Вік: ціле число від 18 до 100',
}

export { ErrorMessage };