export const validFullName =
  /^([А-Я][а-яёії]{1,15}|[A-Z][a-z]{1,15}) ([А-Я][а-яёії]{1,15}|[A-Z][a-z]{1,15})$/gm;

export const validPassword =
  /^[~`!@#$%^&*()_+=[\]\\{}|;':",./<>?a-zA-Z0-9-]{6,12}$/gm;

export const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/gm;
