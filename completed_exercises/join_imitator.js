function join(n) {

    let joined = "";

    for ( let i = 0; i < n.length; i++) {
        joined += n[i]
    }

    console.log(joined)
}

join([1,2,3,4,5,6,7])