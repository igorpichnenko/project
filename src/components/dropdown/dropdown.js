class DropdownControl{
  // первый класс, тут проходит основная работа с элементами управления, конструкор принимает el - это обьект на основе второго класса ниже..и update метод из второго класса
  constructor(el,update){
    console.log(update)
    // все элементы
    this._items = el;
    // метод поиска элеметов и их значений
    this._getElement();
    // метод привязки this к слушателям
    this._handlersBind();
    // метод проверки значения, которая отключает, включает минус
    this._checkValue();
    // метод из класса ниже
    this._update = update;
    // дата для формы склонения [гость,гости,гостей]
    this.words = this._items.dataset.words;
    
  }
  
  // метод поиска элеметов и их значений
  _getElement(){
    
    this.option = this._items.querySelector('.dropdown-counters__controls')
    
   // минимальное значение которое заданно через html в data- атрибуте
     this._min = this.option.dataset.min ? parseInt(this.option.dataset.min) : 0;
    
    this._input = this._items.querySelector('.dropdown-counters__value')
    
    // начальное значение всех элементов
    this.value = parseInt(this._input.innerText);
    
    this._plusAll = this._items.querySelectorAll('.dropdown-counters__plus')
    this._plusAll.forEach((plus) => {
      
      this._plusButton = plus
    })
    
    this._minusAll = this._items.querySelectorAll('.dropdown-counters__minus')
    this._minusAll.forEach((minus) => {
      
      this._minusButton = minus
    })
  }
  
  // метод привязки this
  _handlersBind(){
    
    // к методу _handlerPlus привязываем this
    this._handlerPlus = this._handlerPlus.bind(this);
    // при нажатии на кнопку + выпонить метод _handlerPlus
    this._plusButton.addEventListener('click', this._handlerPlus);
    
    // тоже самое
    this._handlerMinus = this._handlerMinus.bind(this);
    this._minusButton.addEventListener('click', this._handlerMinus);
  }
  
  // форма склонения
  _formDeclension(num, form ) {
  num = Math.abs(num) % 100; var n1 = num % 10;
  if (num > 10 && num < 20) { return form[2]; }
  if (n1 > 1 && n1 < 5) { return form[1]; }
  if (n1 == 1) { return form[0]; }
  return form[2];
}
// при нажатии на плюс вызывается метод _upValue с текущим значением + 1
_handlerPlus(){
  this._upValue(this.value + 1);
}
  // тоже самое но -1
 _handlerMinus(){
   this._upValue(this.value - 1)
 }

// метод обновления текущего значения
//принимает новое текущее значение
  _upValue (val) {
    // сравниваем если новое значение больше минимального то записываем его, либо записываем минимальное значение, если не делать проверку то значение уйдет в минуса
    const value = val > this._min ? val : this._min;
    // записывем новое значение в текущее
    this.value = value;
    // вызываем методы обновления значений в дропдауне
    this._updateValue()
    this._checkValue();
    // этот метод находится в другом классе
    this._update(this.value)
  };
  
  // обновляем значение в дропдауне а не в заголовке
  _updateValue(){
   this._input.innerHTML = this.value
     }
     // сравнивает начально значение с минимальным, и отключает минус вызывая метод ниже при совпадениях, или вызывает другой метод который включает минус
  _checkValue (){
    
    if ( this.value === this._min){
      this._deactivateMinus();
    }
    else {
      this._activateMinus();
    }
  }
  
  // возвращает true или false в зависимости от совпадения текущего значения с минимальным, для отключения включения кнопок применить и очистить
  isMin() {
    return this.value === this._min;
  }
  // тоже самое только с 0
  isZerro (){
    return this.value === 0
  }
  // метод получающий склонение
  getString = () => {
    // проверяем если не равно undefined data-word в html
    if (this.words !== undefined) {
     // то делаем массив и записываем в переменную , через запятую
      const words = this.words.split(",");
      // если текущее значение больше нуля тогда возвращаем текущее значение + результат формы склонения в которую передаем текущее значение и константу words с массивом либо нечего не меняям
      return this.value > 0
        ? `${this.value} ${this._formDeclension(this.value, words)}`
        : null;
      // в другом случае вызываем метод
    } else {
      return this.getValue();
    }
  };
  // который возвращает текущее значение
  getValue () {
  return this.value;
}
// методы включения,и выключения минуса
 _activateMinus(){
  
    if (this._minusButton.classList.contains('dropdown-counters__minus_disabled')){
      this._minusButton.classList.remove('dropdown-counters__minus_disabled')
    }
  }
_deactivateMinus(){
  
  this._minusButton.classList.add('dropdown-counters__minus_disabled')
  }
}



