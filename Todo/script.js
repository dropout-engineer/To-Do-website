
function makeUser(name, age){
    return{
        name,
        age,
    }
}

let user = makeUser("John", 30);
console.log(user)
console.log(user.age)

console.log(user["age"])
console.log(typeof(makeUser))
console.log(typeof(user))

let userdata = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in userdata) {
  // keys
  console.log( key );  // name, age, isAdmin
  // values for the keys
  console.log( userdata[key] ); // John, 30, true
