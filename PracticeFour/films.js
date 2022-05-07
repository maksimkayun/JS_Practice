class Movie {
    constructor(name) {
        this.name = name;
    }
}

function Contains(arr, name) {
    for (let index = 0; index < arr.length; index++) {
        if (arr[index].name === name) {
            return index + 1;
        }
    }
    return false;
}

function addMovie(arr, name) {
    arr.push(new Movie(name));
}

function joinProducer(arr, name, producer) {
    // TODO: проверка есть ли такой фильм потом добавить к нему продюсера
    let result = Contains(arr, name)
    if (result) {
        let index = result - 1;
        arr[index].producer = producer;
    }
}

function joinDate(arr, name, date) {
    // TODO: проверка есть ли такой фильм потом добавить к нему дату
    let result = Contains(arr, name)
    if (result) {
        let index = result - 1;
        arr[index].date = date;
    }
}

function cutName(str) {
    let arr = str.split(" ");
    arr.splice(0, 1);
    let result = "";
    arr.forEach(e=> {
        result += e + " ";
    })
    return result.trim();
}

function solve(input) {
    let movies = [];
    input.forEach(e => {
        if (e.split(" ")[0] === "addMovie") {
            let name = cutName(e);
            addMovie(movies, name);
        } 
        else if (e.includes("directedBy")) {
            let name = e.split(" directedBy ")[0];
            let producer = e.split(" directedBy ")[1];
            joinProducer(movies, name, producer);
        } 
        else if (e.includes("onDate")) {
            let name = e.split(" onDate ")[0];
            let date = e.split(" onDate ")[1];
            joinDate(movies, name, date);
        }
    });

    movies.forEach(movie=> {
        console.log(JSON.stringify(movie));
    });
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ])