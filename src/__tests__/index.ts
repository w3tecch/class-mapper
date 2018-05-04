import { ClassMapper } from '..';

test('hello world', () => {
  const greeting = new ClassMapper();
  expect(greeting.greet()).toBe('hello world');
});
