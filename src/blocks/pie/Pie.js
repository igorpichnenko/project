class Pie {
  constructor(element, config) {
    this.element = element;
    this.config = config;
    this.init();
  }

  init() {
    this.calcParts();
    this.initPie();
  }

  calcParts() {
    let sum = 0;
    let position = 0;
    let i = 0;

    this.config.namesAndColors.forEach((el) => {
      el.id = i;
      i += 1;
      if (el.count > 0) {
        sum += el.count;
      }
    });

    this.config.namesAndColors.forEach((el) => {
      if (el.count > 1) {
        const delime = this.config.delimiter;
        const delimeHalf = delime / 2;
        const elementPercent = el.count / sum;
        el.start = position + delimeHalf;
        el.end = position + elementPercent * 360 - delimeHalf;
        position = el.end;

        position += delimeHalf;
      }
    });
    this.config.sum = sum;
  }

  createGradient(element) {
    const { start, end } = element.gradient;
    const { id } = element;
    return `
      <linearGradient id="grad${id}" x1="50%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${start};stop-opacity:1"></stop>
        <stop offset="100%" style="stop-color:${end};stop-opacity:1"></stop>
      </linearGradient>
  `;
  }

  createPatch(element) {
    const { start, end, id } = element;
    return `
  <path stroke="url(#grad${id})" fill="none" stroke-width="4" d="${this.describeArc(60, 60, 56, start, end)}"/>
  `;
  }

  initPie() {
    const svg = document.createElement('svg');
    this.config.namesAndColors.forEach((el) => {
      svg.innerHTML += this.createGradient(el);
      svg.innerHTML += this.createPatch(el);
    });
    this.element.innerHTML = `<svg class="canvas-container__svg">${svg.innerHTML}</svg>`;
    const sumElement = document.createElement('div');
    sumElement.classList.add('canvas-container__content');
    sumElement.innerHTML = `<div class="canvas-container__count">${this.config.sum}</div><div class="canvas-container__text">Голосов</div>`;
    this.element.appendChild(sumElement);
  }

  describeArc(x, y, radius, startAngle, endAngle) {
    const start = this.polarToCartesian(x, y, radius, endAngle);
    const end = this.polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
    const d = [
      'M',
      start.x,
      start.y,
      'A',
      radius,
      radius,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y,
    ].join(' ');
    return d;
  }

  polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  }
}

export { Pie };
