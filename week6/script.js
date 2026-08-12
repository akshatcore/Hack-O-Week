const students = [
  { name: 'Ayesha', score: 92, major: 'Web Development' },
  { name: 'Ravi', score: 84, major: 'UI/UX' },
  { name: 'Priya', score: 77, major: 'Programming' },
  { name: 'Neha', score: 88, major: 'Design' },
];

export const passingStudents = students.filter(student => student.score >= 80);
export const studentNames = students.map(student => student.name);

export function getAverageScore(list) {
  return list.reduce((sum, student) => sum + student.score, 0) / list.length;
}

export function findStudent(name) {
  return students.find(student => student.name === name);
}

export function allPassed(list) {
  return list.every(student => student.score >= 60);
}

export function hasHighScorer(list) {
  return list.some(student => student.score >= 90);
}

const container = document.getElementById('students');
if (container) {
  container.innerHTML = `
    <p>Names: ${studentNames.join(', ')}</p>
    <p>Average score: ${getAverageScore(students).toFixed(1)}</p>
    <p>Passing students: ${passingStudents.length}</p>
    <p>All passed: ${allPassed(students)}</p>
    <p>Has high scorer: ${hasHighScorer(students)}</p>
  `;
}
