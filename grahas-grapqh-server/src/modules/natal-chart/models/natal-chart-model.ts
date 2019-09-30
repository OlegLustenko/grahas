import { ChartType } from 'src/core/consts/chart-type';
import { UserSex } from 'src/core/consts/user-sex';

export interface NatalChartModel {
  oper: string;
  user: string;
  datetime: string;
  vdasha_start: string;
  length: string;
  deep: string; // TODO: ENUM, please get api-doc and add task to taskboard
  transit_date: string;
  la: string;
  lo: string;
  dst: boolean;
  asl: number;
  tz: number;
  itz: boolean;
  sex: UserSex; // TODO: ENUM, please get api-doc and add task to taskboard
  lang: 'RU' | 'en'; // TODO: ENUM, please get api-doc and add task to taskboard
  width: number;
  height: number;
  chart1: ChartType;
  chart2: ChartType;
  properties: {
    Chart_Style: number; // TODO: ENUM, please get api-doc and add task to taskboard
    GrahasColorSet: number; // TODO: ENUM, please get api-doc and add task to taskboard
    Show_Arudha_Pada: number; // TODO: ENUM, please get api-doc and add task to taskboard
    Show_Upa_Grahas_Dhoma: number; // TODO: ENUM, please get api-doc and add task to taskboard
    ChartBackGroundColor: number;
  };
  Fonts: {
    Graha_Color: number;
    Center_Karta_Color: number; // TODO: ENUM, please get api-doc and add task to taskboard
  };
  Write: {
    myaction: string; // ENUM;
    myindex: number; // ENUM OR ???
    Chart_Style: string; // ENUM ?
    Decor: string;
    Show_Arudha_Pada: number;
    Show_Upa_Grahas_Dhoma: number;
    cart1: ChartType; // TODO: DUP
    cart2: ChartType; // TODO: DUP
  };
  userId: string;
  operation: string; // TODO: ENUM DUP
}

const defaultNatalChartModel = {
  oper: 'print',
  datetime: '15.07.1989 08:10',
  vdasha_start: '28.06.2019',
  length: '27',
  deep: '3',
  transit_date: '17.09.2019',
  la: 49.992167,
  lo: 36.231202,
  dst: true,
  asl: 30,
  tz: 3,
  itz: false,
  sex: 1,
  lang: 'EN',
  width: 500,
  height: 500,
  chart1: '1',
  chart2: '0',
  properties: {
    Options: {
      Chart_Style: 1,
      GrahasColorSet: 0,
      Show_Arudha_Pada: 0,
      Show_Upa_Grahas_Dhoma: 0,
      ChartBackGroundColor: 12632256,
    },
    Fonts: { Graha_Color: 8421504, Center_Karta_Color: 0 },
  },
  Write: {
    myaction: 'write',
    myindex: 1,
    Chart_Style: '1',
    Decor: '0',
    Show_Arudha_Pada: 0,
    Show_Upa_Grahas_Dhoma: 0,
    cart1: '1',
    cart2: '9',
  },
};

export class NatalChartModel {
  static defaultProperties() {
    return defaultNatalChartModel;
  }
  constructor(properties?: Partial<NatalChartModel>) {
    Object.assign(this, NatalChartModel.defaultProperties(), properties);
  }
}
