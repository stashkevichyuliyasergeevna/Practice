// Тренирую все методы массивов


// Проверьте, является ли переданный аргумент массивом или нет.
{
    const result = Array.isArray(data)
}


// Напишите функцию, которая принимает любой аргумент и возвращает его, 
// если это массив, иначе — возвращает пустой массив.
{
    function func(data) {
        return Array.isArray(data) ? data : []
    }
}


// Создайте функцию, которая принимает несколько аргументов и возвращает только те из них, 
// которые являются массивами.
{
    function func(datas) {
        let result = []
        for (let data of datas) {
            Array.isArray(data) ? result.push(data) : false
        }
        return result
    }
}


// Создайте массив из строки символов.
{
    const result = Array.from(str)
}


// Преобразуйте объект с числовыми ключами в массив.
{
    const result = Array.from({ "0": "a", "1": "b", "2": "c", length: 3 }, (data) => { return data })
    console.log(result)
}


// Создайте массив из диапазона чисел от 0 до 9 с помощью только Array.from().
{
    let result = Array.from({ length: 10 }, (_, i) => i = i
    )
    console.log(result) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
}


// Создайте массив из нескольких чисел с помощью метода.
{
    const result = Array.of(11, 22, 33)
}


// Создайте массив из смешанных типов данных (числа, строки, объекты).
{
    const result = Array.of(11, `11`, function () { }, { 1: 11, 2: 11 })
}


// Используйте метод для создания массива из одного элемента — строки.
{
    const result = Array.of(`data`)
}


// Найдите индекс первого отрицательного числа в массиве.
{
    const arr = [1, 22, 13, -10]
    let result = arr.findIndex((value) => {
        return value < 0
    })
    console.log(result) // 3
}


// Определите индекс первого элемента, который превышает заданное значение.
{
    const arr = [1, 22, 13, -10]
    const num = 20
    let result = arr.findIndex((value) => {
        return value >= num
    })
    console.log(result) // 1
}


// В массиве объектов найдите индекс первого объекта с определенным свойством равным заданному значению.
{
    const arr = [{}, { 1: 10, 2: 20 }, { 1: 'a', 2: 'b' }, {}, { 1: 100, 2: 200 }];
    const needProperty = '2';
    const needValue = 200;

    const result = arr.findIndex((value, index, array) => {
        if (value[needProperty] && value[needProperty] == needValue) return true
    })
    console.log(result) // 4
}


// В массиве чисел найдите индекс последнего числа, делящегося на 3.
{
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const result = array.findLastIndex((value) => {
        return value % 3 === 0
    })
    console.log(result) // 8
}


// В списке пользователей (объект) найдите индекс последнего пользователя с возрастом больше 30.
{
    const arr = [{ name: `ana`, age: 20 }, { name: `toto`, age: 25 }, { name: `dada`, age: 30 }, { name: `coco`, age: 40 }, { name: `lala`, age: 59 }]
    let result = arr.findLastIndex((value) => {
        if (value.age > 30) return true
    })
    console.log(result) // 4
}


// В массиве строк найдите индекс последнего элемента, начинающегося на определенную букву.
{
    const arr = [`qqq`, `ddd`, `aaa`, `ddd`, `lll`]
    const needStr = `d`
    let result = arr.findLastIndex((value) => {
        if (value[value.length - 1] === `d`) return true
    })
    console.log(result) // 3
}


// Определите первый индекс появления заданного элемента в массиве.
{
    const arr = [`qqq`, `ddd`, `aaa`, `ddd`, `lll`]
    const needStr = `lll`
    const result = arr.indexOf(needStr)
    console.log(result) // 4
}


// Найдите последний индекс появления элемента в массиве.
{
    const arr = [`qqq`, `ddd`, `aaa`, `ddd`, `lll`]
    const needStr = `ddd`
    const result = arr.lastIndexOf(needStr)
    console.log(result) // 3
}


