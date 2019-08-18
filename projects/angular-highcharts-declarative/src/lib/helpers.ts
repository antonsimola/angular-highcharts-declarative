import { SimpleChanges } from '@angular/core';

export const changesToFlat = (changes: SimpleChanges) => {
  return Object.entries(changes).reduce((acc, [key, value]) => {
    if (key === 'extra') {
      return { ...acc, ...value.currentValue };
    }
    acc[key] = value.currentValue;
    return acc;
  }, {});
};

export const capitalize = s => {
  if (typeof s !== 'string') {
    return '';
  }
  return s.charAt(0).toUpperCase() + s.slice(1);
};
