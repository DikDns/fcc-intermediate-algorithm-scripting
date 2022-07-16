const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly

  this.getFullName = function() {
    return firstAndLast;
  };

  this.getFirstName = function() {
    return firstAndLast.split(" ")[0];
  };
  
  this.getLastName = function() {
    return firstAndLast.split(" ")[1];
  };

  this.setFullName = function(name) {
    firstAndLast = name;
  }
  
  this.setFirstName = function(firstName) {
    firstAndLast = firstAndLast.split(" ");
    firstAndLast.shift();
    firstAndLast.unshift(firstName);
    firstAndLast = firstAndLast.join(" ");
  }

  this.setLastName = function(lastName) {
    firstAndLast = firstAndLast.split(" ");
    firstAndLast.pop();
    firstAndLast.push(lastName);
    firstAndLast = firstAndLast.join(" ");
  }

  return firstAndLast;
};

const bob = new Person('Bob Ross');

bob.setFirstName("Haskell")
bob.setLastName("Curry")

console.log(bob.getFullName());
