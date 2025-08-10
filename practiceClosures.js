// Создание счетчика вызовов 
// Создайте функцию createCounter(), которая возвращает объект с двумя методами: 
// increment() и getValue(). 
// Каждый вызов increment() увеличивает внутренний счетчик на 1, 
// а getValue() возвращает текущее значение счетчика. 
// Используйте замыкание для хранения внутреннего счетчика.
{
    function createCounter() {
        let object = {
            counter: 0,
            increment() {
                return this.counter += 1
            },
            getValue() {
                return this.counter
            }
        }
        return object
    }
    const counter = createCounter();
    counter.increment();
    console.log(counter.getValue());
}


// Генератор фильтров по диапазону дат 
// Создайте функцию dateRangeFilter(startDate, endDate), которая возвращает функцию-колбек 
// для метода filter(). Эта функция должна проверять, что дата элемента массива 
// (предполагается, что элементы — строки в формате "YYYY-MM-DD" или объекты Date) 
// находится внутри заданного диапазона дат (включительно). 
// Если startDate больше endDate, функция должна возвращать всегда false.
{
    function dateRangeFilter(startDate, endDate) {
        if (startDate > endDate) {
            return () => {
                return false
            }
        } else {
            return (value) => {
                return value >= startDate && value <= endDate ? true : false
            }
        }
    }
}


// Фильтр по типу данных 
// Создайте функцию typeFilter(typeName), которая возвращает функцию-колбек для метода filter(). 
// Эта функция должна проверять, что тип элемента массива совпадает с переданным 
// ("string", "number", "boolean" и т.д.). 
// Внутри функции-обертки используйте замыкание для запоминания типа.
{
    function typeFilter(typeName) {
        return (value) => {
            return typeof (value) === typeName ? true : false
        }
    }
}


// Генератор функций умножения 
// Создайте функцию makeMultiplier(factor), которая возвращает новую функцию, 
// умножающую свой аргумент на заданный множитель. 
// Например, const double = makeMultiplier(2); — вызов double(5) должен вернуть 10. 
// Замыкание должно запомнить значение множителя.
{
    function makeMultiplier(factor) {
        return (value) => {
            return value * factor
        }
    }
}


// Создание функции-таймера Создайте функцию createTimer(), 
// которая возвращает объект с методами start(), stop() и getElapsedTime(). 
// Метод start() запускает таймер, stop() останавливает его, 
// а getElapsedTime() возвращает прошедшее время в миллисекундах между запуском и остановкой. 
// Используйте замыкание для хранения времени начала и конца.
// Объясните где и почему нужно хранить переменные старта и остановки времени.
{
    function createTimer() {
        let startTime = 0
        let endTime = 0
        return {
            start() {
                startTime = Date.now()
            },
            stop() {
                endTime = Date.now()
            },
            getElapsedTime() {
                let result = startTime - endTime
                return result
            },
        }
    }
    let obj = createTimer()
    obj.start()
    obj.stop()
    console.log(obj.getElapsedTime())

    // Необходимо обьявлять переменные startTime и endTime внутри функции createTimer().
    // Так создается замыкание, что защищает переменные от изменения извне, кроме как методами
    // start() stop() переменные не изменить.
    // Проверим это на практике. Выведем возвращаемый функцией  createTimer() обьект
    console.log(obj)
    // { 
    // start: [Function: start], 
    // stop: [Function: stop], 
    // getElapsedTime: [Function: getElapsedTime] 
    // }
    // Видим, что доступа к внутренним переменным нет и их никак не изменить.
}


// Создайте функцию createLimitedCounter(limit), которая возвращает объект с методами:
// increment(), decrement() и getValue().
// Значение счетчика должно начинаться с 0.
// Метод increment() увеличивает счетчик на 1, но не превышает заданный лимит.
// Метод decrement() уменьшает счетчик на 1, но не опускается ниже 0.
// Метод getValue() возвращает текущее значение.
// Задача: Реализуйте функцию так, чтобы внутреннее состояние было скрыто 
// и изменялось только через методы.
{
    function createLimitedCounter(limit) {
        let counter = 0
        return obj = {
            increment() {
                if (counter < limit) counter += 1
            },
            decrement() {
                if (counter > 0) counter -= 1
            },
            getValue() {
                return counter
            }
        }
    }
    let obj = createLimitedCounter(10)
    obj.increment()
    obj.increment()
    obj.increment()
    obj.decrement()
    console.log(obj.getValue()) // 2
}