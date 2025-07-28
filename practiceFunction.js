// Создайте функцию, которая использует внешнюю переменную counter, 
// увеличивая её значение на 1 при каждом вызове. (использовать доступ к внешней переменной)
let counter = 1
function practice1() {
    counter++
}
practice1()
practice1()
practice1()
console.log(counter) // 4


// Напишите функцию greet, которая принимает имя как аргумент и вызывает другую функцию getGreeting(), 
// чтобы получить приветствие, и возвращает полное сообщение. (вызов функций)
function getGreeting() {
    return `Приветствую тебя`
}
function greet(name) {
    return `${getGreeting()}, ${name}! Сегодня отличный день!`
}
console.log(greet(`Юлия`)) // Приветствую тебя, Юлия! Сегодня отличный день!


// Объявите переменную name внутри функции с тем же именем, что и внешняя переменная name. 
// Внутри функции присвойте ей новое значение. После вызова функции проверьте, 
// какая переменная изменилась — внутренняя или внешняя. (перекрытие внешних переменных)
let name = `Yuliya`
function practice2() {
    let name = `Timosha`
    return name
}
practice2()
console.log(name) // Yuliya
console.log(practice2()) // Timosha
console.log(name) // Yuliya
// Переменная, объявленая внутри функции, остается внутри, не изменяя внешнюю переменную, 
// но при этом, являясь локальной, она перекрывает глобальную, поэтому внутри функции name = `Timosha`, 
// а снаружи name = `Yuliya`


// Создайте функцию calculateArea, которая принимает ширину и высоту как аргументы и возвращает площадь. 
// Если высота не передана, она должна равняться 10 по умолчанию. (использование значений по умолчанию)
function calculateArea(width, height = 10) {
    return width * height
}
console.log(calculateArea()) // NaN
console.log(calculateArea(10)) // 100
console.log(calculateArea(20, 30)) // 600


// Напишите функцию showMessage(from, text = getDefaultText()), где getDefaultText() — функция, возвращающая строку по умолчанию. 
// Проверьте, чему равен аргумент text, если его не передать при вызове. (вычисление параметров по умолчанию)
function getDefaultText() {
    return `программировать`
}
function showMessage(from, text = getDefaultText()) {
    return `Привет! Я ${from}, умею ${text}`
}
console.log(showMessage(`Тимоша`, `какаться`)) // Привет! Я Тимоша, умею какаться
console.log(showMessage(`Юля`)) // Привет! Я Юля, умею программировать
console.log(showMessage()) // Привет! Я undefined, умею программировать


// Создайте функцию processData(data), которая проверяет, что переданный аргумент 
// не равен null или undefined с помощью операторов ?? и ??=. 
// Если он равен null или undefined, присвой ему значение по умолчанию. (проверка на null/undefined с ?? и ??=)
function processData(data) {
    data = data ?? `данные111`
    // или data ??= `данные111`
    return data
}
console.log(processData()) // данные111
console.log(processData(`данные222`)) // данные222


// Напишите большую функцию main(), которая вызывает несколько вспомогательных функций: 
// одна для получения данных, другая — для их обработки, третья — для отображения результата. 
// Каждая из этих функций должна быть простой и выполнять свою задачу отдельно. (структура большой функции из вызовов меньших)
function receiving() {
    return Math.random()
}
function processing(number1, number2) {
    return number1 * number2
}
function displaying(result) {
    return `Готовый ответ ${result}`
}
function main(data1 = 111, data2 = receiving()) {
    let newData = processing(data1, data2)
    return displaying(newData)
}
console.log(main()) // Готовый ответ 29.286612702689634
console.log(main(10, 10)) // Готовый ответ 100
console.log(main(10)) // Готовый ответ 2.680244376990477


// Создайте функцию через Function Expression, которая принимает число и возвращает его квадрат. 
// Назовите её square. Затем вызовите её с числом 5.
// Сделайте то же самое через Function Declaration
const square = function (number) {
    return number * number
}
console.log(square(5)) // 25

function square2(number) {
    return number * number
}
console.log(square2(5)) // 25

//Объявите функцию через Function Expression и попробуйте вызвать её до объявления. Что произойдет? Почему?
practice3() // ReferenceError: Cannot access 'practice3' before initialization
const practice3 = function () {
    return 1
}
// Когда функция объявлена, как Function Expression, она будет задекларирована только когда выполнение кода дойдет 
// до const practice3 = ..., а до этого момента функция считается не объявленной. В отличии от Function Declaration, поскольку
// js перед выполнением кода ищет все декларативные функции и как-бы "поднимает" их вверх, тем самым создавая (декларируя)


// Создайте стрелочную функцию greet, которая принимает имя и возвращает строку "Привет, <имя>!". 
// Внутри функции используйте переменную greetingPrefix = "Привет" вне функции. 
// Проверьте, можете ли вы обратиться к этой переменной внутри стрелочной функции.
const greetingPrefix = "Привет"
const greet = (name) => {
    return `${greetingPrefix}, ${name}!`
}
console.log(greet(`Юлия`)) // Привет, Юлия!
// Стрелочная функция имеет доступ к переменным, объявленным в внешней области.


