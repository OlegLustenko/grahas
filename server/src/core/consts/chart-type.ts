const HORA_TYPE = 0;
const NAVAMSA_TYPE = 1;

export const CHART_TYPE = {
  HORA_TYPE,
  NAVAMSA_TYPE,
} as const;

export type ChartType = typeof CHART_TYPE;
