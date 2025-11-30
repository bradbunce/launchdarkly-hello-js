import { describe, it, expect } from 'vitest';

describe('GUID Generation', () => {
  it('should generate a valid UUID v4 format', () => {
    function generateGUID() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }

    const guid = generateGUID();
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    
    expect(guid).toMatch(uuidRegex);
  });

  it('should generate unique GUIDs', () => {
    function generateGUID() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }

    const guid1 = generateGUID();
    const guid2 = generateGUID();
    
    expect(guid1).not.toBe(guid2);
  });
});

describe('Weather Icon Mapping', () => {
  it('should map weather conditions to correct icons', () => {
    const conditionMap = {
      'Sunny': 'wi-day-sunny',
      'Clear': 'wi-night-clear',
      'Partly cloudy': 'wi-day-cloudy',
      'Cloudy': 'wi-cloudy',
      'Overcast': 'wi-cloudy',
      'Mist': 'wi-fog',
      'Fog': 'wi-fog',
      'Rain': 'wi-rain',
      'Light rain': 'wi-sprinkle',
      'Heavy rain': 'wi-rain-wind',
      'Snow': 'wi-snow',
      'Thunderstorm': 'wi-thunderstorm'
    };

    expect(conditionMap['Sunny']).toBe('wi-day-sunny');
    expect(conditionMap['Rain']).toBe('wi-rain');
    expect(conditionMap['Snow']).toBe('wi-snow');
  });

  it('should have a default icon for unknown conditions', () => {
    const conditionMap = {
      'Sunny': 'wi-day-sunny',
    };
    
    const icon = conditionMap['Unknown'] || 'wi-day-cloudy';
    expect(icon).toBe('wi-day-cloudy');
  });
});

describe('Temperature Conversion', () => {
  it('should convert Celsius to Fahrenheit correctly', () => {
    const celsius = 18;
    const fahrenheit = Math.round(celsius * 9/5 + 32);
    
    expect(fahrenheit).toBe(64);
  });

  it('should handle freezing point', () => {
    const celsius = 0;
    const fahrenheit = Math.round(celsius * 9/5 + 32);
    
    expect(fahrenheit).toBe(32);
  });

  it('should handle boiling point', () => {
    const celsius = 100;
    const fahrenheit = Math.round(celsius * 9/5 + 32);
    
    expect(fahrenheit).toBe(212);
  });
});
