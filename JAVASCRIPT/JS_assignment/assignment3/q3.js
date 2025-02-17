const studentGradingSystem = (marks, attendance ) => {
  let grade;
  let extraCredit = attendance > 90 && marks < 95 ? 5 : 0;
  let finalMark = marks + extraCredit;
  switch (true) {
    case finalMark < 60:
      grade = "F"
      break;
    case finalMark >= 60 && finalMark < 70:
      grade = "D";
      break;
    case finalMark >= 70 && finalMark < 80:
      grade = "C"
      break;
    case finalMark >= 80 && finalMark < 90:
      grade = "B"
      break;
    case finalMark >= 90:
      grade = "A"
      break;
  }

  return grade;
}

