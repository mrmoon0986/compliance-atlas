import test from 'node:test';
import assert from 'node:assert';
import { evaluateRisk } from '../src/risk.js';

test('evaluateRisk returns low for score under 3', () => {
  assert.strictEqual(evaluateRisk(2), 'low');
});

test('evaluateRisk returns medium for score between 3 and 6', () => {
  assert.strictEqual(evaluateRisk(5), 'medium');
});

test('evaluateRisk returns high for score 7 or above', () => {
  assert.strictEqual(evaluateRisk(9), 'high');
});
