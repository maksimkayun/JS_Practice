function ageOf(age) {
    if (age >= 0 && age < 151) {
        if (age <= 2) {
            console.log('Младенец')
        } else if (age <= 13) {
            console.log('Ребенок')
        } else if (age <= 19) {
            console.log('Подросток')
        } else if (age <= 65) {
            console.log('Взрослый')
        } else {
            console.log('Пожилой')
        }
    }
}

ageOf(20)
ageOf(1)
ageOf(100)