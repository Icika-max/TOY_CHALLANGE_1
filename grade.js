// grade - funtion that generates students grade
// marks -parameters
//return - student grades depending on the marks they got

function grade (marks){//Grade A
    if (marks>79){
    return "A";
 }
 else if (marks <=79 && marks >=60 )//Grade B
 {
return "B"

 }
 else if (marks<=59 && marks>=50){ //Grade C
    return "C"
 }
 else if (marks<=49 && marks>=40){//Grade D
    return "D"
 }
else{//Grade E (0-39)
    return "E";

}
}
console.log(grade(80));//testing if the function works