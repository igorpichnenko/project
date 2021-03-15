import { Pie } from './Pie';

/**
 * Изменяем значение count для изменения графика и количества общих голосов
 * Например 20 60 60 80
 */

const config = {
  delimiter: 2,
  namesAndColors: [
    {
      name: 'Великолепно',
      gradient: {
        start: '#FFE39C',
        end: '#FFBA9C',
      },
      count: 130,
    },
    {
      name: 'Хорошо',
      gradient: {
        start: '#6FCF97',
        end: '#66D2EA',
      },
      count: 65,
    },
    {
      name: 'Удовлетворительно',
      gradient: {
        start: '#BC9CFF',
        end: '#8BA4F9',
      },
      count: 65,
    },
    {
      name: 'Плохо',
      gradient: {
        start: '#919191',
        end: '#3D4975',
      },
      count: 0,
    },
  ],
};

document.querySelectorAll('.js-pie-chart').forEach((pie) => {
  new Pie(pie, config);
});
