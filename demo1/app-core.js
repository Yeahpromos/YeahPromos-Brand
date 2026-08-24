export function createDashboardState(data) {
  const clonedData = structuredClone(data);
  const initialPeriod = clonedData.periods[0];

  return {
    ...clonedData,
    selectedPeriod: initialPeriod?.id ?? null,
    selectedStartDate: initialPeriod?.startDate ?? '',
    selectedEndDate: initialPeriod?.endDate ?? '',
    ...(initialPeriod?.snapshot ?? {}),
    expandedGroups: [],
    activePartnerId: null,
    activeNavigationId: 'overview',
    activeNavigationChild: null,
    demoState: 'normal',
  };
}

export function selectPeriod(state, periodId) {
  const period = state.periods.find((item) => item.id === periodId);

  if (!period) {
    return state;
  }

  return {
    ...state,
    selectedPeriod: periodId,
    selectedStartDate: period.startDate ?? state.selectedStartDate ?? '',
    selectedEndDate: period.endDate ?? state.selectedEndDate ?? '',
    ...(period.snapshot ?? {}),
  };
}

const parseDateInput = (value) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const [year, month, day] = value.split('-').map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  if (
    date.getUTCFullYear() !== year
    || date.getUTCMonth() !== month - 1
    || date.getUTCDate() !== day
  ) return null;
  return date;
};

const dateRangeDays = (startDate, endDate) => Math.round((endDate - startDate) / 86400000) + 1;

export function selectDateRange(state, startDate, endDate) {
  const start = parseDateInput(startDate);
  const end = parseDateInput(endDate);
  if (!start || !end || start > end) return state;

  const requestedDays = dateRangeDays(start, end);
  const nearestPeriod = state.periods
    .map((period) => {
      const periodStart = parseDateInput(period.startDate ?? '');
      const periodEnd = parseDateInput(period.endDate ?? '');
      return periodStart && periodEnd
        ? { period, distance: Math.abs(dateRangeDays(periodStart, periodEnd) - requestedDays) }
        : null;
    })
    .filter(Boolean)
    .sort((left, right) => left.distance - right.distance)[0]?.period;
  const nextState = nearestPeriod ? selectPeriod(state, nearestPeriod.id) : state;

  return {
    ...nextState,
    selectedStartDate: startDate,
    selectedEndDate: endDate,
  };
}

export function selectDemoState(state, demoState) {
  const supportedStates = ['normal', 'empty', 'error', 'permission', 'syncing'];

  if (!supportedStates.includes(demoState)) {
    return state;
  }

  return {
    ...state,
    demoState,
  };
}

export function toggleNavigationGroup(state, groupId) {
  const isExpanded = state.expandedGroups.includes(groupId);

  return {
    ...state,
    expandedGroups: isExpanded
      ? state.expandedGroups.filter((id) => id !== groupId)
      : [...state.expandedGroups, groupId],
  };
}

export function isNavigationItemActive(state, itemId) {
  return state.activeNavigationId === itemId;
}
