const student = {
  name: 'Ayesha',
  semester: 3,
  subjects: ['HTML5', 'CSS3', 'JavaScript'],
};

const { name, semester, subjects } = student;

const message = `Student ${name} is in semester ${semester} and is learning ${subjects.join(', ')}.`;

const output = document.getElementById('output');
if (output) {
  output.textContent = message;
}

export function getStudentSummary({ name, semester, subjects }) {
  return {
    label: `${name} (Semester ${semester})`,
    subjectCount: subjects.length,
  };
}
