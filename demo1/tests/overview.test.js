import test from 'node:test';
import assert from 'node:assert/strict';

import {
  buildSmoothChartPath,
  createOverviewState,
  getOverviewChart,
  overviewChartTabs,
  overviewMetricIds,
  selectOverviewMetric,
} from '../overview.js';
import * as overviewModule from '../overview.js';

test('overview exposes the five reference metrics and four chart views', () => {
  assert.deepEqual(overviewMetricIds, ['clicks', 'conversions', 'gross-sales', 'commission', 'pending-payout']);
  assert.deepEqual(overviewChartTabs, ['clicks', 'conversions', 'gross-sales', 'commission']);
});

test('overview metric selection is immutable and changes the chart series', () => {
  const source = createOverviewState();
  const next = selectOverviewMetric(source, 'commission');
  const chart = getOverviewChart(next, '30d');

  assert.equal(source.selectedMetric, 'clicks');
  assert.equal(next.selectedMetric, 'commission');
  assert.notEqual(next, source);
  assert.equal(chart.metricId, 'commission');
  assert.equal(chart.points.length, 8);
  assert.equal(chart.points[0].label, 'Apr 13');
});

test('overview ignores unsupported chart metrics', () => {
  const source = createOverviewState();
  const result = selectOverviewMetric(source, 'orders');

  assert.equal(result, source);
});

test('overview chart path uses smooth cubic segments between data points', () => {
  const path = buildSmoothChartPath([
    { x: 0, y: 10 },
    { x: 10, y: 0 },
    { x: 20, y: 10 },
  ]);

  assert.equal(path, 'M0.0,10.0 C1.7,8.3 6.7,0.0 10.0,0.0 C13.3,0.0 18.3,8.3 20.0,10.0');
  assert.doesNotMatch(path, /\sL/);
});

test('overview interaction state starts without an active chart point', () => {
  assert.equal(createOverviewState().activeChartPoint, null);
});

test('overview chart point selection returns an accessible metric summary', () => {
  assert.equal(typeof overviewModule.selectOverviewPoint, 'function');
  assert.equal(typeof overviewModule.getOverviewPointSummary, 'function');

  const source = createOverviewState();
  const next = overviewModule.selectOverviewPoint(source, 3);
  const summary = overviewModule.getOverviewPointSummary(next, '7d');

  assert.equal(source.activeChartPoint, null);
  assert.equal(next.activeChartPoint, 3);
  assert.notEqual(next, source);
  assert.deepEqual(summary, {
    metricId: 'clicks',
    metricLabel: 'Clicks',
    label: 'May 08',
    display: '36.7K',
    value: 36700,
  });
});

test('overview chart point selection rejects invalid indexes and clears safely', () => {
  const source = createOverviewState();
  const selected = overviewModule.selectOverviewPoint(source, 1);

  assert.strictEqual(overviewModule.selectOverviewPoint(source, -1), source);
  assert.strictEqual(overviewModule.selectOverviewPoint(source, '1'), source);
  assert.equal(overviewModule.selectOverviewPoint(selected, null).activeChartPoint, null);
});
