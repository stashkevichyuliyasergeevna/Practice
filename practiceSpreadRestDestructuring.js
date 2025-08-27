// 15 задач по spread, rest, destructuring в JavaScript
// Уровень: Средний — сложный

// Задача 1
// Создайте новый массив, объединяя два существующих массива arrA и arrB, 
// при этом добавьте в конец новый элемент 'end'. Используйте spread.
{
    const arrA = [1, 2, 3];
    const arrB = [4, 5, 6];
    const newArr = [...arrA, ...arrB, `end`]
    console.log(newArr)
    // [1, 2, 3, 4, 5, 6, 'end']
}



// Задача 2
// Дана функция:
// Передайте в нее массив так, чтобы она посчитала сумму элементов.
{
    values = [10, 20, 30]
    function sumAll(...numbers) {
        return numbers.reduce((acc, num) => acc + num, 0);
    }
    console.log(sumAll(...values))
}



// Задача 3
// Даны объекты.
// Создайте новый объект finalSettings, объединяя оба объекта так, 
// чтобы свойства из userSettings перезаписывали свойства из defaultSettings.
{
    const defaultSettings = {
        theme: 'light',
        showSidebar: true,
    };
    const userSettings = {
        theme: 'dark',
    };
    const finalSettings = { ...defaultSettings, ...userSettings }
    console.log(finalSettings)// { theme: 'dark', showSidebar: true }
}



// Задача 4
// Дан массив.
// Используя деструктуризацию и rest - оператор, извлеките первый элемент 
// в переменную first, а остальные — в массив others.
{
    const numbers = [1, 2, 3, 4, 5];
    const [first, ...others] = numbers
    console.log(first) // 1
    console.log(others) // [ 2, 3, 4, 5 ]
}


// Задача 5
// Дана функция. Передайте ей аргументы из массива с помощью spread.
{
    const arr = [2, 3, 4]
    function multiply(a, b, c) {
        return a * b * c;
    }
    console.log(multiply(...arr)) // 24
}



// Задача 6
// Дан объект. 
// Создайте новый объект personInfo, исключив свойство city, 
// используя деструктуризацию и rest - оператор.
{
    const person = {
        name: 'Ivan',
        age: 30,
        city: 'Moscow'
    };
    const { ...personCopy } = person // извлекла все свойства
    const personCopyKeys = Object.keys(personCopy) // извлекла все ключи в массив
    personCopyKeys.pop() // отрезала последний ключ
    let personInfo = {} // создала целевой объект
    for (let i of personCopyKeys) {
        personInfo[i] = personCopy[i]
    }
    console.log(personInfo) // { name: 'Ivan', age: 30 }
}



// Задача 7
// Объявите функцию getFullName, которая принимает объект с полями firstName и lastName.
// Используйте деструктуризацию внутри функции для получения этих свойств.
// Возвращайте строку "ФИО: <firstName> <lastName>".
{
    const person = {
        firstName: `Yuliya`,
        lastName: `Stashkevich`,
        age: 28,
        city: `Spb`
    }
    function getFullName(obj) {
        const { firstName, lastName, ...others } = obj
        return `ФИО: ${firstName} ${lastName}`
    }
    console.log(getFullName(person)) // ФИО: Yuliya Stashkevich
}



// Задача 8
// Объедините три массива[1], [2], [3] в один с помощью spread.
// Результат — массив[1, 2, 3].
{
    const arr1 = [1, 1, 1]
    const arr2 = [2, 2, 2]
    const arr3 = [3, 3, 3]
    const arr4 = [...arr1, ...arr2, ...arr3]
    console.log(arr4)
    // [
    //     1, 1, 1, 2, 2,
    //     2, 3, 3, 3
    // ]
}



// Задача 9
// Дана функция. 
// Вызовите ее так: передайте ей все элементы массива как отдельные аргументы.
{
    const arr = [7, 8, 9]
    function logArguments(...args) {
        console.log(args);
    }
    logArguments(...arr) // [ 7, 8, 9 ]
}



