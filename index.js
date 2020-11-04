const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, call) {

      for(const item in collection){
          call(collection[item])
      }
      return collection
    },

    map: function(collection, callback) {
      let newCollection = []
      
      for(let item in collection){
        newCollection.push(callback(collection[item]))
      }
      return newCollection 
    },

    reduce: function(collection, callback, acc) {
      let new_col = [...collection]
      let output = acc ? acc : acc = new_col.shift()
      for(let item in new_col){
        output = callback(output,new_col[item],new_col)
      }
      return output
    },

    find: function(arr, callback) {
      let val = undefined
      for (let value in arr) {
        if (callback(arr[value])){
          val = arr[value]
          break
        }
        
      }
      return val
    },

    filter: function(arr, callback) {
      let val = []
      for (let value in arr){
        if (callback(arr[value])){
          val.push(arr[value])
          
        }
      }
      return val
    },

    size: function(collection) {
      let count = 0 
      for (let value in collection){
        count += 1
      }
      return count
    },

    first: function(collection, n) {
      
      let array = collection 
      let answer = undefined

        if (n){
          answer = array.slice(0, n) 
        } else {
          answer = array[0]
        } 
        return answer
    },

    last: function(collection, n) {
      let array = collection
      let answer = undefined
        if (n){
          answer = array.slice(array.length - n, n + 1)
        } else {
          answer = array[array.length - 1]
        }
        console.log(answer)
        return answer
    },

    compact: function(collection) {
      let newCollection = []
      for(let item in collection){
        if (collection[item]){
          newCollection.push(collection[item])
        }
      }
      return newCollection
    },

    sortBy: function(collection) {
        let newCollection = []
        
        for(let item in collection){
          newCollection.push(collection[item])
        }
    
        return newCollection.sort();
    },

    flatten: function(collection) {
        let newCollection = []
          
        for(let item in collection){
          newCollection(...collection[item])
        }
        console.log(newCollection)
        return newCollection 
    },

    uniq: function() {

    },

    keys: function() {

    },

    values: function() {

    },
    functions: function() {

    },


  }
})()

fi.libraryMethod()
