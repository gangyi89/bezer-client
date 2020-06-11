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

let logger;

test('Test Logger info method in DEV', () => {
  Logger.info('Hello');
  expect(global.console.log).toHaveBeenCalledWith('INFO LOG', 'Hello');
});

test('Test Logger error method in DEV', () => {
  Logger.error('Error: test error');
  expect(global.console.warn).toHaveBeenCalledWith('ERROR LOG', 'Error: test error');
});

test('Test create logger instance in DEV', () => {
  logger = Logger.create('test');
  expect(logger).toHaveProperty('info');
  expect(logger).toHaveProperty('error');
});

test('Test logger instance info method in DEV', () => {
  logger.info('Hello');
  expect(global.console.log).toHaveBeenCalledWith('INFO LOG', 'test:', 'Hello');
});

test('Test logger instance error method in DEV', () => {
  logger.error('Error');
  expect(global.console.warn).toHaveBeenCalledWith('ERROR LOG', 'test:', 'Error');
});
