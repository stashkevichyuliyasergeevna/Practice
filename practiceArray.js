// Тренирую все методы массивов

// Array.isArray()

// Проверьте, является ли переданный аргумент массивом или нет.
{
    const result = Array.isArray(data)
}

// Напишите функцию, которая принимает любой аргумент и возвращает его, если это массив, иначе — возвращает пустой массив.
{
    function func(data) {
        return Array.isArray(data) ? data : []
    }
}

// Создайте функцию, которая принимает несколько аргументов и возвращает только те из них, которые являются массивами.
{
    function func(datas) {
        let result = []
        for (let data of datas) {
            Array.isArray(data) ? result.push(data) : false
        }
        return result
    }
}



// Array.from()

// Создайте массив из строки символов.
{
    const result = Array.from(str)
}

// Преобразуйте объект с числовыми ключами в массив (например, {"0": "a", "1": "b", "2": "c", length: 3}).
{
    const result = Array.from({ "0": "a", "1": "b", "2": "c", length: 3 }, (data) => { return data })
    console.log(result) 
}

// Создайте массив из диапазона чисел от 0 до 9 с помощью Array.from().
{
    let result = Array.from({ length: 10 }, (_, i) => i = i
    )
    console.log(result) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
}



// Array.of()
// Создайте массив из нескольких чисел с помощью Array.of().
// Создайте массив из смешанных типов данных (числа, строки, объекты).
// Используйте Array.of() для создания массива из одного элемента — строки.