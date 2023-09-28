class Student {
  constructor(name) {
    this.name = name;
    this.subjects = [];
  } // constructor

  addSubject(subjectName, score) {
    const subject = { name: subjectName, score: score };
    this.subjects.push(subject);
  } // addSubject

} // Student

document.addEventListener('DOMContentLoaded', () => {
  const studentNameInput = document.getElementById('student-name')
  const addStudentButton = document.getElementById('add-student')
  const studentList = document.getElementById('students-list')
  
  let students = []

  addStudentButton.addEventListener('click', () => {
    const studentName = studentNameInput.value;
    const student = new Student(studentName);
    students.push(student);
    studentNameInput.value = '';
    displayStudent();
  })

  function displayStudent() {
    studentList.innerHTML = ''
    students.forEach((student, index) => {
      const listItem = document.createElement('section')
      const listSubject = document.createElement('section')
      listItem.innerHTML = `<p style="color: purple;">${student.name}</p>
        <button id="add-subject-${index}">Add Subject</button>
        <section id="subjects-${index}"></section>
      `
      studentList.append(listItem)
      displaySubject(index)

      const addSubjectButton = document.getElementById(`add-subject-${index}`)
      const subjectsSection = document.getElementById(`subjects-${index}`);

      addSubjectButton.addEventListener('click', () => {
        let subjectName = prompt('Enter subject name: ')
        let subjectScore = prompt('Enter score: ')

        student.addSubject(subjectName, subjectScore)
        console.log(student.subjects)

        displaySubject(index);
      }) // addSubjectButton
    })
  } // displayStudent

  function displaySubject(index) {
    const student = students[index];
    const subjectsSection = document.getElementById(`subjects-${index}`);
    subjectsSection.innerHTML = `<p>Subjects:</p>`

    student.subjects.forEach((subject) => {
      const subjectInfo = document.createElement('p');
      subjectInfo.textContent = `${subject.name}: ${subject.score}`;
      subjectsSection.append(subjectInfo);
    })
  } // Subject
})