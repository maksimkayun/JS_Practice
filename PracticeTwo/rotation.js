function rotation(arr, count) {
    for (let i = 0; i < count; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            let t = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = t;
        }     
    }
    console.log(arr);
}

rotation([51, 47, 32, 61, 21], 2 );
rotation([32, 21, 61, 1], 4 );
rotation([2, 4, 15, 31], 5);