class Dropdown{
  // основной класс
   constructor(dropdown){
     // конструктор получает дропдаун,или все дропдауны на странице
       
       this._dropdown = dropdown
       // метод поиска элементов
       this._findElement()
       // метод привязки this
       this._handlersBind()
  
 // пока сложно это это сформулировать   ??   
// создаем обьекты на основе массивов созданых из this._values и выполняем и передаем туда метод this._update
   this._controls = Array.from(this._values).map(
    (item) => new DropdownControl(item, () => this._update())  );
    
     // сумма всех значений получаемая методом getSum
      this.sum = this._getSum();
      
      // метод обновдения заголовка
      this._update()
     }

    // находим элементы и их дата атрибут
    _findElement(){
    
   this._menu = this._dropdown.querySelector('.dropdown__menu');
   
   this._toggle = this._dropdown.querySelector('.dropdown__section');
   
   this._title = this._dropdown.querySelector('.dropdown__title');
   
   // дата атрибут, для формы склонения
   this.words = this._dropdown.dataset.words;
   
   // получаем текст заголовка по умолчанию из html дата атрибута data-default
   this._defaultTitle = this._dropdown.dataset.default || "";
   
   this._values = this._dropdown.querySelectorAll('.dropdown-counters')
   
   this._buttonClear = this._dropdown.querySelector('.dropdown__button_clear') || null;
   this._buttonUse = this._dropdown.querySelector('.dropdown__button_use') || null;

    }
     // получаем сумму
     _getSum () {
    let sum = 0;
   // перебираем массив управления
    this._controls.forEach((item) => {
      // вызываем у каждого элемента метод getValue из класса выше который возвращает текущее значение и складываем его в переменную
      sum += item.getValue();
    });
    this._sum = sum;
    return sum;
  };
    
     // привязываем this
     _handlersBind() {
      
    this._handlerMenu = this._handlerMenu.bind(this);
    // при нажатии на дропдаун выполнить метод _handlerMenu
    this._toggle.addEventListener('click', this._handlerMenu);
    
  // для закрытия вне дропдауна
    this._handlerDocument = this._handlerDocument.bind(this);
    document.addEventListener('click', this._handlerDocument);
    
    if (this._buttonUse) this._handlerUse = this._handlerUse.bind(this);
    this._buttonUse.addEventListener('click', this._handlerUse);
    
     if (this._buttonClear) this._handlerClear = this._handlerClear.bind(this);
     this._buttonClear.addEventListener('click', this._handlerClear);
  }
      // окрываем закрываем меню
     _handlerMenu(){
       
    this._toggle.classList.toggle('dropdown__toggle_active')   
    this._menu.classList.toggle('dropdown_active')
     }
   
     _handlerDocument(event){
       // если место куда нажали не равно текущему дропдауну
      if (event.target.closest('.dropdown') !== this._dropdown){
        // то выполняем метод _closeDropdown
        this._closeDropdown();
       }
     }
     
