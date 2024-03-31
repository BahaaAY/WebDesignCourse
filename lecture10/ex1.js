let grade = 90;

switch (true) {
    case (grade >= 100):
        console.log("Invalid grade");
        break;
    case (grade >= 90):
        console.log("A");
        break;
    case (grade >= 80):
        console.log("B");
        break;
    case (grade >= 70):
        console.log("C");
        break;
    case (grade >= 60):
        console.log("D");
        break;
    default:
        console.log("F");
}

gradeLetter = (grade > 100) ? "Invalid grade" : (grade >= 90) ? "A" : (grade >= 80) ? "B" : (grade >= 70) ? "C" : (grade >= 60) ? "D" : "F";

console.log(gradeLetter); 

let names = ['sd s', 'dsds'];
names.f