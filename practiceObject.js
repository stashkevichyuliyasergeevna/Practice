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



// Даны два объекта. 
// Создайте новый объект, объединяя obj1 и obj2, чтобы в результате было: { a: 1, b: 4, c: 5 }
{
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 4, c: 5 };
    const newObj = Object.assign({}, obj1, obj2);
    console.log(newObj) // { a: 1, b: 4, c: 5 }
}



// Дана переменная. Используйте метод, чтобы скопировать свойства из объекта { y: 10 } в target. 
// После этого target должен выглядеть так: { x: 0, y: 10 }.
{
    const target = { x: 0 };
    const obj = { y: 10 };
    Object.assign(target, obj)
    console.log(target) // { x: 0, y: 10 }
}



// Дана функция, которая должна расширить объект user новыми свойствами из другого объекта. 
// Реализуйте это с помощью метода.
{
    const user = { name: 'Ivan' };
    const updates = { age: 30, city: 'Moscow' };
    // Ваша задача — обновить user так, чтобы он содержал все свойства из updates.
    function practice(target, data) {
        Object.assign(target, data)
    }
    practice(user, updates)
    console.log(user) // { name: 'Ivan', age: 30, city: 'Moscow' }
    user.age = 20
    console.log(updates) // Не изменилось { age: 30, city: 'Moscow' }
}



// Создайте объект animal с методом speak(), который выводит 'Animal speaks'. 
// Затем создайте объект dog, который наследует от animal. Вызовите dog.speak().
{
    let animal = {
        speak() {
            console.log('Animal speaks')
        }
    }
    let dog = Object.assign({}, animal)
    dog.speak() // Animal speaks
}



// Создайте объект car, унаследованный от объекта { brand: 'Toyota' }. 
// Добавьте к нему собственное свойство model. 
// Проверьте, что у вас есть доступ к свойствам прототипа и собственным.
{
    let obj = {
        brand: 'Toyota'
    }
    let car = Object.assign({}, obj, { model: `1` })
    console.log(car.model, car.brand) // 1 Toyota
}



// Создайте объект parent с методом greet(). 
// Затем создайте новый объект через Object.create(parent) и добавьте ему собственное свойство name. 
// Вызовите метод greet() у нового объекта.
{
    let parent = {
        name: `Yuliya`,
        greet() {
            console.log(this.name, `, hello!`)
        }
    }
    let parent2 = Object.create(parent, {
        name: {
            value: `Timosha`,
            writable: true,
            enumerable: true,
            configurable: true,
        }
    })
    parent2.greet() // Timosha , hello!
}



// Создайте объект person. С помощью метода добавьте ему свойства:
// name со значением 'Ivan', writable — true;
// age со значением 25, writable — false;
// Проверьте изменение этих свойств.
{
    let person = {}
    Object.defineProperties(person, {
        name: {
            value: `Ivan`,
            writable: true
        },
        age: {
            value: 25,
            writable: false
        }
    })
    console.log(person.name, person.age) // Ivan 25
    person.name = `Yuliya`
    person.age = 29
    console.log(person.name, person.age) // Yuliya 25
}



// Обновление нескольких свойств
// Дано существующее свойство объекта. Измените оба свойства так,
// чтобы они были не перечисляемыми и не могли быть удалены, с помощью одного вызова.
{
    const obj = { a: 10, b: 20 };
    Object.defineProperties(obj, {
        a: {
            enumerable: false,
            configurable: false
        },
        b: {
            enumerable: false,
            configurable: false
        }
    })
}



// Настройка дескрипторов
// Создайте объект и добавьте одно свойство через метод, 
// сделав его только для чтения и скрытым из циклов. 
// Проверьте поведение.
{
    const obj = {
        b: 1,
        c: 2
    }
    Object.defineProperty(obj, `a`, {
        value: 0,
        writable: false,
        enumerable: false,
        configurable: true,
    })
    console.log(obj.a) // 0
    obj.a = 1
    console.log(obj.a) // 0
    for (let key in obj) {
        console.log(obj[key])
    } // 1, 2
}



// Создание свойства с ограниченными возможностями
// Создайте объект и добавьте свойство id со значением '12345', 
// сделайте его только для чтения и скрытым из циклов. 
// Проверьте, что изменение значения невозможно.
{
    let obj = {
        id: 12345
    }
    Object.defineProperty(obj, `id`, {
        writable: false,
        enumerable: false
    })
    obj.id = 1
    console.log(obj.id) // 12345
}



