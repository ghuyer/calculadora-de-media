function doingTheMath() {
  let studentName = document.getElementById("studentName").value;
  let gradeOne = document.getElementById("firstGrade").value;
  let gradeTwo = document.getElementById("secondGrade").value;
  let gradeThree = document.getElementById("thirdGrade").value;
  let gradeFour = document.getElementById("fourthGrade").value;

  gradeOne = Number(gradeOne);
  gradeTwo = Number(gradeTwo);
  gradeThree = Number(gradeThree);
  gradeFour = Number(gradeFour);

  let average = 7;
  let math = (((gradeOne + gradeTwo) / 2) + (gradeThree * 2) + gradeFour) / 3;
  let finalGrade = math.toFixed(1);
  let gradeRevealed = document.getElementById("finalMessage");

  let messageOne =
    "Parabéns, " + studentName + "!<br>" + "Você passou! Sua nota final é: " + finalGrade + ". Boas férias!";

  let messageTwo =
    "Sinto muito, " + studentName + ".<br>" + "Você não passou! Sua nota final de " + finalGrade + " ficou abaixo da média. Mais sorte no próximo semestre.";

  if (finalGrade >= average) {
    gradeRevealed.innerHTML = messageOne;
    gradeRevealed.style.opacity = 1;
    document.getElementsByClassName(".result").style.animationPlayState = 'paused';

  } else {
    gradeRevealed.innerHTML = messageTwo;
    gradeRevealed.style.opacity = 1;
    document.getElementsByClassName(".result").style.animationPlayState = 'paused';

  }
}