// Проверьте наличие элемента в массиве и верните его индекс или -1.
{
    const arr = [`qqq`, `ddd`, `aaa`, `ddd`, `lll`]
    const needStr = false
    const result = arr.indexOf(needStr)
    console.log(result) // -1
}


// Определите последний раз встреченное число в списке и первый раз встреченное число в списке.
{
    const arr = [`qqq`, `33`, 33, `ddd`, false, 22, `aaa`, `ddd`, 22, true, `lll`]
    const needNum1 = 22
    const needNum2 = 33
    console.log(arr.lastIndexOf(needNum1)) // 8
    console.log(arr.indexOf(needNum2)) // 2
}


// В списке объектов найдите последний объект с определенным свойством равным определенному значению.
// Решите двумя разными способами, используя разные методы
{
    const arr = [
        { "id": 1, "name": "Алексей", "status": "активен" },
        { "id": 2, "name": "Мария", "status": "неактивен" },
        { "id": 3, "name": "Павел", "status": "активен" },
        { "id": 4, "name": "Ирина", "status": "активен" },
        { "id": 5, "name": "Олег", "status": "неактивен" },
    ]
    const property = "status"
    const value = "активен"
    const arrStatus = []
    for (let i of arr) {
        if (i[property] === value) arrStatus.push(i)
    }
    console.log(arrStatus)
    const result = arrStatus[arrStatus.length - 1]
    console.log(result) // { id: 4, name: 'Ирина', status: 'активен' }
}
{
    const arr = [
        { "id": 1, "name": "Алексей", "status": "активен" },
        { "id": 2, "name": "Мария", "status": "неактивен" },
        { "id": 3, "name": "Павел", "status": "активен" },
        { "id": 4, "name": "Ирина", "status": "активен" },
        { "id": 5, "name": "Олег", "status": "неактивен" },
    ]
    const property = "status"
    const value = "активен"
    let result = arr.findLast((obj) => {
        return obj[property] === value
    })
    console.log(result) // { id: 4, name: 'Ирина', status: 'активен' }

}


// Дана два массива чисел. 
// Создайте новый массив, объединив эти два массива с помощью метода (без spread).
{
    const arr1 = [1, 2, 3]
    const arr2 = [4, 5, 6]
    const newArr = newArr.concat(arr1, arr2)
    console.log(newArr)
}


// Даны три массива строк.
// Объедините их в один массив и добавьте в конец элемент 'груша'.
{
    const fruits = ['яблоко', 'банан']
    const itrus = ['апельсин', 'лимон']
    const berries = ['клубника', 'малина']
    let newArray = [].concat(fruits, itrus, berries)
    newArray.push(`груша`)
    console.log(newArray)
    // [
    //     'яблоко', 'банан',
    //     'апельсин', 'лимон',
    //     'клубника', 'малина',
    //     'груша'
    // ]
}


// Дан массив. Скопируйте первые два элемента (10, 20) в позицию начиная с индекса 3. 
// В результате должно получиться [10, 20, 30, 10, 20].
{
    const numbers = [10, 20, 30, 40, 50]
    const newArray = numbers.copyWithin(3, 0, 2)
    console.log(newArray) // [ 10, 20, 30, 10, 20 ]
}


// Дан массив. 
// Скопируйте элементы с индексов 1-3 ('b', 'c', 'd') в начало массива.
// В результате должно получиться ['b', 'c', 'd', 'a', 'b', 'c', 'd', 'e']
{
    const letters = ['a', 'b', 'c', 'd', 'e']
    const newArray = [].concat(letters.slice(1, 4), letters)
    console.log(newArray)
    // [
    //     'b', 'c', 'd',
    //     'a', 'b', 'c',
    //     'd', 'e'
    // ]
}


// Дан массив. Замените все элементы на число 0.
{
    const arr = [1, 2, 3, 4, 5]
    arr.fill(0, 0)
    console.log(arr) // [ 0, 0, 0, 0, 0 ]
}


