function show() {
    let myName = document.getElementById("name").value;
    let myschool = document.getElementById("schoolName").value;
    let mScr = Number(document.getElementById("math").value);
    let sScr = Number(document.getElementById("science").value);
    let eScr = Number(document.getElementById("english").value);

    document.getElementById("name_person").innerHTML = "Welcome, " + myName + " 🎉"
    document.getElementById("school").innerText = myschool;
    document.getElementById("score").innerHTML = "Scores: " + mScr + ", " + sScr + ", " + eScr;

    let total = Number( mScr + sScr + eScr);
    let avg = total / 3

    if (avg >= 95) {
        document.getElementById("grade").innerHTML = "Grade: A+";
    } else if (avg >= 90) {
        document.getElementById("grade").innerHTML = "Grade: A";
    } else if (avg >= 80) {
        document.getElementById("grade").innerHTML = "Grade: B";
    } else{
        document.getElementById("grade").innerHTML = "Grade: C";
    };

    document.getElementById("final").innerHTML = "Total: " + total + "<br>" + "Average: " + avg + "<br>"
}