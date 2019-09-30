import { NatalChartModel } from '../features/natal-chart/models/NatalChartModel';

const url = '/natal-chart';

export const natalChartApi = {
  requestChart(userInfo: NatalChartModel): Promise<string> {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    }).then((data) => data.text());
  },
};
