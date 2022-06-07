"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
faker_1.faker.locale = 'pt_BR';
let records = [];
for (let i = 0; i < 100; i++) {
    const birth = faker_1.faker.date.birthdate({ min: 1910, max: 2006, mode: 'year' });
    // const birth = faker.date.birthdate({ min: 1910, max: 2006, mode: 'year' })
    const customer = {
        name: faker_1.faker.name.findName(),
        birthday: birth,
        genre: faker_1.faker.name.gender(),
        lastPurchaseDate: faker_1.faker.datatype.datetime({ min: birth.getTime(), max: new Date().getTime() }),
        countPurchase: faker_1.faker.finance.amount(1, 100, 0)
    };
    records.push(customer);
}
//1
function checkNames(character) {
    return records.filter(customer => customer.name.charAt(0).toUpperCase() == character.toUpperCase());
}
// console.log(checkNames("A")); //Digite o character desejado.
//2
function listNames() {
    return records.map(customer => "Cliente: " + customer.name.toUpperCase().replace(/ /g, "_"));
}
//console.log(listNames()); // Lista todos os clientes no padrão:"Cliente: NOME_DO_CLIENTE"
//3
function listNIndex() {
    return records.map(customer => "Cliente " + records.indexOf(customer) + ": " + customer.name.toUpperCase().replace(/ /g, "_"));
}
//console.log(listNIndex());
//4
function inicialPersson(character) {
    return (records.filter(customer => { return customer.name.charAt(0).toUpperCase() == character.toUpperCase(); }).length);
}
// console.log(inicialPersson("A")); //Digite o character desejado.
//5
function names() {
    return records.map(customer => customer.name);
}
// console.log(names());
//6
function listFirstNames() {
    return records.map(customer => customer.name.split(" ")[0]);
}
// console.log(listFirstNames());
//7
function listFirstNamesLetter(character) {
    const names = records.map(customer => customer.name.toUpperCase().split(" ")[0]);
    return names.filter(names => names[0] == character.toLocaleUpperCase());
}
// console.log(listFirstNamesLetter("A")); //Digite o character desejado.
//8
function customersOverEighteen() {
    const eighteen = new Date().getFullYear() - 18;
    return records.filter(customer => customer.birthday.getTime() - new Date().setFullYear(eighteen));
}
// console.log(customersOverEighteen());
//9 
function enterName(name) {
    return records.filter(customer => customer.name.toUpperCase() == name.toUpperCase());
}
// console.log(enterName(faker.name.findName())); //Digite o nome desejado.
//10
function salesAmount() {
    return records.map(customer => parseInt(customer.countPurchase)).reduce((prev, curr) => prev + curr, 0);
}
// console.log(salesAmount())
//11
function notBuy() {
    const lastYear = new Date().getFullYear() - 1;
    return records.filter(customer => customer.lastPurchaseDate.getTime() - new Date().setFullYear(lastYear));
}
// console.log(notBuy());
//12
function fifteen() {
    return records.filter(customer => parseInt(customer.countPurchase) > 15);
}
console.log(fifteen());
//13
function first(cliente) {
    records.unshift(cliente);
    return records;
}
// const birth = faker.date.birthdate({ min: 1910, max: 2006, mode: 'year' });
// console.log(first({ 
//   name: faker.name.findName(),
//   birthday: birth,
//   genre: faker.name.gender(),
//   lastPurchaseDate: faker.datatype.datetime({ min: birth.getTime(), max: new Date().getTime() }),
//   countPurchase: faker.finance.amount(1, 100, 0)
//  }));
