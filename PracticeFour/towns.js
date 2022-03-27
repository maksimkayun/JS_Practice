class Town {
    name
    latitude
    longitude
    constructor(info) {
        this.name = info.split(' | ')[0]
        this.latitude = parseFloat(info.split(' | ')[1]).toFixed(2)
        this.longitude = parseFloat(info.split(' | ')[2]).toFixed(2)
    }

    getInfo() {
        console.log(`{ town: '${this.name}', latitude: '${this.latitude}', longitude: '${this.longitude}' }`)
    }
}

function solve(arr) {
    let towns = []
    arr.forEach(t => {
        towns.push(new Town(t))
        towns[towns.length - 1].getInfo()
    });
}

solve(['Moscow | 55.7522 | 37.6156',
'Beijing | 39.913818 | 116.363625'])