const students = [
    {id: 21, name: 'Ayan'},
    {id: 31, name: 'Raaj'},
    {id: 41, name: 'Ratul'},
    {id: 71, name: 'Rony'}
];

const names = students.map( s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter( s => s.id>40);
const biggerOne = students.find( s => s.id>40);

console.log(biggerOne);