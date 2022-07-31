const Student = require( './modul_student');
const Teacher = require('./modul_teacher');

const student1 = new Student('Bryan', '21', 'male', 'hokey');
const teacher1 = new Teacher('Jon', '42', 'male', 'joga', 'mathematics');

console.log(student1);
console.log(teacher1);
