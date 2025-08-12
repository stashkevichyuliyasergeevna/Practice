// Создайте объект person1 с помощью литерала. 
// Создайте объект person2 с помощью new Object(). Добавьте свойства: name, age, hobbies.

// Измените значение свойства name в объекте person. 
// Добавьте новое свойство city. Удалите свойство age.

// Добавьте в объект person метод, который выводит сообщение: 
// "Привет, я [имя]". Вызовите этот метод.
{
    let person1 = {}
    let person2 = new Object()
    person2.name = undefined
    person2.age = undefined
    person2.hobbies = undefined

    person2['city'] = undefined
    delete person2.age

    person2['helloFunc'] = function (name) {
        return `Привет, я ${name}`
    }
    person2.helloFunc('Юлия')
}



// Создайте объект library с массивом books. 
// Каждый элемент массива — объект с полями title и author.
// Обращайтесь к свойствам по разному, через . и []
// Добавьте новую книгу в массив.
{
    // Первый способ
    let library = {
        books: [{ author: "A", title: "Cool Book" }]
    }
    // Второй способ (используя метод массива push())
    library.books.push({ author: "B", title: "Super Book" })
}



// Проверьте и объясните, равны ли переменные при помощи оператора ===. Почему?
{
    let objA = { name: "Alice" };
    let objB = objA;
    let objC = { name: "Alice" };
    // Отвечаю: objA === objB , так как они ссылаются на один и тот же объект
    // objB !== objC , так как они, хоть и содержать одинаковые значения свойств, ссылаются на
    // разные объекты в памяти, поэтому сравнить их через === не имеет смысла
}



// Реализуйте функцию, которая принимает строку и возвращает объект, 
// где ключи — это буквы из строки (приведенные к нижнему регистру), 
// а значения — сколько раз каждая буква встречается.
{
    function practice(str) {
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
}



// Создайте функцию, которая принимает строку и возвращает объект, 
// где ключи — слова из строки (без учета регистра),
// а значения — сколько раз каждое слово встречается.
{
    function practice(str) {
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

}



// Напишите функцию digitsCount, которая принимает строку 
// и возвращает объект с подсчетом всех цифр (0-9), встречающихся в строке.
{
    function digitsCount(str) {
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
}



// Напишите функцию, которая принимает объект и строку — название ключа. 
// Функция должна возвращать true, если такой ключ есть в объекте, и false — если нет.
// Напиши функцию коротким и длинным способом
{
    function practice(obj, name) {
        for (let key in obj) {
            if (key === name) return true
        }
        return false
    }

    function practice2(obj, name) {
        return name in obj
    }
}



// Создайте объект с несколькими свойствами. 
// Используйте цикл for..in, чтобы вывести все ключи и их значения в консоль.
{
    let objD = {
        name: "Julia",
        age: 29,
        city: "Saint Petersburg"
    }
    for (let key in objD) {
        console.log(`Ключ: ${key} Значение: ${obj[key]} \n`)
    }
}



// Создайте объект с несколькими свойствами, значениями которых — строки. 
// Используйте цикл for..in, чтобы вывести для каждого свойства сообщение 
// о длине его значения.
{
    let objE = {
        name: "Julia",
        age: 29,
        city: "Saint Petersburg"
    }
    for (let key in objE) {
        console.log(`Длина свойства ${key} = ${String(objE[key]).length}`)
    }
}



// Создайте функцию, которая принимает объект с несколькими свойствами,
// где каждое свойство — это другой объект. 
// Функция должна вывести все ключи и значения всех вложенных объектов.
{
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

    function practice(obj) {
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
    practice(objF)
}



// Напишите функцию, которая принимает объект и возвращает массив его ключей, 
// отсортированный по алфавиту. 
// Пример: 
// const obj = { b: 2, a: 1, c: 3 };
// console.log(sortedKeys(obj)); // ['a', 'b', 'c']
{
    const obj = { b: 2, a: 1, c: 3 };

    function practice(obj) {
        let keys = Object.keys(obj)
        let newArr = keys.toSorted()
        return newArr
    }
}



// Дана функция, которая принимает объект с вложенными объектами. 
// Необходимо вернуть массив всех уникальных ключей на всех уровнях вложенности.
{
    const obj = {
        b: 2,
        a: 1,
        c: 3,
        d: {
            e: 2,
            f: {
                m: 1,
                n: 0
            }
        }
    };

    function practice(obj) {
        let keys = []
        for (let key in obj) {
            keys.push(key)
            if (typeof (obj[key]) === `object` && obj[key] !== null) {
                let reqKeys = practice(obj[key])
                keys.push(reqKeys)
            }
        }
        return keys.flat(Infinity)
    }
    console.log(practice(obj)) // ['b', 'a', 'c', 'd', 'e', 'f', 'm', 'n']
}



// Создайте объект user, содержащий имя и возраст. 
// Затем создайте новый объект admin, который будет копией user, 
// но с добавленным свойством role со значением 'admin'. 
// Используйте Object.assign().
// Поэксперементируйте, определите случаи, когда метод мутирует исходный объект, а когда нет
{
    let user = {
        name: `Y`,
        age: 29
    }

    let admin = Object.assign(user, { role: `admin` })
    console.log(admin) // { name: 'Y', age: 29, role: 'admin' }
    console.log(user) // { name: 'Y', age: 29, role: 'admin' } 
    // Видим, что объект user мутировал из-за неправильного применения метода
    console.log(admin === user) // true

}
{
    let user = {
        name: `Y`,
        age: 29
    }

    let admin = Object.assign({}, user, { role: `admin` })
    console.log(admin) // { name: 'Y', age: 29, role: 'admin' }
    console.log(user) // { name: 'Y', age: 29 } Видим, что объект не мутировал
    console.log(admin === user) // false
}



// Дана структура объектов.
// Объедините эти объекты так, чтобы получить итоговые настройки пользователя, 
// при этом приоритет отдавайте userSettings. Используйте Object.assign().
{
    const defaultSettings = {
        theme: 'light',
        notifications: true,
        autoSave: false
    };

    const userSettings = {
        theme: 'dark',
        autoSave: true
    };
    let newObj = Object.assign({}, defaultSettings, userSettings)
    console.log(newObj) // { theme: 'dark', notifications: true, autoSave: true }
    console.log(defaultSettings, userSettings) // не изменились
}



// Создайте объект animal с свойствами species и методом makeSound(), 
// который выводит "Some sound". Затем создайте объект dog, который будет наследовать от animal, 
// и добавьте ему свойство name и переопределите метод makeSound(), чтобы он выводил "Woof!". 
// Используйте Object.create().
{
    const animal = {
        species: 1,
        makeSound() {
            console.log("Some sound")
        }
    }
    const dog = Object.create(animal,
        {
            name: {
                value: 'Timosha',
                writable: true,
                enumerable: true
            },
            makeSound: {
                value: function () { console.log("Woof!"); },
                writable: true,
                enumerable: true
            }

        })
    console.log(dog)
    dog.makeSound(); // Выведет "Woof!"
    console.log(dog.species); // Наследует from animal
}