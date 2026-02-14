// Exercise 3A: Arrays and Basic Methods


const classRoster = ["Alice", "Tom", "Charlie", "Diana", "Evan"];

const rosterAsString = classRoster.toString();
console.log("classRoster as string (toString):", rosterAsString);

console.log("classRoster after toString (unchanged):", classRoster);

classRoster.push("Fiona", "Nancy");
console.log("classRoster after push (Fiona, Nancy):", classRoster);

const removedStudent = classRoster.shift();
console.log("Removed student (shift):", removedStudent);

console.log("Updated classRoster after shift:", classRoster);

console.log("Updated classRoster length:", classRoster.length);


// Exercise 3B: Objects with Nested Structures
// 

const classInfo = {
  className: "ENSF381: Full-Stack Web Development",
  instructor: "Dr. Smith",
  students: classRoster,
  details: {
    semester: "Winter",
    year: 2025
  }
};

classInfo.schedule = ["Monday", "Wednesday", "Friday"];

classInfo.instructor = "Dr. Abdellatif";

console.log("className:", classInfo.className);
console.log("instructor:", classInfo.instructor);
console.log("students:", classInfo.students);

console.log("semester (nested details):", classInfo.details.semester);

console.log("Updated classInfo object:", classInfo);

const { className, students } = classInfo;
console.log("Destructured className:", className);
console.log("Destructured students:", students);

const { semester, year } = classInfo.details;
console.log("Destructured semester:", semester);
console.log("Destructured year:", year);

const [student1, student2, ...remainingStudents] = classRoster;
console.log("student1:", student1);
console.log("student2:", student2);
console.log("remainingStudents:", remainingStudents);