// Перепишите с использованием стрелочной функции:
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
// let ask = (question, yes, no) => confirm(question) ? yes() : no()
ask(
    "Вы согласны?",
    function () { alert("Вы согласились."); },
    function () { alert("Вы отменили выполнение."); }
);
// let ask("Вы согласны?",
// () => alert("Вы согласились."),
// () => alert("Вы отменили выполнение.")
// )


// Тренируем Function Declaration

// Создай функцию с помощью объявления функции, которая принимает два числа и возвращает их сумму.
function practice4(num1, num2) {
    return Number(num1) + Number(num2)
}


// Напиши функцию-объявление, которая выводит в консоль приветствие с именем пользователя, 
// переданным в качестве аргумента.
function practice5(name) {
    alert(`Привет, ${name}`)
}


// Function Expression

// Создай функцию-выражение, которая принимает строку и возвращает её в обратном порядке.
let practice6 = function (str) {
    return str.split('').reverse().join('');
}
// Используй функцию-выражение для вычисления произведения двух чисел, переданных в качестве аргументов.
let practice7 = function (num1, num2) {
    return num1 * num2
}

    // Анонимные функции

    // Создай анонимную функцию и вызови её сразу же (самовызывающаяся), чтобы вывести сообщение "Анонимная функция выполнена"
    (function () {
        alert(`Анонимная функция выполнена`)
    })()


// Передай анонимную функцию как обработчик события (например, при вызове функции), чтобы она выводила сообщение в консоль.

function practice8(func1, func2, date) {
    date ? func1() : func2()
}
practice8(function () { alert(`данные получены`) }, function () { alert(`данные не получены`) }, 10) // данные получены
practice8(function () { alert(`данные получены`) }, function () { alert(`данные не получены`) },) // данные не получены


// Функции-колбэки

// Напиши функцию, которая принимает число и колбэк-функцию, вызываемую с этим числом.
function practice9(num, callback) {
    return callback(num)
}
let practice10 = function (num) {
    return num += 1
}
console.log(practice9(10, practice10))


// Создай функцию, которая принимает число и колбэк, который проверяет условие (например, является ли число чётным), 
// и выводит результат.
function practice11(num, callback) {
    return callback(num)
}
console.log(practice11(5, function (num) {
    return num % 2 == 0 ? `Четное число` : `Нечетное число`
})) // Нечетное число


    // IIFE (Immediately Invoked Function Expression)

    // Создай IIFE, которая выводит в консоль сообщение "Мгновенно выполнена".
    (function () {
        console.log("Мгновенно выполнена")
    })()


    // Используй IIFE для определения приватной переменной и вывода её значения.
    (function () {
        const private = `Я приватная переменная`
        console.log(private)
    })()


// Стрелочные функции

// Перепиши функцию из задания на Function Declaration в виде стрелочной функции.
function practice4(num1, num2) {
    return Number(num1) + Number(num2)
} // было

let practice12 = (num1, num2) => Number(num1) + Number(num2) // стало


// Создай стрелочную функцию, которая принимает два аргумента и возвращает их сумму.
let practice13 = (data1, data2) => data1 + data2


// Создайте стрелочную функцию isAdult, которая принимает возраст и возвращает true, если возраст 18 или больше, 
// и false в противном случае. Используйте её для определения, является ли пользователь совершеннолетним, 
// и выводите соответствующее сообщение через alert.
let isAdult = (age) => {
    return age >= 18 ? true : false
}
let ageUser = prompt(`Ваш возраст `, 0)
let result = isAdult(ageUser) ? `совершеннолетний` : `несовершеннолетний`
alert(`Вы ${result}!`)


// Напишите стрелочную функцию calculateArea, которая принимает радиус круга и возвращает площадь этого круга. 
// Используйте её для вычисления площади круга с радиусом, введённым пользователем через prompt,
// и выводите результат через alert.
const calculateArea = (rad) => {
    return Math.PI * Math.pow(rad, 2)
}
const userRad = prompt(`Введите радиус `)
alert(`Ваша площадь = ${calculateArea(userRad)}`)


// Получена переменная. Создайте стрелочную функцию, которая в зависимости от значения переменной
// будет будет вызывать анонимную функцию, 
// которая будет выводить разные сообщения. 
const age = prompt(`Введите данные `)
const welcome = age ?
    () => alert(`Данные переданы`) :
    () => alert(`данные не переданы`)
welcome()


// Получена переменная text. 
// Создайте стрелочную функцию, которая в зависимости от длины строки text будет вызывать анонимную функцию,
// которая будет выводить разные сообщения. 
const text = prompt(`Ваш текст`)
const practice14 = text.length < 10 ?
    () => { alert(`Текст короткий`) } :
    () => { alert(`Текст подходящий`) }
practice14()


// Создай функцию с return для проверки условия — действительно ли счёт игрока больше 100
// Используй функцию вместо условия
function practice15(num) {
    return num > 100
}
let userNum = prompt(`Введите число для првоерки `)
practice15(userNum) ? alert('Больше 100') : alert(`Меньше 100`)