function uniqueInOrder(it){
    var result = [];
    var last = '';
    
    for(var i = 0; i < it.length; i++){
      if(it[i] !== last){
        last = it[i]
        result.push(last);
      }
    }
    return result;
  }