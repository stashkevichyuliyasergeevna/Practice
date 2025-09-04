
// 1. Уникальный словарь из массива строк
// Напишите функцию buildUniqueSet(arr), которая принимает массив строк и возвращает Set, 
// содержащий только уникальные слова из массива (игнорируя регистр).
// Вход: ['Apple', 'banana', 'Apple', 'Cherry']
{
    const newArr = ['Apple', 'banana', 'Apple', 'Cherry']
    function buildUniqueSet(arr) {
        const arrSet = new Set()
        arr.forEach(value => {
            let lowValue = value.toLowerCase()
            arrSet.add(lowValue)
        })
        return arrSet
    }
    console.log(buildUniqueSet(newArr)) // Set(3) { 'apple', 'banana', 'cherry' }
}



// 2. Добавление элементов с фильтрацией
// Создайте функцию addValidatedItems(set, items), которая добавляет элементы из массива items в Set, 
// но только если они не являются числами. Верните обновленный Set.
{
    const newArr = [1, `11`, 23, `44`, 123, `111`]
    const newSet = new Set()
    function addValidatedItems(set, items) {
        items.forEach(value => {
            if (typeof (value) !== `number`) set.add(value)
        })
        return set
    }

    console.log(addValidatedItems(newSet, newArr)) // Set(3) { '11', '44', '111' }
}



// 3. Очистка и повторное заполнение
// Напишите функцию resetAndFill(set, newItems), которая очищает Set, 
// затем добавляет новые элементы из массива newItems, 
// сохраняя только уникальные.
{
    function resetAndFill(set, newItems) {
        set.clear()
        newItems.forEach(value => {
            set.add(value)
        })
        return set
    }
    const s = new Set(['a', 'b', 'c']);
    console.log(resetAndFill(s, ['b', 'c', 'd', 'd']));
    // Set(3) { 'b', 'c', 'd' }
}



// 4. Условная очистка по размеру
// Создайте функцию clearIfLarge(set, maxSize), которая очищает Set, если его размер больше maxSize. 
// Верните true, если очистка произошла.
{
    function clearIfLarge(set, maxSize) {
        if (set.size > maxSize) {
            set.clear()
            return true
        }
        return false

    }
    const s = new Set([1, 2, 3, 4]);
    console.log(clearIfLarge(s, 3)); // true
    console.log(s.size); // 0
}



// 5. Удаление элементов по условию
// Напишите функцию removeEvenNumbers(set), которая удаляет все четные числа из Set.
{
    const s = new Set([1, 2, 3, 4, 5, 6]);
    function removeEvenNumbers(set) {
        set.forEach(value => {
            if (value % 2 === 0) set.delete(value)
        })
        return set
    }
    console.log(removeEvenNumbers(s));
    // Set { 1, 3, 5 }
}




// 6. Удаление с возвратом результата
// Создайте функцию deleteItems(set, itemsToDelete), которая пытается удалить элементы 
// из массива itemsToDelete из Set и возвращает массив булевых значений, 
// показывающих успешность удаления каждого элемента.
{
    function deleteItems(set, itemsToDelete) {
        let boolArray = []
        itemsToDelete.forEach(value => {
            boolArray.push(set.delete(value))
        })
        return boolArray
    }
    const s = new Set(['a', 'b', 'c']);

    console.log(deleteItems(s, ['b', 'x', 'a']));
    // [true, false, true]
    console.log(s); // Set { 'c' }
}



// 7. Проверка пересечения множеств
// Напишите функцию hasIntersection(set1, set2), которая возвращает true, 
// если между двумя множествами есть хотя бы один общий элемент.
{
    function hasIntersection(set1, set2) {
        return !set1.isDisjointFrom(set2)
    }
    const s1 = new Set([1, 2, 3]);
    const s2 = new Set([3, 4, 5]);
    const s3 = new Set([6, 7]);
    console.log(hasIntersection(s1, s2)); // true
    console.log(hasIntersection(s1, s3)); // false
}


