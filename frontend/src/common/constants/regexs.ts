export const validFullName =
  /^([А-Я][а-яёії]{1,15}|[A-Z][a-z]{1,15}) ([А-Я][а-яёії]{1,15}|[A-Z][a-z]{1,15})$/gm;

export const validPassword =
  /^[~`!@#$%^&*()_+=[\]\\{}|;':",./<>?a-zA-Z0-9-]{6,12}$/gm;

export const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/gm;

export const validAge = /^([1][8-9]|[2-9][0-9]|100)$/gm;
