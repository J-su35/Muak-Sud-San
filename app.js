
var total = 0;
var Gryf = 0;
var Huff = 0;
var Rave = 0;
var Slyt = 0;

while (total <50) {    
    let name = prompt("What's your name?");

    if (total >=1 && total <=12) {
        var Huff = Huff + 1;
        total = total+1;
        alert(name +" "+ "You are Hufflepuff");
    } else if (total >=13 && total <=24) {
        var Rave = Rave + 1;
        total = total+1;
        alert(name +" "+ "You are Ravenclaw");
    } else if (total >=25 && total <=36) {
        var Gryf = Gryf + 1;
        total = total+1;
        alert(name +" "+ "You are Gryffindor");
    } else if (total >=37 && total <=48){
        var Slyt = Slyt + 1;
        total = total+1;
        alert(name +" "+ "You are Slytherin");
    } else {
        if (Slyt<2) {
            var random_answer = "";
            if(Math.floor(Math.random() * 10) == 1){
                var Gryf = Gryf + 1;
                total = total+1;
                random_answer = "Gryffindor";
                alert(name +" "+ "You are Gryffindor");
            } else if (Math.floor(Math.random() * 10) == 2) {
                random_answer = "Hufflepuff";
                var Huff = Huff + 1;
                total = total+1;
                alert(name +" "+ "You are Hufflepuff");
            } else if (Math.floor(Math.random() * 10) == 3) {
                random_answer = "Ravenclaw";
                var Rave = Rave + 1;
                total = total+1;
                alert(name +" "+ "You are Ravenclaw");
            } else {
                random_answer = "Slytherin";
                var Slyt = Slyt + 1;
                total = total+1;
                alert(name +" "+ "You are Slytherin");
            }
        
            total = Gryf+Huff+Rave+Slyt;

        } else {
            var random_answer = "";
            if(Math.floor(Math.random() * 10) == 1){
                var Gryf = Gryf + 1;
                total = total+1;
                random_answer = "Gryffindor";
                alert(name +" "+ "You are Gryffindor");
            } else if (Math.floor(Math.random() * 10) == 2) {
                random_answer = "Hufflepuff";
                var Huff = Huff + 1;
                total = total+1;
                alert(name +" "+ "You are Hufflepuff");
            } else {
                random_answer = "Ravenclaw";
                var Rave = Rave + 1;
                total = total+1;
                alert(name +" "+ "You are Ravenclaw");
            }
            
            total = Gryf+Huff+Rave+Slyt;
        }
        
    }
}
    // total = Gryf+Huff+Rave+Slyt;
    console.log("member in Gryffindor: " + Gryf);
    console.log("member in Hufflepuff: " + Huff);
    console.log("member in Ravenclaw: " + Rave);
    console.log("member in Slytherin: " + Slyt);
    console.log("Total member: " + total);

   

document.getElementById("group-list").innerHTML = total;
document.getElementById("group1").innerHTML = Gryf;
document.getElementById("group2").innerHTML = Huff;
document.getElementById("group3").innerHTML = Rave;
document.getElementById("group4").innerHTML = Slyt;
