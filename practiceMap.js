// Задача 1
// Реализуйте функцию countChars(str), которая возвращает Map с подсчётом каждого символа в строке. 
// Используйте has(), get(), set().
// Дано: str = "hello"
// Ожидаемый результат: Map { 'h' => 1, 'e' => 1, 'l' => 2, 'o' => 1 }
{
    const str = "hello"
    function countChars(str) {
        let arrStr = str.split(``)
        let newMap = new Map()
        arrStr.forEach(value => {
            if (!newMap.has(value)) {
                newMap.set(value, 1)
            } else {
                let val = newMap.get(value)
                val++
                newMap.set(value, val)
            }
        })
        return newMap
    }
    console.log(countChars(str))
    //Map(4) { 'h' => 1, 'e' => 1, 'l' => 2, 'o' => 1 }
}



// Задача 2
// Напишите функцию mergeMaps(map1, map2), которая объединяет две карты в новую. 
// Для совпадающих ключей суммируйте значения. 
// Используйте has(), get(), set().
// Дано:
// map1 = new Map([ ['a', 2], ['b', 3] ])
// map2 = new Map([ ['b', 4], ['c', 5] ])
// Ожидаемый результат: Map { 'a' => 2, 'b' => 7, 'c' => 5 }
{
    const map1 = new Map([['a', 2], ['b', 3]])
    const map2 = new Map([['b', 4], ['c', 5]])
    function mergeMaps(map1, map2) {
        let newMap = new Map()
        for (let [key, value] of map1.entries()) {
            newMap.set(key, value)
        }
        for (let [key, value] of map2.entries()) {
            if (newMap.has(key)) {
                let newValue = newMap.get(key) + value
                newMap.set(key, newValue)
            } else {
                newMap.set(key, value)
            }
        }
        return newMap
    }
    console.log(mergeMaps(map1, map2))
    // Map(3) { 'a' => 2, 'b' => 7, 'c' => 5 }
}



// Задача 3
// Создайте функцию filterMapByValue(map, threshold), которая возвращает новую карту с парами, 
// где значение больше threshold. 
// Используйте entries(), set(), get().
// Дано:
// map = new Map([ ['x', 10], ['y', 5], ['z', 15] ])
// threshold = 8
// Ожидаемый результат: Map { 'x' => 10, 'z' => 15 }
{
    const map = new Map([['x', 10], ['y', 5], ['z', 15]])
    const threshold = 8
    function filterMapByValue(map, threshold) {
        let newMap = new Map()
        for (const [key, value] of map.entries()) {
            if (value > threshold) {
                newMap.set(key, value)
            }
        }
        return newMap
    }
    console.log(filterMapByValue(map, threshold))
    // Map(2) { 'x' => 10, 'z' => 15 }
}



// Задача 4
// Реализуйте функцию invertMap(map), меняющую ключи и значения местами. 
// При одинаковых значениях — в новом Map будет массив ключей. 
// Используйте entries(), has(), get(), set().
// Дано:
// map = new Map([ ['key1', 'val'], ['key2', 'val'], ['key3', 'other'] ])
// Ожидаемый результат: Map { 'val' => ['key1', 'key2'], 'other' => ['key3'] }
{
    const map = new Map([['key1', 'val'], ['key2', 'val'], ['key3', 'other']])
    function invertMap(map) {
        let newMap = new Map()
        for (let [key, value] of map) {
            if (!newMap.has(value)) {
                newMap.set(value, key)
            } else {
                let newValue = [newMap.get(value), key]
                newMap.set(value, newValue)
            }
        }
        return newMap
    }
    console.log(invertMap(map))
    // Map(2) { 'val' => [ 'key1', 'key2' ], 'other' => 'key3' }
}



// Задача 5
// Напишите функцию removeKeys(map, keysArray), которая удаляет из map все ключи из массива. 
// Если после удаления карта пустая, вызовите clear() для полной очистки. 
// Используйте delete(), has(), size, clear().
// Дано:
// map = new Map([ ['a', 1], ['b', 2], ['c', 3] ])
// keysArray = ['b', 'c']
// Ожидаемый результат: map после удаления: Map { 'a' => 1 }
// Если удалить все ключи: keysArray = ['a', 'b', 'c'], то карта будет пустой и вызовется clear().
{
    const keysArray = ['b', 'c']
    const keysArray2 = ['a', 'b', 'c']
    const map = new Map([['a', 1], ['b', 2], ['c', 3]])
    function removeKeys(map, keysArray) {
        for (let key of keysArray) {
            if (map.has(key)) {
                map.delete(key)
            }
        }
        if (map.size = 0) { map.clear() }
        return map
    }
    console.log(removeKeys(map, keysArray)) // Map(1) { 'a' => 1 }
    console.log(removeKeys(map, keysArray2)) // Map(0) {}
}


