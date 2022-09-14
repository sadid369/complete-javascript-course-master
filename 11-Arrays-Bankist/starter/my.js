const objList = [
  {
    name: 'a',
    age: 1,
  },
  {
    name: 'b',
    age: 2,
  },
  {
    name: 'c',
    age: 3,
  },
];
changeObj = function (obj) {
  obj.forEach(element => {
    element.un = `${element.name}${element.age}`;
  });
};
changeObj(objList);
console.log(objList[0].un);
console.log(objList[1].un);
console.log(objList[2].un);
