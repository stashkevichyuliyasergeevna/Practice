// Напиши функцию, которая принимает строку и возвращает её копию, 
// если в ней есть слово "привет". Иначе — возвращает null.
function myTrain(str) {
    return str.includes("привет") ? str : null
}


// Создай функцию, которая принимает строку и возвращает количество символов в ней, кроме пробелов.
function myTrain2(str) {
    let strArray = str.split(' ')
    let noSpaceStr = ''

    for (let i = 0; i < strArray.length; i++) {
        noSpaceStr += strArray[i]
    }

    let summSymbols = noSpaceStr.length
    return summSymbols
}


// Напиши функцию, которая принимает строку и возвращает новую строку,
// в которой все буквы "а" заменены на "о".
function myTrain3(str) {
    const regexp = /а/g
    let newStr = str.replace(regexp, "о")
    return newStr
}


// Создай функцию, которая принимает строку и возвращает её же, 
// если она начинается с заглавной буквы. Иначе — возвращает null.
function myTrain4(str) {
    let arrayStr = str.split('')
    if (arrayStr[0] == arrayStr[0].toUpperCase()) {
        return str
    } else {
        return null
    }
}


// Напиши функцию, которая принимает строку и возвращает её копию 
// с добавлением в конец строки слова "конец".
function myTrain5(str) {
    return str.concat(" конец")
}


// Создай функцию, которая принимает строку и возвращает её же, 
// если длина строки больше 5 символов. Иначе — возвращает null.
function myTrain6(str) {
    return str.length >= 5 ? str : null
}


// Напиши функцию, которая принимает строку и возвращает новую строку, 
// в которой все строчные буквы заменены на заглавные.
function myTrain7(str) {
    return str.toUpperCase()
}


// Создай функцию, которая принимает строку и возвращает её же 
// с удалёнными первыми тремя символами.
function myTrain8(str) {
    return str.slice(3)
}


// Напиши функцию, которая принимает строку и возвращает её же в обратном порядке.
function myTrain9(str) {
    let arrStr = str.split('')
    let newStr = ''
    console.log(arrStr.length)
    for (let i = arrStr.length - 1; i >= 0; i--) {
        console.log(`индекс ${arrStr[i]}`)
        newStr += arrStr[i]
    }
    return newStr
}


//Создай функцию, которая принимает две строки и возвращает true, 
// если они одинаковы по содержанию (без учёта регистра), иначе — false.
function myTrain10(str1, str2) {
    let srav = str1.localeCompare(str2)
    return srav == 0 ? true : false
}