// Задача 6
// Создайте функцию mapToObject(map), которая преобразует Map в объект. 
// Перед преобразованием проверьте, пуст ли Map. 
// Если пуст, очистите Map. 
// Используйте entries(), clear(), size.
// Дано:
// map = new Map([ ['name', 'John'], ['age', 30] ])
// Ожидаемый результат: { name: 'John', age: 30 }
// Если карта пустая: map = new Map(), то карта очищается вызовом clear().
{
    const map = new Map([['name', 'John'], ['age', 30]])
    const map2 = new Map()
    function mapToObject(map) {
        if (map.size = 0) {
            map.clear()
            return map
        }
        const newObj = {}
        for (let [key, value] of map.entries()) {
            newObj[key] = value
        }
        return newObj
    }
    console.log(mapToObject(map)) // { name: 'John', age: 30 }
    console.log(mapToObject(map2)) // {}
}


// Задача 7
// Реализуйте функцию sumValues(map), возвращающую сумму всех числовых значений. 
// Если сумма равна 0, очистите карту.
// Используйте values(), for...of, clear().
// Дано:
// map = new Map([ ['a', 10], ['b', -10] ])
// Ожидаемый результат:
// Сумма значений: 0
// Карта очищена вызовом clear().
{
    const map = new Map([['a', 10], ['b', -10]])
    const map2 = new Map([['a', 10], ['b', -5]])
    function sumValues(map) {
        let summ = 0
        for (let value of map.values()) {
            summ += value
        }
        if (summ !== 0) {
            return summ
        } else {
            map.clear()
            return map
        }
    }
    console.log(sumValues(map)) // Map(0) {}
    console.log(sumValues(map2)) // 5
}


// Контрольная задача

// Требования к реализации:
// 1) Используйте только указанные методы: keys(), entries(), set(), clear(), size, Array.from().
// 2) Ключи сортируйте лексикографически (по умолчанию, как в Array.sort()).
// 3) Функция должна быть чистой: не модифицировать входной map напрямую.
// 4) Обработайте крайние случаи: пустая карта, callback возвращает не-числа и т.д.

// Напишите функцию processMapWithCallback(map, callback), которая выполняет следующие шаги:

// 1) Проверка пустоты: 
// Проверьте, пустая ли карта.
// Если карта пустая, вызовите очистку и верните объект { isEmpty: true, keys: [] }.
// Если карта не пустая, продолжите.

// 2) Обновление значений: 
// Используйте метод для перебора пар [ключ, значение].
// Примените callback к каждому значению и обновите карту.

// 3) Проверка после обновления: 
// После обновления проверьте, все ли значения стали null или undefined. 
// Если да, вызовите очистку и верните объект { allNullOrUndefined: true, keys: [] }.

// 4) Возврат результата: 
// Если карта не пустая и не все значения null/undefined, 
// используйте keys(), Array.from() и сортировку (например, лексикографическую), 
// чтобы вернуть объект { processed: true, keys: [отсортированные ключи] }.

// Примеры:

// Пример 1 (пустая карта):
// const map = new Map();
// const callback = (v) => v * 2;
// console.log(processMapWithCallback(map, callback)); // { isEmpty: true, keys: [] }

// Пример 2 (обновление значений, не все null/undefined):
// const map2 = new Map([ ['banana', 1], ['apple', 2], ['cherry', 3] ]);
// const callback2 = (v) => v > 1 ? v * 2 : null;
// console.log(processMapWithCallback(map2, callback2)); // { processed: true, keys: ['apple', 'banana', 'cherry'] } (карта обновлена: 'apple' => null, 'banana' => null, 'cherry' => 6)

// Пример 3 (все значения стали null/undefined после обновления):
// const map3 = new Map([ ['a', 1], ['b', 2] ]);
// const callback3 = (v) => null; // Все значения станут null
// console.log(processMapWithCallback(map3, callback3)); // { allNullOrUndefined: true, keys: [] }


{
    function processMapWithCallback(map, callback) {
        let copyMap = new Map([...map])

        if (copyMap.size === 0) {
            copyMap.clear()
            return { isEmpty: true, keys: [] }
        }

        for (let [key, value] of copyMap.entries()) {
            let newValue = callback(value)
            copyMap.set(key, newValue)
        }

        let flag = 0
        for (let value of copyMap.values()) {
            if (value !== null && value !== undefined) flag++
        }

        if (flag == 0) {
            copyMap.clear()
            return { allNullOrUndefined: true, keys: [] }
        } else {
            let keysArr = Array.from(copyMap.keys()).sort()
            return {
                processed: true,
                keys: keysArr
            }
        }
    }

    const map = new Map();
    const callback = (v) => v * 2;
    console.log(processMapWithCallback(map, callback)); // { isEmpty: true, keys: [] }

    const map2 = new Map([['banana', 1], ['apple', 2], ['cherry', 3]]);
    const callback2 = (v) => v > 1 ? v * 2 : null;
    console.log(processMapWithCallback(map2, callback2)); // { processed: true, keys: ['apple', 'banana', 'cherry'] } (карта обновлена: 'apple' => null, 'banana' => null, 'cherry' => 6)

    const map3 = new Map([['a', 1], ['b', 2]]);
    const callback3 = (v) => null; // Все значения станут null
    console.log(processMapWithCallback(map3, callback3)); // { allNullOrUndefined: true, keys: [] }
}