    _closeDropdown(){
      // создаем константу куда записываем проверку есть ли активные классы ??
      const isDropdownClosed = this._toggle.classList.contains('dropdown__toggle_active') && this._menu.classList.contains('dropdown_active');
 
      if (isDropdownClosed) {
      // удаляем активные классы
    this._toggle.classList.remove('dropdown__toggle_active')   
    this._menu.classList.remove('dropdown_active')
      }
    }

  // закрываем дропдаун на кнопку принять
    _handlerUse(event){
      event.preventDefault();
      this._closeDropdown();
    }
    // на кнопку очистить вызываем метод у каждого элемента массива _upValue и передаем ему 0 который в верхнем классе проверяет больше ли ноль минимального значения, если нет устанавливает минимальное значение
    _handlerClear(event){
      event.preventDefault();
      this._controls.forEach((el) =>{

       el._upValue(0)
       
      })
    }
    
  // метод который вызывает другие методы для проверки кнопок и обновления заголовка
     _update(){
    this._checkButtonClear();
    this._checkButtonUse();
    this._updateTitle();
     }
    
    _checkButtonClear (){
  // создаем переменную в которой у массива _controls вызываем map для каждого элемента и проверяем есть ли в нем  false ??
       const allMin = !this._controls
      .map((item) => item.isMin())
      .includes(false);
      // если есть то это значит что все текущие значение стали равны минимальному значению, тогда вызываем метод который прячет кнопку очистить, в обратном случае метод который показывает кнопку
      if (allMin === true){
       
     this._buttonClearHidden()
   }else{
     this._buttonClearVisible()
   }
  };
  
  // почти тоже самое что и выше но прячем кнопку применить только тогда когда все значения стали равны 0
    _checkButtonUse () {
    const isAllZerro = !this._controls.map((item)=>item.isZerro()).includes(false)
    
    if (isAllZerro === true){
       
     this._buttonUseHidden()
   }else{
     this._buttonUseVisible()
   }
  }
    // методы для кнопок принять и очистить которыми прячем и показываем кнопки 
  _buttonClearHidden(){
 this._buttonClear.classList.add('dropdown__button_hidden')
 
   }
   _buttonClearVisible(){
  this._buttonClear.classList.remove('dropdown__button_hidden')
     
   }
   _buttonUseHidden(){
     this._buttonUse.classList.add('dropdown__button_hidden')
   }
   _buttonUseVisible(){
    this._buttonUse.classList.remove('dropdown__button_hidden')
   }
   
     // форма склонения
  _formDeclension(num, form ) {
  num = Math.abs(num) % 100; var n1 = num % 10;
  if (num > 10 && num < 20) { return form[2]; }
  if (n1 > 1 && n1 < 5) { return form[1]; }
  if (n1 == 1) { return form[0]; }
  return form[2];
}
  // обновляем заголовок
  _updateTitle = () => {
    // получаем сумму методом getSum
    const sum = this._getSum();
    // если дата атрибут не равен undefined
    if (this.words !== undefined) {
    // то создаем массив из значений data-words через запятую, и записываем в words
      const words = this.words.split(",");
      // если сумма равна больше 0 то записываем в заголовок сумму + результат вызова функции склонения в которую первым аргументом мередем сумму а вторым константу с массивом из data-word html, в другом случае запысываем заголовок по умолчанию
      this._title.innerHTML =
        sum > 0 ? `${sum} ${this._formDeclension(sum, words)}` : this._defaultTitle;
    } else {
      // либо создаем масив из controls и вызываем для каждого метод getString и записываем получившийся результат в переменную
      let arr = this._controls.map((item) => item.getString());
      // фильтруем массив на то что элементы не равны null ??
       arr = arr.filter((el) => el !== null);
       // если сумма больше нуля то в заголовок записываем результат массива через запятую и + троеточие в конце..в другом случае записываем значение по умолчанию 
      this._title.innerHTML = sum > 0 ? arr.join(", ") + '...' : this._defaultTitle;
    }
  };
}

const items = document.querySelectorAll('.dropdown').forEach((item) => new Dropdown(item));