

const regexp1 = /html|css|java(script)?/gi;
const regexp2 = /[тх]оп/gi;

const str1 = "Сначала появился язык Java, затем HTML, потом JavaScript";
const str2 = "Топ хоп";

console.log(str1.match(regexp1)); // "Java", "HTML", "JavaScript"
console.log(str2.match(regexp2)); // "топ", "хоп"









