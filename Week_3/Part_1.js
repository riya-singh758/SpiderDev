function calculateResult() {
    let n = document.getElementById("name").value;

    let s1 = Number(document.getElementById("sub1").value);
    let s2 = Number(document.getElementById("sub2").value);
    let s3 = Number(document.getElementById("sub3").value);
    let s4 = Number(document.getElementById("sub4").value);
    let s5 = Number(document.getElementById("sub5").value);

    let marks = [s1, s2, s3, s4, s5];

    for (let i = 0; i < marks.length; i++) {
        if (marks[i] < 0 || marks[i] > 100) {
            alert("Enter marks between 0 and 100");
            return;
        }
    }

    let total = 0;
    let high = marks[0];
    let low = marks[0];
    let list = "";

    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
        list += "Subject " + (i + 1) + " : " + marks[i] + "<br>";

        if (marks[i] > high)
            high = marks[i];

        if (marks[i] < low)
            low = marks[i];
    }

    let avg = total / 5;
    let per = total / 5;

    let grade = "";
    let rank = "";

    if (per >= 90) {
        grade = "Outstanding";
        rank = "A+";
    } else if (per >= 80) {
        grade = "Excellent";
        rank = "A";
    } else if (per >= 70) {
        grade = "Very Good";
        rank = "B";
    } else if (per >= 50) {
        grade = "Good";
        rank = "C";
    } else {
        grade = "Fail";
        rank = "Fail";
    }

    let day = document.getElementById("day").value;
    let msg = "";

    switch (day) {
        case "Monday": msg = "New week, new opportunities!"; break;
        case "Tuesday": msg = "Keep working hard!"; break;
        case "Wednesday": msg = "Halfway there!"; break;
        case "Thursday": msg = "Stay focused!"; break;
        case "Friday": msg = "Success is near!"; break;
        case "Saturday": msg = "Practice makes perfect!"; break;
        case "Sunday": msg = "Recharge and prepare!"; break;
    }

    document.getElementById("output").innerHTML =
        "<h2>Result</h2>" +
        "<b>Name:</b> " + n +
        "<br><br>" + list +
        "<b>Total:</b> " + total +
        "<br><b>Average:</b> " + avg.toFixed(2) +
        "<br><b>Percentage:</b> " + per.toFixed(2) + "%" +
        "<br><b>Grade:</b> " + grade +
        "<br><b>Rank:</b> " + rank +
        "<br><b>Highest:</b> " + high +
        "<br><b>Lowest:</b> " + low +
        "<br><br><b>Message:</b> " + msg;
}