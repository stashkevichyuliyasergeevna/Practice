// Напиши рекурсивную функцию, которая возвращает факториал числа n (n!).
// Пример: factorial(5) = 120, факториал 5 — это произведение (1 × 2 × 3 × 4 × 5) = 120.
// Сначала сделай это циклом, затем рекурсией.
{
    function doFactorial(number) {
        let result = 1
        for (let i = 0; i < number; i++) {
            result = result * (i + 1)
        }
        return result
    }
    console.log(doFactorial(5)) // 120
}
{
    function doFactorial(number) {
        if (number <= 1) { return 1 }
        return (
            number * doFactorial(number - 1)
        )
    }
    console.log(doFactorial(5)) // 120
    // 5, 5*doFactorial(4), идем вниз
    // 4, 4*doFactorial(3), идем вниз
    // 3, 3*doFactorial(2), идем вниз
    // 2, 2*doFactorial(1), идем вниз
    // 1, doFactorial(1), number <= 1, выполнено базовое условие, идем вверх
    // 2*doFactorial(1) = 2*1 = 2, идем вверх, возвращаем 2, идем вверх
    // 3*doFactorial(2) = 3*2 = 6, идем вверх, возвращаем 6, идем вверх
    // 4*doFactorial(3) = 4*6 = 24, идем вверх, возвращаем 24, идем вверх
    // 5*doFactorial(4) = 5*24 = 120, выдаем ответ 120
}