// Изменение существующего свойства. 
// Измените дескриптор свойства name, сделав его недоступным для изменения  
// и скрытым из циклов через один вызов метода.
{
    const user = { name: 'Ivan', age: 30 };
    Object.defineProperties(user, {
        name: {
            writable: false,
            enumerable: false
        },
        age: {
            writable: false,
            enumerable: false
        }
    })
}



// Настройка свойства для удаления или изменения
// Создайте объект с одним свойством. 
// Сделайте его так, чтобы его нельзя было удалить или переопределить.
// Попробуйте удалить или изменить — убедитесь в результате.
{
    let obj = {
        name: `Yuliya`
    }
    Object.defineProperty(obj, `name`, {
        writable: false,
        configurable: false
    })
    obj.name = `Y`
    console.log(obj.name) // Yuliya
    delete (obj.name)
    console.log(obj.name) // Yuliya
}

{
    function deepEqual(obj1, obj2) {
        // Проверка на одинаковость по значению и типу
        if (Object.is(obj1, obj2)) {
            return true;
        }
        // Проверка на примитив
        if (typeof (obj1) !== `object` && typeof (obj2) !== `object` && obj1 === null && obj2 === null) {
            return false
        }
        // Проверка на массив
        if (Array.isArray(obj)) {
            for (let i of obj) { }
        }
        // проверка на объект
    }
}


// Дан массив объектов, каждый из которых представляет студента с именем и оценкой.
// Задача: Используя метод, сгруппировать студентов по их оценкам. 
// В результате должна получиться структура, где ключи — оценки, 
// а значения — массивы студентов с этой оценкой.
{
    const students = [
        { name: "Иван", grade: 5 },
        { name: "Мария", grade: 4 },
        { name: "Павел", grade: 5 },
        { name: "Анна", grade: 3 },
        { name: "Дмитрий", grade: 4 },
    ];
    const result = Object.groupBy(students, (data) => {
        return data.grade
    })
    console.log(result)

    // [Object: null prototype] {
    //   '3': [ { name: 'Анна', grade: 3 } ],
    //   '4': [ { name: 'Мария', grade: 4 }, { name: 'Дмитрий', grade: 4 } ],
    //   '5': [ { name: 'Иван', grade: 5 }, { name: 'Павел', grade: 5 } ]
    // }
}


// Дан массив товаров, у каждого есть название и цена
// Используя метод, сгруппировать товары по диапазонам цен:
// "дешёвые" — цена до 50 включительно,
// "средние" — цена от 51 до 200,
// "дорогие" — цена выше 200.
// В результате должна получиться структура с тремя свойствами, каждое из которых содержит 
// массив товаров, попавших в соответствующий диапазон.
{
    const products = [
        { name: "Книга", price: 150 },
        { name: "Ручка", price: 20 },
        { name: "Тетрадь", price: 50 },
        { name: "Лампа", price: 300 },
        { name: "Карандаш", price: 20 },
    ];
    const result = Object.groupBy(products, (value) => {
        return value.price <= 50 ? "дешёвые" : value.price > 50 && value.price <= 200 ? "средние" : "дорогие"
    })
    console.log(result)

    //   [Object: null prototype] {
    //   'средние': [ { name: 'Книга', price: 150 } ],
    //   'дешёвые': [
    //     { name: 'Ручка', price: 20 },
    //     { name: 'Тетрадь', price: 50 },
    //     { name: 'Карандаш', price: 20 }
    //   ],
    //   'дорогие': [ { name: 'Лампа', price: 300 } ]
    //   }
}



// Создайте два объекта с одинаковыми свойствами. Проверьте, равны ли они по значению с помощью метода
{
    obj1 = {
        a: 10
    }
    obj2 = obj1
    obj3 = {
        a: 10
    }
    console.log(Object.is(obj1, obj2)) // true
    console.log(Object.is(obj1, obj3)) // false
}



// Создайте исходный объект с несколькими свойствами. 
// Создайте новый объект, скопировав свойства из первого и добавив новые свойства.
{
    let obj1 = {
        a: 1,
        b: 2
    }
    let obj2 = Object.assign({}, obj1, { c: 3 })
    console.log(obj2) // { a: 1, b: 2, c: 3 }
}



// Создайте объект с несколькими свойствами. 
// Получите массив пар [ключ, значение] этого объекта. 
// Затем из этого массива создайте новый объект с такими же свойствами.
{
    let obj1 = {
        a: 1,
        b: 2
    }
    let arr = Object.entries(obj1)
    console.log(arr) // [ [ 'a', 1 ], [ 'b', 2 ] ]
    let obj2 = Object.fromEntries(arr)
    console.log(obj2) // { a: 1, b: 2 }
}



