/*
class DropdownControl{
  
  _minusButton:any
value:any
words:any
 _min:any
 _input:any
_update:any
_plusButton:any
_plusAll:any
_minusAll:any
_items:any
option:any

  constructor(el:any,update:any){
    
    this._items = el;
    this._getElement();
    this._handlersBind();
    this._checkValue();
    this._update = update;
    this.words = this._items.dataset.words;
    
  }
  
  _getElement(){
    
    this.option = this._items.querySelector('.dropdown-counters__controls')
    
     this._min = this.option.dataset.min ? parseInt(this.option.dataset.min) : 0;
    
    this._input = this._items.querySelector('.dropdown-counters__value')
    
   this.value = parseInt(this._input.innerText);
    
    this._plusAll = this._items.querySelectorAll('.dropdown-counters__plus')
    this._plusAll.forEach((plus:any) => {
      
      this._plusButton = plus
    })
    
    this._minusAll = this._items.querySelectorAll('.dropdown-counters__minus')
    this._minusAll.forEach((minus:any) => {
      
      this._minusButton = minus
    })
  }
  
  _handlersBind(){
    
    this._handlerPlus = this._handlerPlus.bind(this);

    this._plusButton.addEventListener('click', this._handlerPlus);
    
    this._handlerMinus = this._handlerMinus.bind(this);
    this._minusButton.addEventListener('click', this._handlerMinus);
  }
  _formDeclension(num:number, form:any ) {
  num = Math.abs(num) % 100; var n1 = num % 10;
  if (num > 10 && num < 20) { return form[2]; }
  if (n1 > 1 && n1 < 5) { return form[1]; }
  if (n1 == 1) { return form[0]; }
  return form[2];
}

_handlerPlus(){
  this._upValue(this.value + 1);
}
 
 _handlerMinus(){
   this._upValue(this.value - 1)
 }
  _upValue (val:number) {
    const value = val > this._min ? val : this._min;
    this.value = value;
    this._updateValue()
    this._checkValue();
    this._update(this.value)
  };
  
  _updateValue(){
   this._input.innerHTML = this.value
     }
  _checkValue (){
    
    if ( this.value === this._min){
      this._deactivateMinus();
    }
    else {
      this._activateMinus();
    }
  }
  isMin() {
    return this.value === this._min;
  }
  isZerro (){
    return this.value === 0
  }
  getString = () => {
    if (this.words !== undefined) {
      const words = this.words.split(",");
      return this.value > 0
        ? `${this.value} ${this._formDeclension(this.value, words)}`
        : null;
    } else {
      return this.getValue();
    }
  };
  getValue () {
  return this.value;
}
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
 
    _dropdown:any
    _toggle:any
    _menu:any
   _title:any
    words:any
    _values:any
  _defaultTitle:any
   _buttonUse:any
  _buttonClear:any
  _controls:any
  _sum:any
sum:any

   constructor(dropdown:any){
       this._dropdown = dropdown

   this._controls = Array.from(this._values).map(
    (item) => new DropdownControl(item, () => this._update())  );
  
      this.sum = this._getSum();
      
     this._update()
     }
    _findElement(){
    
   this._menu = this._dropdown.querySelector('.dropdown__menu');
   
   this._toggle = this._dropdown.querySelector('.dropdown__section');
   
   this._title = this._dropdown.querySelector('.dropdown__title');
   
   this.words = this._dropdown.dataset.words;
   
   this._defaultTitle = this._dropdown.dataset.default || "";
   
   this._values = this._dropdown.querySelectorAll('.dropdown-counters')
   
   this._buttonClear = this._dropdown.querySelector('.dropdown__button_clear')
   this._buttonUse = this._dropdown.querySelector('.dropdown__button_use')

    }
     _getSum () {
    let sum = 0;

    this._controls.forEach((item:any) => {

      sum += item.getValue();
    });
    this._sum = sum;
    return sum;
  };
    
     _handlersBind() {
      
    this._handlerMenu = this._handlerMenu.bind(this);
   
    this._toggle.addEventListener('click', this._handlerMenu);
    
    this._handlerDocument = this._handlerDocument.bind(this);
    document.addEventListener('click', this._handlerDocument);
    
    if (this._buttonUse) this._handlerUse = this._handlerUse.bind(this);
    this._buttonUse.addEventListener('click', this._handlerUse);
    
     if (this._buttonClear) this._handlerClear = this._handlerClear.bind(this);
     this._buttonClear.addEventListener('click', this._handlerClear);
  }
     _handlerMenu(){
       
    this._toggle.classList.toggle('dropdown__toggle_active')   
    this._menu.classList.toggle('dropdown_active')
     }
   
     _handlerDocument(event:any){
      if (event.target.closest('.dropdown') !== this._dropdown){
        this._closeDropdown();
       }
     }
     
    _closeDropdown(){
      const isDropdownClosed = this._toggle.classList.contains('dropdown__toggle_active') && this._menu.classList.contains('dropdown_active');
 
      if (isDropdownClosed) {
    this._toggle.classList.remove('dropdown__toggle_active')   
    this._menu.classList.remove('dropdown_active')
      }
    }
    _handlerUse(event:any){
      event.preventDefault();
      this._closeDropdown();
    }
    _handlerClear(event:any){
      event.preventDefault();
      this._controls.forEach((el:any) =>{
       el._upValue(0)
      })
    }
     _update(){
    this._checkButtonClear();
    this._checkButtonUse();
    this._updateTitle();
     }
    
    _checkButtonClear (){
       const allMin = !this._controls
      .map((item:any) => item.isMin())
      .includes(false);
      if (allMin === true){
     this._buttonClearHidden()
   }else{
     this._buttonClearVisible()
   }
  };
    _checkButtonUse () {
    const isAllZerro = !this._controls.map((item:any)=>item.isZerro()).includes(false)
    
    if (isAllZerro === true){
       
     this._buttonUseHidden()
   }else{
     this._buttonUseVisible()
   }
  }
  _buttonClearHidden(){
// this._buttonClear.classList.add('offBtn')
 
   }
   _buttonClearVisible(){
//  this._buttonClear.classList.remove('offBtn')
     
   }
   _buttonUseHidden(){
   //  this._buttonUse.classList.add('offBtn')
   }
   _buttonUseVisible(){
  //  this._buttonUse.classList.remove('offBtn')
   }
  _formDeclension(num:number, form:any) {
  num = Math.abs(num) % 100; var n1 = num % 10;
  if (num > 10 && num < 20) { return form[2]; }
  if (n1 > 1 && n1 < 5) { return form[1]; }
  if (n1 == 1) { return form[0]; }
  return form[2];
}
  _updateTitle() {
    const sum = this._getSum();
    if (this.words !== undefined) {
      const words = this.words.split(",");
      this._title.innerHTML =
        sum > 0 ? `${sum} ${this._formDeclension(sum, words)}` : this._defaultTitle;
    } else {
      let arr = this._controls.map((item:any) => item.getString());
       arr = arr.filter((el:any) => el !== null);
      this._title.innerHTML = sum > 0 ? arr.join(", ") + '...' : this._defaultTitle;
    }
  };
}



const items = document.querySelectorAll('.dropdown').forEach((item:any) => new Dropdown(item));*/

