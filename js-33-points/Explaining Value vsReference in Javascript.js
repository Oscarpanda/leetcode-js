function changeAgeAndReference(person) {
  person.age = 25;
  person = {
      name: 'John',
      age: 50
  };
  
  return person;
}
var personObj1 = {
  name: 'Alex',
  age: 30
};
var personObj2 = changeAgeAndReference(personObj1);
console.log(JSON.stringify(personObj1)); // -> ?
console.log(JSON.stringify(personObj2)); // -> ?

a = [1,2];
a.forEach(element => {
  element = 1;
});
console.log(a)