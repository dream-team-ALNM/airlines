enum HttpErrorMessage {
  NO_SUCH_EMAIL = 'That address is either invalid or is not associated with a user account',
  EMAIL_ALREADY_EXISTS = 'User with such email already exists',
  INTERNAL_SERVER_ERROR = 'Internal Server Error',
  UNAUTHORIZED = 'Unauthorized',
  INVALID_LOGIN_DATA = 'Incorrect email or password',
}

export { HttpErrorMessage };
