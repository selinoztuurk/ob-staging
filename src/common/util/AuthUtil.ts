const AUTH_TOKEN_KEY = 'ob.authToken';
const TIMESTAMP_KEY = 'ob.timestamp';

export const getLocallySavedAuthToken = (): string | null => {
  const prevTimestamp = localStorage.getItem(TIMESTAMP_KEY);
  if (prevTimestamp) {
    const prevTimestampAsNumber = parseInt(prevTimestamp);
    if ((Date.now() - prevTimestampAsNumber) / 3600000 >= 0.5) {
      localStorage.removeItem(AUTH_TOKEN_KEY);
      localStorage.removeItem(TIMESTAMP_KEY);
      return null;
    }
  }

  return localStorage.getItem(AUTH_TOKEN_KEY);
};

export const setLocallySavedAuthToken = (token: string): void => {
  localStorage.setItem(AUTH_TOKEN_KEY, token);
  localStorage.setItem(TIMESTAMP_KEY, Date.now().toString());
};
