import { NgZone, SimpleChanges } from '@angular/core';
import { HC_EVENTS } from './highchart-enums';

export const changesToFlat = (changes: SimpleChanges) => {
  return Object.entries(changes).reduce((acc, [key, value]) => {
    if (key === 'extra') {
      return { ...acc, ...value.currentValue };
    }
    acc[key] = value.currentValue;
    return acc;
  }, {});
};

export const registerEvents = (target: any, zone: NgZone, eventCategory: string) => {
  const eventsToListen = {};
  HC_EVENTS[eventCategory].forEach(eventType => {
    let emitter = eventType;
    let event = eventType;
    if (isObject(eventType)) {
      emitter = eventType.emitter;
      event = eventType.event;
    }
    if (target[emitter].observers.length > 0) {
      // only register to event that the user is interested in
      console.log(eventCategory, event, target[emitter].observers.length);
      eventsToListen[event] = (...args) => zone.run(() => target[emitter].emit(args.length > 1 ? args[1] : args[0]));
    }
  });
  return eventsToListen;
};

export const isObject = obj => {
  return obj === Object(obj);
};
