// TODO: Add localization

export default class ValidationUtil {
  static required = (value: any) =>
    value ? undefined : 'Bu alanın doldurulması zorunludur.';

  static mustBeNumber = (value: any) =>
    isNaN(value) ? 'Numara girmelisin.' : undefined;

  static minValue = (min: any) => (value: any) =>
    isNaN(value) || value >= min
      ? undefined
      : `${min} sayısından daha büyük olmalı.`;

  static validatePassword = (value: any) => {
    // Minimum eight characters, at least one letter and one number
    const PASSWORD_PATTERN =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/;

    return PASSWORD_PATTERN.test(value)
      ? undefined
      : 'Parola yeterince güvenli değil!';
  };

  static validateEmail = (value: any) => {
    const EMAIL_PATTERN =
      /^(([^<>()\[\]\\.,;:?\/=\s@"]+(\.[^<>()\[\]\\.,;:?\/=\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return EMAIL_PATTERN.test(value)
      ? undefined
      : 'Geçerli bir e-mail adresi değil!';
  };

  static validateYear = (value: any) => {
    const YEAR_PATTERN = /^(19|20)\d{2}$/;
    return YEAR_PATTERN.test(value) ? undefined : 'Geçerli bir yıl değil!';
  };

  static composeValidators =
    (...validators: any[]) =>
    (value: any) =>
      validators.reduce(
        (error, validator) => error || validator(value),
        undefined
      );
}
