var array = [1, 2, 2, 3, 3, 3, 4];
var freq = {};
array.forEach(function (num) {
    if (!(num in freq)) {
        freq[num] = 1;
    }
    else {
        freq[num] += 1;
    }
});
console.log(freq);
function containsDups(arr) {
    var set = new Set(arr);
    // for (var i = 0; i < arr.length; i++) {



    //     if (!(set.has(arr[i]))) {
    //         set.add(arr[i])
    //     }
    //     else {
    //         return true;
    //     }
    // }
    // return false;

    return set.size !== arr.length
}
console.log(containsDups([1, 2, 3, 4, 5]));
console.log(containsDups([1, 2, 3, 4, 4]));


const removeDups = (arr) => {
    let set = new Set(arr)

  
    //return Array.from(set)
    return [...set]
}

console.log(removeDups([1, 1, 1, 4, 4]))


const mergeObjects = (obj1, obj2) => {
     
    // for(let key of Object.keys(obj1)){
    //     if(!(Object.hasOwn(obj2, key))){
            
    //     }
    // }

    return Object.assign(obj1,obj2)
}

console.log(mergeObjects({ a: 1, b: 2, c: 3 },{ b: 4, c: 5, d: 6 }))

const intersectSets = (set1, set2) => {
    return set1.intersection(set2)
}

console.log(intersectSets(new Set([1, 2, 3, 4]),new Set([3, 4, 5, 6])))

let IsEmptySet = {a:1}

console.log(Object.entries(IsEmptySet).length === 0)

const filterObjects = (obj,thres) => {
    let newObj = {}
    for(let key of Object.keys(obj)) {
        if(obj[key] > thres)  {
            newObj[key] = obj[key]
        }
    }

    return newObj
}

console.log(filterObjects({ a: 1, b: 2, c: 3, d: 4 }), 2)
console.log(filterObjects({ a: 1, b: 2, c: 3, d: 4 }, 2)); // { c: 3, d: 4 }
console.log(filterObjects({ a: 1, b: 2, c: 3, d: 4 }, 2)); // { c: 3, d: 4 }