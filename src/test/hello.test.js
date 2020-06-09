import { helloWorld } from '../client/js/hello'

test('Check if function helloWorld exists', () => {
  expect(helloWorld).toBeDefined();
});