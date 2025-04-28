import { describe, expect, it } from 'vitest';
import { toolkit } from '../toolkit.ts';

describe('camelCase usage', () => {
  it('should work with basic string', () => {
    expect(toolkit.camelCase('Hello World')).toBe('helloWorld');
  });

  it('should work with multiple words', () => {
    expect(toolkit.camelCase('This Is A Test')).toBe('thisIsATest');
  });

  it('should work with special characters', () => {
    expect(toolkit.camelCase('hello-world')).toBe('helloWorld');
    expect(toolkit.camelCase('hello_world')).toBe('helloWorld');
  });
});
