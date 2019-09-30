const GMT = {
  value: 0,
  cities: ['Lisabon, London'],
};
const GMT_1 = {
  value: 1,
  cities: ['Brusel', 'Копенгаген', 'Париж'],
};

const GMT_2 = {
  value: 2,
  cities: ['Киев'],
};
const GMT_3 = {
  value: 3,
  cities: ['Москва'],
};
const GMT_3_5 = {
  value: 3.5,
  cities: ['Тегеран'],
};
const GMT_4 = {
  value: 4,
  cities: ['Абу-Даби'],
};
const GMT_5 = {
  value: 5,
  cities: ['Екатеринбург'],
};
const GMT_5_5 = {
  value: 5.5,
  cities: ['Нью-Дели'],
};
const GMT_5_75 = {
  value: 5.75,
  cities: ['Катманду'],
};
const GMT_6 = {
  value: 6,
  cities: ['Алматы'],
};

export const TIMEZONES = [
  GMT,
  GMT_1,
  GMT_2,
  GMT_3,
  GMT_3_5,
  GMT_4,
  GMT_5,
  GMT_5_5,
  GMT_5_75,
  GMT_6,
];

export interface Timezone {
  value: number;
  cities: string[];
}

// 0*(GMT +0:00) Лондон;
// 1*(GMT +1:00) Париж;
// 2*(GMT +2:00) Киев;
// 3*(GMT +3:00) Москва;
// 3.5*(GMT +3:30) Тегеран;
// 4*(GMT +4:00) Абу-Даби;
// 4.5*(GMT +4:30) Кабул;
// 5*(GMT +5:00) Екатеринбург;
// 5.5*(GMT +5:30) Нью-Дели;
// 5.75*(GMT +5:45) Катманду;
// 6*(GMT +6:00) Алматы;
// 7*(GMT +7:00) Бангкок;
// 8*(GMT +8:00) Пекин;
// 9*(GMT +9:00) Токио, Якутск;
// 9.5*(GMT +9:30) Дарвин;
// 10*(GMT +10:00) Владивосток;
// 11*(GMT +11:00) Магадан;
// 12*(GMT +12:00) Камчатка;
// -12*(GMT -12:00) Эниветок;
// -11*(GMT -11:00) Самоа;
// -10*(GMT -10:00) Гавайи;
// -9*(GMT -9:00) Аляска;
// -8*(GMT -8:00) Тихоокеанское время США;
// -7*(GMT -7:00) Горное время США;
// -6*(GMT -6:00) Центральное время США;
// -5*(GMT -5:00) Восточное время США;
// -4*(GMT -4:00) Атлантическое время Канада;
// -3.5*(GMT -3:30) Ньюфаундленд;
// -3*(GMT -3:00) Бразилия,;
// -2*(GMT -2:00) Срединно-Атлантического;
// -1*(GMT -1:00) Азорские острова