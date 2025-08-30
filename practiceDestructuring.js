// Задача 1
// Дан массив: [10, 20, 30, 40]. Используя деструктуризацию, 
// присвой первые два элемента переменным a и b, а оставшиеся — массиву others. 
// Выведи все три переменные.
{
    const arr = [10, 20, 30, 40]
    const [a, b, ...others] = arr
    console.log(a, b, others) // 10 20 [ 30, 40 ]
}



// Задача 2
// Дан объект: { name: 'Alice', age: 25, city: 'Moscow' }. 
// Создай переменные name, age и city через деструктуризацию. 
// Затем переименуй city в location. Выведи все переменные.
{
    const obj = { name: 'Alice', age: 25, city: 'Moscow' }
    const { name, age, city: location } = obj
    console.log(name, age, location) // Alice 25 Moscow
}



// Задача 3
// Дан массив: [1, [2, 3], 4]. Распакуй его так, чтобы получить переменную first, 
// вложенный массив [2,3] — в переменную nested, и число 4 — в last.
{
    const arr = [1, [2, 3], 4]
    const [first, nested, last] = arr
    console.log(first, nested, last) // 1 [ 2, 3 ] 4
}



// Задача 4
// Напиши функцию getUserInfo, которая принимает объект с свойствами { name, age }. 
// Используй деструктуризацию параметров функции для получения этих свойств. 
// Функция должна возвращать строку: "User Alice is 25 years old".
{
    const obj = {
        name: `Alice`,
        age: 25
    }
    function getUserInfo({ name, age }) {
        return `User ${name} is ${age} years old`
    }
    console.log(getUserInfo(obj)) // User Alice is 25 years old
}



// Задача 5
// Дано: { a: 5 }. Используя деструктуризацию с значениями по умолчанию, 
// извлеки свойства a и b, где b должно иметь значение по умолчанию — 'default'.
{
    const obj = { a: 5 }
    const { a, b = 'default' } = obj
    console.log(a, b) // 5 default
}



// Задача 6
// Объяви переменные x и y, присвоив им значения из массива [7, 8] с помощью деструктуризации вне объявления. 
// Затем сделай то же самое для объекта { p: 'hello', q: 'world' }, присвоив свойства в переменные с теми же именами.
{
    const arr = [7, 8]
    const obj = { p: 'hello', q: 'world' }
    let x, y
    [x, y] = arr
    let p, q
    ({ p, q } = obj)
    console.log(x, y, p, q) // 7 8 hello world
}



// Задача 7
// Дан массив объектов
// Распакуй первый элемент массива так, чтобы получить переменную userName1 — имя первого пользователя, 
// а второй — в переменную userName2.
{
    const users = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' }
    ];
    const [{ name: userName1 }, { name: userName2 }] = users
    console.log(userName1, userName2) // John Jane
}



// Задача 8
// Дана строка 'red,green,blue'. 
// Раздели её на массив из трёх элементов с помощью метода .split(), 
// а затем распакуй эти элементы в три переменные: color1, color2, color3.
{
    const str = 'red,green,blue'
    const words = str.split(`,`)
    const [color1, color2, color3] = words
    console.log(color1, color2, color3) // red green blue
}



// Задача 9
// Объяви объект.
// Используя деструктуризацию с переименованием свойств и значениями по умолчанию, извлеки свойства:
// ширину в переменную w
// высоту в переменную h
// цвет в переменную c,
// свойство borderWidth со значением по умолчанию — 5
// Выведи все полученные переменные.
{
    const options = {
        width: 1024,
        height: 768,
        color: 'black',
    };
    const { width: w = 5, height: h = 10, color: c = 15, borderWidth = 5 } = options
    console.log(w, h, c, borderWidth) // 1024 768 black 5
}



// Задача 10
// Используя деструктуризацию внутри функции (параметры), напиши функцию
// Которая выводит строку "Name: <name>, Age: <age>". Вызови функцию с объектом { name: 'Bob', age: 30 }.
{
    function display({ name, age }) {
        console.log(`Name: ${name}, Age: ${age}`)
    }
    display({ name: 'Bob', age: 30 })
}



// Тренировка максимального уровня сложности

// Задача 1: Глубокая деструктуризация с переименованием и значениями по умолчанию
// Дано объект.
// Задача:
// Используя деструктуризацию, извлечь из этого объекта:
// id в переменную userId
// name в переменную userName
// email в переменную contactEmail (по умолчанию 'noemail@example.com')
// phone в переменную contactPhone (по умолчанию 'N/A')
// theme в переменную currentTheme (по умолчанию 'light')
// notificationsEmail и notificationsSms — из вложенного объекта, с значениями по умолчанию false.
// Вывести все полученные переменные.
{
    const data = {
        user: {
            id: 123,
            profile: {
                name: 'Alice',
                contacts: {
                    email: 'alice@example.com',
                    phone: '+123456789'
                }
            }
        },
        settings: {
            theme: 'dark',
            notifications: {
                email: true,
                sms: false
            }
        }
    };
    const {
        user: {
            id: userId,
            profile: {
                name: userName,
                contacts: {
                    email: contactEmail = 'noemail@example.com',
                    phone: contactPhone = 'N/A'
                }
            }
        },
        settings: {
            theme: currentTheme = 'light',
            notifications: {
                email: notificationsEmail = false,
                sms: notificationsSms = false
            }
        }

    } = data
    console.log(userId, userName, contactEmail, contactPhone, currentTheme, notificationsEmail, notificationsSms)
    // 123 Alice alice@example.com +123456789 dark true false
}



