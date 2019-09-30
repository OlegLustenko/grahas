export interface User {
  gmt: string;
  date: string;
  time: string;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  city: string;
}

export class User {
  constructor(properties?: Partial<User>) {
    Object.assign(
      this,
      {
        gmt: '',
        date: '',
        time: '',
        coordinates: {
          latitude: '',
          longitude: '',
        },
        city: '',
      },
      properties,
    );
  }
}
