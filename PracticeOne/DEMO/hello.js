function taskPart(number) {
    console.log("\nIT'S TASK %d", number)
}

console.log('Hello World!')

// Функция, которая получает число и умножает его на 2
taskPart(1)
function multiple(number) {
    return number * 2
}
console.log(multiple(5)) // 10

//==========================//
taskPart(2)
//Напишите функцию, которая получает число и проверяет, является
//ли это отличной оценкой, или нет
function grade(num) {
    if(num>=5) {
        console.log('Excellent')
    } else {
        console.log('Not excellent')
    }
}
grade(5.50)
grade(4.35)

//==========================//
taskPart(3)

/*Создайте функцию, которая получает число N и выводит все числа от N до
1. Используйте цикл while.*/
function solve(N) {
    while(N >= 1) {
        console.log(N--)
    }
}
solve(5)
console.log('')
solve(3)

//==========================//
taskPart(4)

/*Напишите функцию, которая получает число M и число N (M всегда
будет больше N). Выведите все числа от M до N:*/
function solveRange(m,n) {
    for (let index = m; index >= n; index--) {
        console.log(index)        
    }
}

solveRange(6,2)
console.log('')
solveRange(4,1)

//==========================//
taskPart(5)

/*Вам будут даны 3 параметра – имя студента (строка), возраст (число)
и средний балл (число). Ваша задача - вывести всю информацию о
студенте в следующем формате. Оценка должна быть отформатирована до
2х знаков после запятой:
"Name: {student name}, Age: {student age}, Grade: {student grade}".*/
function solveStudent(name, age, grade) {
    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`)
}

solveStudent('John', 21, 4.7854)
solveStudent('Steve', 20, 2.1426)
solveStudent('Marry', 22, 5.00)