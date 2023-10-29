// Задание 1
// Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul
// должен добавляться элемент li. Содержимое li - нажатая клавиша.


const ul1 = document.querySelector('.ul1');
const input1 = document.querySelector('.inp1');
input1.addEventListener('keyup', function(event) {
    ul1.innerHTML += `<li>${event.key}</li>`
})


// Задание 2
// Вставить в html тег input (просто предусмотреть в разметке).
// Обрабатывая событие keyup на теге input, выводить в консоль введенный
//  текст каждый раз, как только клиент вписывает любой символ в поле 
//  (или стирает любой символ из поля). Вам понадобится считывать значение
//   поля, это input.value

const input2 = document.querySelector('.inp2');
input2.addEventListener('keyup', () => console.log(input2.value));


// Задание 3
// Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. 
// Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст
//  (input.value). После отправки формы инпут должен быть очищен (проставить пустую строку в value).
  

const input3 = document.querySelector('.inp3');
const ul2 = document.querySelector('.ul2');
const form1 =  document.querySelector('.form1');

form1.addEventListener('submit', (event) => {
    event.preventDefault();
    let text = input3.value;
    ul2.innerHTML += `<li>${text}</li>`;
    input3.value = '';
})


// // Задание 4
// Калькулятор. 
// Создать в html форму с текстовым input, тегом select, вторым текстовым input 
// и кнопкой. Добавить в html div. Внутри select будут options - арифметические
//  знаки. В оба инпута пользователь вводит число. Когда пользователь отправляет форму 
//  (событие submit), над двумя числами выполняется действие, выбранное в select (чтобы 
//     получить выбранный пользователем option, мы "забираем" значение  select.value).
//      Результат отображается в div.
// 1) решить с помощью if
// 2) решить с помощью evel (https://developer.mozilla.org/...)


// через if

const calcForm = document.querySelector('.form2');
const resultDiv = document.querySelector(".result");


calcForm.addEventListener('submit', (event) => {

    event.preventDefault();

    const num1 = parseFloat(document.querySelector('.inp4').value);
    const num2 = parseFloat(document.querySelector('.inp5').value);
    const operation = document.getElementById('slct1').value;

    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Ошибка: введите числа";
      } else if (operation === '+') {
        result = num1 + num2;
      } else if (operation === '-') {
        result = num1 - num2;
      } else if (operation === '*') {
        result = num1 * num2;
      } else if (operation === '/'){
        if (num2 == 0){
            result = 'На ноль делить нельзя!';
        } else {
            result = num1 / num2;
        }
      }
      resultDiv.textContent = result;
})

// через eval

const calcFormE = document.querySelector('.form3');
const resultDivE = document.querySelector(".result2");

calcFormE.addEventListener('submit', (event) => {
    event.preventDefault();
    const num1E = parseFloat(document.querySelector('.inp6').value);
    const num2E = parseFloat(document.querySelector('.inp7').value);
    const operationE = document.getElementById("slct2").value;
    let resultE;
    
    if (isNaN(num1E) || isNaN(num2E)) {
        resultE = 'Ошибка: введите числа';
    } else if (operationE === "/" && num2E == 0) {
        resultE = 'На ноль делить нельзя!';
    }  else {
        resultE = eval(num1E + operationE + num2E); 
    }
    resultDivE.textContent = resultE;
})


// Задание 5
// Вставить в разметку html тег button без js (просто предусмотреть в разметке).
//  При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. При выведении 
//  мышки за пределы кнопки поворачивать кнопку на рандомный угол от -180 до 180 градусов.
//   Использовать обработку событий mouseenter, mouseleave на этой кнопке.

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




const button = document.querySelector('.btn1');
button.style.width = '100px';
button.style.height = '50px';
button.style.margin = '50px';


button.addEventListener('mouseenter', (event) => {
    let randomColor = `rgb(${getRandomNum(0,255)},${getRandomNum(0,255)},${getRandomNum(0,255)})`;
    button.style.backgroundColor = randomColor;
})

button.addEventListener('mouseleave', (event) => {
    let randomDegree = getRandomNum(-180, 180);
    button.style.transform =`rotate(${randomDegree}deg)`;
})

