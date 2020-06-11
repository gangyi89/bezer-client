/**
 * @author: Pham Quan Khiet Luan
 * @email: pqkluan@gmail.com
 */

import Logger from './index';

// Inject mock console object into global
global.console = {
  warn: jest.fn(),
  log: jest.fn(),
};
global.__DEV__ = false;

let logger;

test('Test Logger info method in PRODUCTION', () => {
  Logger.info('Hello');
  expect(global.console.log).not.toHaveBeenCalled();
});

test('Test Logger error method in PRODUCTION', () => {
  Logger.error('Error: test error');
  expect(global.console.warn).not.toHaveBeenCalled();
});

test('Test create logger instance in PRODUCTION', () => {
  logger = Logger.create('test');
  expect(logger).toHaveProperty('info');
  expect(logger).toHaveProperty('error');
});

test('Test logger instance info method in PRODUCTION', () => {
  logger.info('Hello');
  expect(global.console.log).not.toHaveBeenCalled();
});

test('Test logger instance error method in PRODUCTION', () => {
  logger.error('Error');
  expect(global.console.warn).not.toHaveBeenCalledWith();
});
