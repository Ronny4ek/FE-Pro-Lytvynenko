function updateStudentWithCustom(student) {
  student["avg"] = avgOfNumbersArray(student.marks);
  student["median"] = getMedianaValue(student.marks);
  return student;
}

function avgOfNumbersArray(numbers) {
  return numbers.reduce((acc, e) => acc + e, 0) / numbers.length;
}

function getMedianaValue(numbers) {
  let median,
    medianRepeats = 0;
  for (let i = 0; i < numbers.length; i++) {
    let repeats = 0;
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] === numbers[j]) {
        repeats++;
        if (repeats > medianRepeats) {
          medianRepeats = repeats;
          median = numbers[i];
        }
      }
    }
  }
  return median;
}

function getUnsuccessfulStudents(students) {
  return students.filter((someMark) => someMark.avg < 50);
}

function main() {
  let list = studentsMock.getStudentList(10);
  list = list.map(updateStudentWithCustom);
  console.log(list);

  if (confirm("Do you want to check the list of less successful students?")) {
    console.log(getUnsuccessfulStudents(list));
  }
  while (confirm("Do you want to add some student to this class?")) {
    list.push(updateStudentWithCustom(studentsMock.getStudent()));
  }

  console.log(list);
  console.log(list.map((e) => `${e.name} | ${e.avg}`).join("\n"));
}

main();
