export interface NatalChartModel {
  gmt: string | undefined;
  date: string | undefined;
  time: string | undefined;
  coordinates:
    | {
        latitude: string;
        longitude: string;
      }
    | undefined;
  city: string | undefined;
}

export class NatalChartModel {
  constructor(properties?: Partial<NatalChartModel>) {
    Object.assign(this, {
      gmt: undefined,
      date: undefined,
      time: undefined,
      coordinates: undefined,
      city: undefined,
    });
  }
}