// Дан массив. Замените элементы с индекса 1 по индекс 2 на 'черный'.
{
    const colors = ['красный', 'зеленый', 'синий', 'желтый']
    colors.fill('черный', 1, 3)
    console.log(colors) // [ 'красный', 'черный', 'черный', 'желтый' ]
}


// Дан массив чисел. Создайте новый массив только из положительных чисел.
{
    const nums = [5, -3, 8, -1, 0]
    const newNum = nums.filter((value) => {
        return value >= 0
    })
    console.log(newNum) // [ 5, 8, 0 ]
}


// Дан массив объектов people, где каждый объект имеет свойство age. Отфильтруйте людей младше 18 лет.
{

    let people = [
        { name: 'Иван', age: 20 },
        { name: 'Петя', age: 16 },
        { name: 'Маша', age: 25 }
    ];
    people.forEach((value, index) => {
        if (value.age < 18) people.splice(index, 1)
    })
    console.log(people) // [ { name: 'Иван', age: 20 }, { name: 'Маша', age: 25 } ]

}


// Дан вложенный массив. Сделайте его плоским на один уровень.
{
    const nestedArr = [1, [2, [3]], 4]
    const newArr = nestedArr.flat()
    console.log(newArr) // [ 1, 2, [ 3 ], 4 ]
}


// Дан массив. Сделайте его одномерным массивом.
{
    const arr = [['a'], ['b'], ['c']]
    const newArr = arr.flat(Infinity)
    console.log(newArr) // [ 'a', 'b', 'c' ]
}


// Дана строка. Для каждого символа создайте массив из этого символа и его кода (charCodeAt), 
// затем объедините все в один плоский массив. Например: 'h' -> ['h',72]. Используйте методы.
{
    const str = "hello"
    let stringToArr = str.split(``)
    let result = []
    for (let i of stringToArr) {
        result.push([i, i.charCodeAt(0)])
    }
    const resultToFlat = result.flat(Infinity)
    console.log(resultToFlat)
    // [
    //     'h', 104, 'e', 101,
    //     'l', 108, 'l', 108,
    //     'o', 111
    // ]
}


// Дана матрица чисел. 
// Создайте одномерный массив всех элементов с помощью метода, умножая каждый элемент на два. 
// Подумайте, почему нельзя использовать .flatMap()
{
    const matrix = [[1, 2], [3], [4, 5]]
    let newMatrix = matrix.flat(Infinity)
    let result = newMatrix.map((value) => {
        return value * 2
    })
    console.log(result) // [ 2, 4, 6, 8, 10 ]
}


// Имеется массив имен. 
// Выведите каждое имя в консоль с помощью метода .
{
    const names = ['Анна', 'Борис', 'Виктор']
    names.forEach((data) => console.log(data)) // Анна Борис Виктор
}


// Дана коллекция объектов товаров
// Добавьте к каждому товару свойство discountedPrice, 
// равное цене минус скидка в размере 10, при помощи метода.
{
    let products = [{ name: 'Товар1', price: 100 }, { name: 'Товар2', price: 200 }];
    products.forEach((obj) => {
        return obj[`discountedPrice`] = obj.price - 10
    })
    console.log(products)
    // [
    //   { name: 'Товар1', price: 100, discountedPrice: 90 },
    //   { name: 'Товар2', price: 200, discountedPrice: 190 }
    // ]
}


// Дан массив строк. 
// Объедините их в одну строку через пробел при помощи метода.
{
    words = ['привет', 'мир']
    let result = words.join(` `)
    console.log(result) // привет мир
}


// Массив чисел преобразовать в строку через запятую 
// и вывести результат в консоль при помощи метода.
{
    const arr = [10, 20, 30]
    let result = arr.join(`,`)
    console.log(result) // 10,20,30
}


// Дан массив чисел. Создайте новый массив с квадратами этих чисел при помощи метода.
{
    const arr = [10, 20, 30]
    const newArr = arr.map((value) => {
        return value ** 2
    })
    console.log(newArr) // [ 100, 400, 900 ]
}