// Создайте объект с обычными свойствами и символами-свойствами. 
// Получите список всех собственных свойств, включая неперечисляемые, а также список символов.
{
    const sym1 = Symbol('id');
    let obj = {
        a: 1,
        b: 2,
        [sym1]: `Y`
    }
    let data1 = Object.getOwnPropertyNames(obj)
    let data2 = Object.getOwnPropertySymbols(obj)
    console.log(data1) // [ 'a', 'b' ]
    console.log(data2) // [ Symbol(id) ]
}



// Создайте объект и получите массив его значений и массив его ключей.
{
    let obj = {
        a: 1,
        b: 2,
        с: 3
    }
    let keys = Object.keys(obj)
    let values = Object.values(obj)
    console.log(keys) // [ 'a', 'b', 'с' ]
    console.log(values) // [ 1, 2, 3 ]
}



// Проверьте, содержит ли объект определенное свойство, двумя разными способами.
{
    let obj = {
        a: 1,
        b: 2,
        с: 3
    }
    console.log(obj.hasOwnProperty(`a`)) // true
    console.log(Object.hasOwn(obj, `b`)) // true
}



// Проверьте, является ли определенное свойство у объекта собственным и перечисляемым.
{
    let obj = {
        a: 1,
        b: 2,
        с: 3
    }
    console.log(obj.propertyIsEnumerable(`a`)) // true
    console.log(obj.propertyIsEnumerable(`q`)) // false
}



// Напишите функцию, которая группирует элементы массива по заданному признаку (ключу). 
// Используйте для этого методы работы с объектами.
{
    let arr = [10, 5, 22, 11, 3, 4, 2]
    let result = Object.groupBy(arr, (data) => {
        return data % 2 === 0 ? `без остатка` : `с остатком`
    })
    console.log(result)
    //  [Object: null prototype] {
    //   'без остатка': [ 10, 22, 4, 2 ],
    //   'с остатком': [ 5, 11, 3 ]
    //  }

}



// Создайте объект и сделайте его неизменяемым (заморозьте). 
// Проверьте его состояние методом.
// Попробуйте изменить свойства — убедитесь, что изменения не произошли.
{
    let obj = {
        a: 1,
        b: 2,
        с: 3
    }
    Object.freeze(obj)
    obj.a = 11
    obj[`d`] = 4
    console.log(obj) // { a: 1, b: 2, 'с': 3 }
    console.log(Object.isFrozen(obj)) // true
}



// Запретите добавление новых свойств к объекту и проверьте это. 
// Попытайтесь добавить новое свойство — убедитесь, что это невозможно.
{
    let obj = {
        a: 1,
        b: 2,
        с: 3
    }
    Object.preventExtensions(obj)
    console.log(Object.isExtensible(obj)) // false
    obj[`d`] = 4
    console.log(obj) // { a: 1, b: 2, 'с': 3 }
}



// Запечатайте объект так, чтобы нельзя было добавлять или удалять свойства, 
// но можно было изменять существующие. 
// Проверьте его состояние и попробуйте удалить или добавить свойства — убедитесь в результате.
{
    let obj = {
        a: 1,
        b: 2,
        с: 3
    }
    Object.seal(obj)
    console.log(Object.isSealed(obj)) // true
    obj.a = 10
    obj[`d`] = 4
    console.log(obj) // { a: 10, b: 2, 'с': 3 }
}



// Создайте объект и добавьте или измените одно из его свойств с помощью специальных настроек (дескрипторов). 
// Затем получите описание этого свойства и выведите его параметры.
{
    let obj = {
        a: 1,
        b: 2,
        с: 3
    }
    Object.defineProperty(obj, `a`, {
        value: 11,
        writable: false,
        enumerable: true,
        configurable: true
    })
    console.log(obj.a) // 11
    console.log(Object.getOwnPropertyDescriptor(obj, `a`))
    // { value: 11, writable: false, enumerable: true, configurable: true }
}



// Создайте прототипный объект со своими методами или свойствами. 
// Создайте новый объект на основе этого прототипа,  
// проверьте его прототипные связи через соответствующие проверки (два способа).
{
    let obj1 = {
        a: 1,
        b: 2,
        с: 3,
        consolloger: function (data) {
            console.log(data)
        }
    }
    let obj2 = Object.create(obj1)
    console.log(Object.getPrototypeOf(obj2))
    // { a: 1, b: 2, 'с': 3, consolloger: [Function: consolloger] }Ï
    console.log(obj1.isPrototypeOf(obj2)) // true

}