// 8. Фильтрация массива по множеству
// Создайте функцию filterBySet(arr, set), которая возвращает новый массив, 
// содержащий только те элементы из arr, которые есть в set.
{
    const arr = [1, 2, 3, 4, 5];
    const s = new Set([2, 4, 6]);
    function filterBySet(arr, set) {
        const newSet = new Set(arr)
        return newSet.intersection(set)
    }
    console.log(filterBySet(arr, s));
    // [2, 4]
}



// 9. Подсчет уникальных элементов
// Напишите функцию countUnique(arr), которая возвращает количество уникальных элементов в массиве.
{
    function countUnique(arr) {
        const newSet = new Set(arr)
        return newSet.size
    }
    const arr = [1, 2, 2, 3, 3, 3];
    console.log(countUnique(arr)); // 3
}



// 10. Проверка размера с порогом
// Создайте функцию isSizeValid(set, minSize), которая возвращает true, если размер Set больше или равен minSize.
{
    function isSizeValid(set, minSize) {
        return set.size >= minSize
    }
    const s = new Set([1, 2, 3]);
    console.log(isSizeValid(s, 3)); // true
    console.log(isSizeValid(s, 4)); // false
}



// 11. Суммирование элементов множества
// Напишите функцию sumSet(set), которая возвращает сумму всех числовых элементов множества.
{
    function sumSet(set) {
        let summ = 0
        set.forEach(value => {
            summ += value
        })
        return summ
    }
    const s = new Set([1, 2, 3, 4]);
    console.log(sumSet(s)); // 10
}



// 12. Преобразование множества в объект
// Создайте функцию setToObject(set), которая возвращает объект, 
// где ключи — индексы, а значения — элементы множества.
{
    function setToObject(set) {
        let newArr = Array.of(...set)
        let newObj = {}
        for (let i = 0; i < newArr.length; i++) {
            newObj[i] = newArr[i]
        }
        return newObj
    }
    const s = new Set(['a', 'b', 'c']);
    console.log(setToObject(s));
    // { '0': 'a', '1': 'b', '2': 'c' }
}



// 13. Преобразование множества в массив
// Напишите функцию setToArray(set), которая возвращает массив элементов множества.
{
    function setToArray(set) {
        return Array.of(...set)
    }
    const s = new Set([1, 2, 3]);
    console.log(setToArray(s)); // [1, 2, 3]
}




// 14. Вывод ключей и пар множества
// Создайте функцию logSetDetails(set), которая выводит в консоль ключи множества и пары вида [значение, значение].
{
    function logSetDetails(set) {
        console.log(`Keys :`)
        for (let i of set.values()) {
            console.log(i)
        }
        console.log(`Entries :`)
        for (let [key, value] of set.entries()) {
            console.log(`[${key}, ${value}]`)
        }
    }
    const s = new Set(['x', 'y']);
    logSetDetails(s);
    // Keys:
    // x
    // y
    // Entries:
    // ['x', 'x']
    // ['y', 'y']
}



// 15. Копирование множества с фильтром
// Напишите функцию copyAndFilter(set, condition), которая возвращает новый Set, 
// содержащий только те элементы исходного множества, которые удовлетворяют условию condition (функция-предикат).
{
    function copyAndFilter(set, condition) {
        const newSet = new Set()
        set.forEach(value => {
            if (condition(value)) { newSet.add(value) }
        })
        return newSet
    }
    const s = new Set([1, 2, 3, 4, 5]);
    console.log(copyAndFilter(s, x => x > 3));
    // Set { 4, 5 }
}




// 16. Объединение двух множеств
// Создайте функцию unionSets(set1, set2), которая возвращает новый Set с элементами из обоих множеств без повторений.
{
    function unionSets(set1, set2) {
        return set1.union(set2)
    }
    const s1 = new Set([1, 2, 3]);
    const s2 = new Set([3, 4, 5]);
    console.log(unionSets(s1, s2));
    // Set { 1, 2, 3, 4, 5 }
}
