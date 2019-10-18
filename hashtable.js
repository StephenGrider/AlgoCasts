class HashTable {
  constructor(size) {
    this.data = new Array(size);
    //console.log("length of array", this.data.length);
  }

  //O(1) time
  set(key, value) {
    let entry = [key, value];
    let index = this._hashFunction(key);
    if (!this.data[index]) {
      this.data[index] = entry;
    } else {
      this.data[index].push(entry);
    }

    return this.data[index];
  }

  //(O(1) time usually because no collisions, worse cast O(n)
  get(key) {
    let index = this._hashFunction(key);
    let currentBucket = this.data[index]; //bc mult entries can be in bucket
    if (currentBucket.length) {
      for (let y = 0; y < currentBucket.length; y++) {
        if (y[0] === key) {
          return y[1];
        }
      }
    }
    return undefined; //nothing in the bucket
  }

  //convert given key into array index (integer)
  //very fast O(1)
  _hashFunction(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    //console.log("hash", hash);
    return hash;
  }
}

function hashFunction(key) {
  return key.toString().length % 4;
}

//console.log(hashFunction("student"));

let testing = new HashTable(4);

testing.set("grapes", 789);

//console.log(testing);

console.log(testing.get("grapes"));
