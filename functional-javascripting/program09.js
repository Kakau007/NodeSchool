var slice = Array.prototype.slice

    function logger(namespace) {
      // SOLUTION GOES HERE
      return function() {
        let arr = Array.from(arguments)
        console.log.apply(console, [namespace].concat(arr))
      }
    }

    module.exports = logger