// Задача 10
// Дан объект. 
// Создайте копию этого объекта с помощью spread и измените значение свойства volume на 20.
{
    const settings = {
        volume: 10,
        brightness: 70,
        contrast: 50,
    };
    const copy = { ...settings, volume: 20 }
    console.log(copy) // { volume: 20, brightness: 70, contrast: 50 }
}



// Задача 11(сложнее)
// Напишите функцию mergeObjects, которая принимает любое количество объектов и возвращает 
// один объединенный объект. Свойства из последующих объектов должны перезаписывать предыдущие.
// Пример вызова:
{
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    const obj3 = { a: 3, c: 5 };

    function mergeObjects(...data) {
        let result = {}
        for (let i of data) {
            result = { ...result, ...i }
        }
        return result
    }
    const result = mergeObjects(obj1, obj2, obj3);
    console.log(result) // { a: 3, b: 2, c: 5 }
}
{ }



// Задача 12(сложнее)
// Дана функция. 
// Вызовите ее так: передайте объект { name: 'Anna', age: 25 } 
// и массив[1, 2, 3], чтобы получить правильный вывод.
{
    function processData({ name, age }, ...others) {
        console.log(`Имя: ${name}, возраст: ${age}`);
        console.log('Остальные:', others);
    }
    const obj = { name: 'Anna', age: 25 }
    const arr = [1, 2, 3]
    processData(obj, ...arr)
    // Имя: Anna, возраст: 25
    // Остальные: [1, 2, 3]
}



// Задача 13(сложное)
// Дан массив объектов. 
// Создайте новый массив объектов с помощью spread так, чтобы каждый объект 
// имел дополнительное свойство active: true.
{
    const data = [
        { id: 1, value: 'a' },
        { id: 2, value: 'b' },
        { id: 3, value: 'c' }
    ];
    const data2 = data.map((obj) => {
        return { ...obj, active: true }

    })
    console.log(data2)
    // [
    //     { id: 1, value: 'a', active: true },
    //     { id: 2, value: 'b', active: true },
    //     { id: 3, value: 'c', active: true }
    // ]
}



// Задача 14(сложное)
// Напишите функцию filterAndMerge, которая принимает два массива объектов 
// и возвращает один массив.В результирующем массиве должны остаться только объекты 
// с уникальными значениями свойства id.Используйте spread для объединения.
{
    const arr1 = [{ id: 1 }, { id: 2 }];
    const arr2 = [{ id: 2 }, { id: 3 }];
    // результат должен быть [{id:1},{id:2},{id:3}]

    function filterAndMerge(arr1, arr2) {
        const combined = [...arr1, ...arr2];
        const result = [];
        for (const obj of combined) {
            // Проверяем, есть ли уже объект с таким id в result
            if (!result.some(item => item.id === obj.id)) {
                result.push(obj);
            }
        }
        return result;
    }
    const result = filterAndMerge(arr1, arr2);
    console.log(result)
    // [ { id: 1 }, { id: 2 }, { id: 3 } ]
}



// Задача 15(самая сложная)
// Реализуйте функцию deepCopyObject(obj), которая создает глубокую копию 
// переданного объекта(без ссылок на исходные вложенные объекты).
// Используйте spread для поверхностных копий внутри функции.
// Обратите внимание на вложенные объекты.
{
    const original = {
        1: { id: 2 },
        2: { id: 3 },
        3: 1,
        4: { id: 3 },
        5: 1
    }
    function deepCopyObject(obj) {
        let result = {}
        for (let item in obj) {
            if (typeof (obj[item]) !== `object`) {
                result = { ...result, [item]: obj[item] }
            } else {
                result = { ...result, [item]: deepCopyObject(obj[item]) }
            }
        }
        return result
    }
    console.log(deepCopyObject(original))
    // { '1': { id: 2 }, '2': { id: 3 }, '3': 1, '4': { id: 3 }, '5': 1 }
}



