function sortAndCount( n, arr ) {
    let sorted = arr.sort( (a,b) => a - b);
    let pairs = 0;

    for (let i = 0; i < n - 1; i++) {
        if ( sorted[i] === sorted[i + 1]) {
            pairs++;
            i += 1;
        }
    }

    return pairs;
}