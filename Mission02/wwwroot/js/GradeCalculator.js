$('#btnSend').click(function () {
    /*calculate the final score*/
    let iFinalScore;
    let sLetterGrade;

    iFinalScore = $('#assignments').val() * 0.55 + $('#groupproject').val() * 0.05
        + $('#quizzes').val() * 0.1 + $('#exams').val() * 0.2
        + $('#intex').val() * 0.1;

    /*calculate the letter grade*/
    if (iFinalScore >= 94) {
        sLetterGrade = "A"
    }
    else if (iFinalScore >= 90) {
        sLetterGrade = 'A-'
    }
    else if (iFinalScore >= 87) {
        sLetterGrade = 'B+'
    }
    else if (iFinalScore >= 84) {
        sLetterGrade = 'B'
    }
    else if (iFinalScore >= 80) {
        sLetterGrade = 'B-'
    }
    else if (iFinalScore >= 77) {
        sLetterGrade = 'C+'
    }
    else if (iFinalScore >= 74) {
        sLetterGrade = 'C'
    }
    else if (iFinalScore >= 70) {
        sLetterGrade = 'C-'
    }
    else if (iFinalScore >= 67) {
        sLetterGrade = 'D+'
    }
    else if (iFinalScore >= 64) {
        sLetterGrade = 'D'
    }
    else if (iFinalScore >= 60) {
        sLetterGrade = 'D-'
    }
    else {
        sLetterGrade = 'E'
    }
    /*output the results*/
    alert("The final score is: " + iFinalScore + '\n' + "The letter grade is: " + sLetterGrade);
})