export const lsWrite = (key: string, value: string) => {
  if (typeof window === 'undefined') {
    return;
  }
  localStorage.setItem(key, value);
};

export const lsRead = (key: string) => {
  if (typeof window === 'undefined') {
    return;
  }
  return localStorage.getItem(key);
};

export const ssWrite = (key: string, value: string) => {
  if (typeof window === 'undefined') {
    return;
  }
  sessionStorage.setItem(key, value);
};

export const ssRead = (key: string) => {
  if (typeof window === 'undefined') {
    return;
  }
  return sessionStorage.getItem(key);
};