// Задача 2: Множественная деструктуризация с массивами и объектами
// Дано массив.
// Задача:
// Извлечь для первого пользователя (users[0]) из массива:
// его id в переменную firstUserId
// его имя в переменную firstUserName
// его роли в отдельные переменные role1, role2, где присвоить роли по порядку (если ролей меньше — оставить значение по умолчанию 'none')
// Также извлечь из второго пользователя (users[1]) только имя и роль (name, первая роль), присвоить их в переменные.
{
    const users = [
        { id: 1, name: 'John', roles: ['admin', 'user'] },
        { id: 2, name: 'Jane', roles: ['user'] },
        { id: 3, name: 'Mike', roles: ['guest', 'user'] }
    ];
    const [
        {
            id: firstUserId,
            name: firstUserName,
            roles: [role1 = 'none', role2 = 'none']
        },
        {
            name: secondUserName,
            roles: [role3]
        }
    ] = users
    console.log(firstUserId, firstUserName, role1, role2,) // 1 John admin user
    console.log(secondUserName, role3) // 2 Jane
}



// Задача 3: Деструктуризация с вложенными массивами и объектами внутри функции
// Напиши функцию, которая принимает аргумент — сложный объект следующего вида (дано)
// Задача:
// Используя деструктуризацию внутри параметров функции, извлечь:
// host в переменную serverHost
// первый порт в переменную httpPort, второй порт — в httpsPort, по умолчанию — 8080 и 8443 соответственно, если не указаны.
// имя пользователя базы данных — в dbUser
// первый элемент массива features — в mainFeature, если он есть, иначе 'none'.
// Функцию вызвать с этим объектом и вывести полученные переменные.
{
    const config = {
        server: {
            host: 'localhost',
            ports: [80, 443]
        },
        database: {
            user: 'admin',
            password: 'pass'
        },
        features: ['auth', 'logging']
    };

    function hello({
        server: {
            host: serverHost,
            ports: [httpPort = 8080, httpsPort = 8443]
        },
        database: {
            user: dbUser
        },
        features: [mainFeature = 'none']
    }) {
        console.log(serverHost, httpPort, httpsPort, dbUser, mainFeature)
    };

    hello(config) // localhost 80 443 admin auth
}



// Задача 4: Глубокая деструктуризация с переименованием и значениями по умолчанию
// Дано объект
// Задача:
// Извлечь:
// статус код(statusCode) — оставить как есть.
// тип контента(contentType) — переименовать в type.Значение по умолчанию 'text/plain'.
// количество пользователей(usersCount) — присвоить переменной с именем count, значение по умолчанию —0.
// имена пользователей из массива(usersList) — собрать их в массив строковых имен(['Alice', 'Bob']).
// Вывести все полученные переменные.
{
    const response = {
        statusCode: 200,
        headers: {
            contentType: 'application/json',
            cacheControl: 'no-cache'
        },
        data: {
            usersCount: null,
            usersList: [
                { id: 1, name: 'Alice' },
                { id: 2, name: 'Bob' }
            ]
        }
    };
    const { statusCode,
        headers: {
            contentType: type = 'text/plain'
        },
        data: {
            usersCount: count = -0,
            usersList
        }
    } = response
    const arr = usersList.map((value) => {
        return value.name
    })
    console.log(type, count, arr) // application/json null [ 'Alice', 'Bob' ]
}


// Задача 5: Множественная деструктуризация с комбинированием массивов и объектов
// Дано объект.
// Задача:
// Извлечь:
// название отчёта(title) — в переменную reportTitle.
// дату(date) — оставить как есть.
// сумму первого показателя продаж(sales[0]) — в переменную firstSale.
// сумму последнего расхода(expenses[expenses.length - 1]) — в переменную lastExpense.
// итоговую прибыль summary через метод (profit.reduce(...)) — вычислить сумму всех элементов массива и сохранить как число в переменную totalProfit.
// Вывести все полученные значения.
{
    const report = {
        title: 'Monthly Report',
        date: '2023-10-01',
        metrics: {
            sales: [1000, 2000, 1500],
            expenses: [500, 700, 600],
            profit: [500, 1300, 900]
        },
        summary: {
            totalSales: '$4500',
            totalExpenses: '$1800'
        }
    };
    const {
        title: reportTitle,
        date,
        metrics: {
            sales: [firstSale],
            expenses: [, , lastExpense],
            profit
        },
    } = report
    const totalProfit = profit.reduce((acc, value) => {
        return acc + value
    })
    console.log(reportTitle, date, firstSale, lastExpense, totalProfit) // Monthly Report 2023-10-01 1000 600 2700
}

