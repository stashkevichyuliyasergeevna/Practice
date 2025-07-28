// Создайте объект person1 с помощью литерала. 
// Создайте объект person2 с помощью new Object(). Добавьте свойства: name, age, hobbies.

let person1 = {}
let person2 = new Object()
person2.name = undefined
person2.age = undefined
person2.hobbies = undefined


// Измените значение свойства name в объекте person. 
// Добавьте новое свойство city. Удалите свойство age.

person2['city'] = undefined
delete person2.age


// Добавьте в объект person метод, который выводит сообщение: 
// "Привет, я [имя]". Вызовите этот метод.

person2['helloFunc'] = function (name) {
    return `Привет, я ${name}`
}
person2.helloFunc('Юлия')

// Создайте объект library с массивом books. 
// Каждый элемент массива — объект с полями title и author.
// Обращайтесь к свойствам по разному, через . и []
// Добавьте новую книгу в массив.

// Первый способ
let library = {
    books: [{ author: "A", title: "Cool Book" }]
}
// Второй способ (используя метод массива push())
library.books.push({ author: "B", title: "Super Book" })


// Проверьте и объясните, равны ли переменные при помощи оператора ===. Почему?
let objA = { name: "Alice" };
let objB = objA;
let objC = { name: "Alice" };
// Отвечаю: objA === objB , так как они ссылаются на один и тот же объект
// objB !== objC , так как они, хоть и содержать одинаковые значения свойств, ссылаются на
// разные объекты в памяти, поэтому сравнить их через === не имеет смысла


// Реализуйте функцию, которая принимает строку и возвращает объект, 
// где ключи — это буквы из строки (приведенные к нижнему регистру), 
// а значения — сколько раз каждая буква встречается.

function myTrain22(str) {
    let lowStr = str.toLowerCase()
    let obj = {}
    for (let i = 0; i < lowStr.length; i++) {
        let letter = lowStr[i]
        if (obj[letter]) {
            obj[letter] += 1
        } else {
            obj[letter] = 1
        }
    }
    return obj
}

// Создайте функцию, которая принимает строку и возвращает объект, 
// где ключи — слова из строки (без учета регистра),
// а значения — сколько раз каждое слово встречается.

function myTrain23(str) {
    let lowStr = str.toLowerCase()
    let strings = lowStr.split(' ')
    let obj = {}
    for (let i = 0; i < strings.length; i++) {
        let letter = strings[i]
        if (obj[letter]) { obj[letter] += 1 } else {
            obj[letter] = 1
        }
    }
    return obj
}

// Напишите функцию digitsCount, которая принимает строку 
// и возвращает объект с подсчетом всех цифр (0-9), встречающихся в строке.

function myTrain24(str) {
    let arr = str.split('')
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        let newNum = Number(arr[i])

        if (Number.isFinite(newNum) && !(newNum in obj)) {
            obj[newNum] = 1
        }
        else if (Number.isFinite(newNum) && (newNum in obj)) {
            obj[newNum] += 1
        }

    }
    return obj
}

// Напишите функцию, которая принимает объект и строку — название ключа. 
// Функция должна возвращать true, если такой ключ есть в объекте, и false — если нет.
// Напиши функцию коротким и длинным способом

function myTrain25(obj, name) {
    for (let key in obj) {
        if (key === name) return true
    }
    return false
}

function myTrain26(obj, name) {
    return name in obj
}

// Создайте объект с несколькими свойствами. 
// Используйте цикл for..in, чтобы вывести все ключи и их значения в консоль.

let objD = {
    name: "Julia",
    age: 29,
    city: "Saint Petersburg"
}
for (let key in objD) {
    console.log(`Ключ: ${key}
Значение: ${obj[key]} \n`)
}

// Создайте объект с несколькими свойствами, значениями которых — строки. 
// Используйте цикл for..in, чтобы вывести для каждого свойства сообщение 
// о длине его значения.

let objE = {
    name: "Julia",
    age: 29,
    city: "Saint Petersburg"
}
for (let key in objE) {
    console.log(`Длина свойства ${key} = ${String(objE[key]).length}`)
}

// Создайте функцию, которая принимает объект с несколькими свойствами,
// где каждое свойство — это другой объект. 
// Функция должна вывести все ключи и значения всех вложенных объектов.

let objF = {
    names: {
        1: `Julia`,
        2: `Masha`,
        3: `Olga`,
    },
    towns: {
        1: "Moskow",
        2: "Saint Petersburg",
        3: "Bratsk"
    },
    cookies: 1,
    tomatos: 5
}

function myTrain27(obj) {
    for (let key in obj) {
        if (typeof obj[key] === `object`) {
            let newObj = obj[key]
            console.log(`Встроенный в переменную ${key} объект:`)
            for (let key in newObj) {
                console.log(`Ключ: ${key} значение: ${newObj[key]}`)
            }
        } else { console.log(`Ключ: ${key} значение: ${obj[key]}`) }
    }
}
myTrain27(objF)

