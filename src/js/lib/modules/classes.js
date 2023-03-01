import $ from "../core";

$.prototype.addClass = function(...classNames) {  // спред оператор, нужен для того если мы хотим добавить несколько классов сразу
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList){
            continue;
        }
        this[i].classList.add(...classNames); // рест оператор, мы разварачиваем все имена классов которые были переданы во внутрь этой функции
    }

    return this;
};

$.prototype.removeClass = function(...classNames) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList){
            continue;
        }
        this[i].classList.remove(...classNames);
    }

    return this;
};

$.prototype.toggleClass = function(classNames){
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        } else {
            this[i].classList.toggle(classNames);
        } 
    }

    return this;
};
