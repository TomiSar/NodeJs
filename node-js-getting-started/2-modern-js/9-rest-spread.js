const [first, ...restOfItems] = [10, 20, 30, 40]
// console.log(first)
// console.log(restOfItems)

const data = {
    temp1: '001',
    temp2: '002',
    firstName: 'John',
    lastName: 'Doe',
};

const { temp1, temp2, ...person } = data;
console.log(temp1);
console.log(temp2);
console.log(person);
// console.log(person.firstName);
// console.log(person.lastName);

const newWarray = [...restOfItems];
console.log(restOfItems);

//copy object
const newObject = {
    ...person,
}
console.log(newObject.firstName);
console.log(newObject.lastName);