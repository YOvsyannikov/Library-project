import $ from '../core';
// метод, который позволяет быстро менять  html структуру внутри какого-то елемента. 
//Так же может получать содержимое этого елемента
$.prototype.html = function(content) {
    for (let i = 0; i < this.length; i++) {
        if (content) {
            this[i].innerHTML = content; // Передаем аргумент с контентом и заменяем внутри элемента.
        } else {
            return this[i].innerHTML; // Если контент не был передан, то тогда мы получаем содержимое этого элемента.
        }
    }

    return this;
};
// Получение определенного элемента по номеру
$.prototype.eq = function(i) {
    const swap = this[i];
    const objLength = Object.keys(this).length; // Превращаем обьект в маасив и используем свойство length которое есть в масиве.

    for (let i = 0; i < objLength; i++) { // Очищаем полностью обьект, он будет пустой так как мы все удалили из него
        delete this[i];
    }

    this[0] = swap; // Формируем заново обьект, в котором будет один элемент и одно свойство, с которым мы будем работать.
    this.length = 1;
    return this;
};
// Получение номера по порядку среди всех соседий, у одного общего родителя (index)
$.prototype.index = function() {
    const parent = this[0].parentNode; // получили родителя искомого елемента
    const childs = [...parent.children]; // получаем html колекцию, псевдомассив. Поэтому его превращаем в стандартный масив.

    const findMyIndex = (item) => {
        return item == this[0];
    };

    return childs.findIndex(findMyIndex);
};
// Находжение определенного элемента среди всех выбраных
$.prototype.find = function(selector) {
    let numberOfItems = 0;  // общее количество
    let counter = 0;        // записанные елементы

    const copyObj = Object.assign({}, this); // создаем копию объекта, в нутри каждого скопированного элемента мы попробуем найти елементы, подходящие под заданный селектор selector.

    for (let i = 0; i < copyObj.length; i++) { // в копии ищим заданный селектор и записываем его в arr
        const arr = copyObj[i].querySelectorAll(selector); 
        if (arr.length == 0) {     // если елементы не найдены
            continue;
        }

        for (let j = 0; j < arr.length; j++) { //если елементы найдени то работаем с this и записываем в него найденные элементы.
            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length;
    }

    this.length = numberOfItems;

    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++) { // удаляем остаток
        delete this[numberOfItems];
    }

    return this;
};
//Работа с получиными элементами (доработать!!!)

$.prototype.closest = function(selector) {
    let counter = 0;

    for (let i = 0; i < this.length; i++) {
        if (this[i].closest(selector) === null) {
            return this;
        } else {
            this[i] = this[i].closest(selector);
            counter++;
        }
    }
    const objLength = Object.keys(this).length;   
    for (; counter < objLength; counter++) {     // удаляем остаток, очистка
        delete this[counter];
    }

    return this;
};

// Получает всех соседние элементы но не сам элемент
$.prototype.siblings = function() {
    let numberOfItems = 0;      // общие количество
    let counter = 0;        // записанные елементы

    const copyObj = Object.assign({}, this); // Cоздаем копию объекта, в нутри каждого скопированного элемента мы попробуем найти елементы, подходящие под заданный селектор selector.

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].parentNode.children;  // В копии ищим заданный селектор и записываем его в arr

        for (let j = 0; j < arr.length; j++) {   //Если элементы найдены то работаем с this и записываем в него найденные элементы.
            if (copyObj[i] === arr[j]) {       // Если этот элемент равен элементу который перебирается в arr, это тот элемент на котором и произошло действие и мы его пропускаем.
                continue;
            }

            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length - 1;
    }

    this.length = numberOfItems;

    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++) { // удаляем остаток
        delete this[numberOfItems];
    }

    return this;
};