// Имеется массив объектов товаров. Создайте новый массив названий товаров при помощи метода.
// Затем превратите его в строку c разделителем ; и пробел
{
    let products = [{ name: 'Книга', price: 300 }, { name: 'Ручка', price: 50 }];
    let arrNames = []
    products.forEach((value) => {
        arrNames.push(value.name)
    })
    let result = arrNames.join(`; `)
    console.log(result) // Книга; Ручка
}


// Имеется массив. Удалите последний элемент и сохраните его значение в переменную при помощи метода, 
// затем добавьте новое значение false в конец массива при помощи метода.
{
    const arr = [true, false, true]
    const newArr = arr.toSpliced(arr.length - 1, 1, `false`)
    const str = arr.pop()
    console.log(str, newArr) // true [ true, false, 'false' ]
}


// Дана коллекция задач.
// Удалите последний элемент и добавьте новую задачу 'читать книгу' вместо него. Используйте методы.
{
    let tasks = ['учить JS', 'делать домашку'];
    tasks.pop()
    tasks.push('читать книгу')
    console.log(tasks) // [ 'учить JS', 'читать книгу' ]

}


// В масиве получите значение последнего элемента при помощи метода.
{
    const arr = [10, 20, 30]
    const result = arr.at(arr.length - 1)
    console.log(result) // 30
}


// Массив значений проверьте методом, все ли числа больше нуля?
{
    const arr = [4, 6, 8]
    const result = arr.every((value) => {
        return value > 0
    })
    console.log(result) // true
}


// В масиве объектов найдите первый объект с id равным 102. Верните его флаг. 
{
    let users = [{ id: 101, flag: `red` }, { id: 102, flag: `blue` }, { id: 103, flag: `potato` }];
    let result = users.find((value) => {
        return value.id === 102
    })
    console.log(result.flag) // blue
}


// Проверьте есть ли число 5 в масиве тремя разными методами. 
// Верните булевое значение.
// В одном из методов проверяйте с 4 числа.
{
    const arr = [1, 3, 5, 7, 0, 6, 0]
    result = arr.some((value) => {
        return value === 5
    })
    console.log(result) // true
}
{
    const arr = [1, 3, 5, 7, 0, 6, 0]
    result = arr.includes(5, 3)
    console.log(result) // false
}
{
    const arr = [1, 3, 5, 7, 0, 6, 0]
    result = arr.find((value) => {
        return value === 5
    })
    console.log(Boolean(result)) // true
}


// Проверьте есть ли хотя бы один отрицательный элемент в массиве методом.
{
    const arr = [0, -1, -2]
    let result = arr.some((value) => {
        return value < 0
    })
    console.log(result) // true
}


// Создайте итератор для массива методом, 
// выведите первые два элемента итератора (индекс + значение) двумя способами.
// обьясните, почему цикл не работает, что нужно сделать, чтобы это изменить.
// решите проблему.
{
    const letters = ['a', 'b', 'c', 'd', 'e']
    const iteratorLetters = letters.entries()
    console.log(iteratorLetters.next().value)// [ 0, 'a' ]
    console.log(iteratorLetters.next().value) // [ 1, 'b' ]

    for (let [index, value] of iteratorLetters) {
        if (index < 2) { console.log(value) }
    }
    // Мы ничего не получаем, так как итератор запоминает свою текущую позицию и 
    // не реагирует на повторный вызов.
    // Для решения проблемы необходимо либо создать новый итератор, либо убрать условие index < 2
    for (let [index, value] of iteratorLetters) {
        if (index) { console.log(index, value) }
    }
    // 2 c
    // 3 d
    // 4 e

}


// Создайте итератор ключей для массива методом, выведите все ключи через цикл.
{
    const letters = ['a', 'b', 'c', 'd', 'e']
    const keys = letters.keys()
    for (let key of keys) {
        console.log(key) // 0 1 2 3 4
    }
    console.log()

}


// Создайте итератор значений для массива [true,false,true] методом, 
// выведите все значения через цикл или вручную вызовами метода.
{ }


