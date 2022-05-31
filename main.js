
console.log(h1.innerText);

document.write(h2 = "my dom app");

var some = document.getElementsByClassName('text');
console.log(some);


console.log(some[1]);


console.log(some[3].innerText);


var elmentP = document.getElementsByClassName('shlomoText')
console.log(elmentP);


function ptintH2() {
    var getName = prompt("in text");
    document.write ( "<h2>" + getName + "</h2>");
}
ptintH2();





function getInputFromUser() {
    var inputType = prompt("enter input");
    document.write ( "<input type=" + inputType + "/> ")
}
getInputFromUser();



function getElemntByTagName() {
var pArray = document.getElementsByTagName("p");

for (var i = 0; i < pArray.length; i++) {
    pArray[i].innerHTML="<span> </span>"
}

}
getElemntByTagName()




function getElemntsAndChangeText(classname, text) {
    var elemntArry = document.getElementsByClassName(classname);
    for (var i = 0; i < elemntArry.length; i++) {
        elemntArry[i].innerText = text;

    }
}
getElemntsAndChangeText()


function getNumberAndColor() {
    var getnumber = prompt("enter number");
    var getcolorr = prompt("enter color");
    for (var i = 0; i < getnumber; i++) {
        document.write("<span" + getcolorr + "</span>")
    }
}
getNumberAndColor();




function getTextAndTagFromUser() {
    var getText = prompt("enter text");
    var getTag = prompt("enter tag");

    document.write("<getTag+" + getText + "/>")


}
getTextAndTagFromUser();



function getNames() {
    var input = document.createElement("input");
    document.append(input);
    var objects = {};
    objects.firstname = prompt("enter name");
    lastname: prompt("enter last name"),
        objects.age = +prompt("Over 18?");
    if (objects.age > 18) {
        document.write("first name:" + objects.firstname + "" + "last name:" + objects.lastname + "" + "age:" + objects.age + "<br/>");
        var input = document.createElement("input");
        document.body.append(input);
    }

}
getNames();


function getOjMovie() {
    var movie = {};
    movie.name = prompt("enter name movie");
    movie.numberwatchs = +prompt("enter number watchs");
    movie.year = prompt("enter year");
    movie.picthres = prompt("enter picthres");
    document.write("<h1>" + movie.name + "</h1>" + "<h6>" + movie.year + "</h6>" + "<img src=" + movie.picthres + "<alt=>")
}
getOjMovie();


function getWorking() {
    var working = {};
    working.firstname = prompt("enter name");
    working.lastname = prompt("enter last name");
    working.email = prompt("enter email");
    working.platoon = prompt("enter platoon");
    document.write("<h1>" + working.firstname + "</h1>" + "<h2>" + working.lastname + "</h2>" + "<h3>" + working.email + "</h3>" + "<h4>" + working.platoon + "</h4>")

}
getWorking();


function getNumbersAndCreateObjects() {
    var numberfromuser = +prompt("enter number");
    for (var i = 0; i < numberfromuser; i++) {
        var bildobj = {};
        bildobj.name = prompt("enter name");
        bildobj.compony = prompt("enter compony");
        bildobj.Severalfloor = prompt("enter Several floors");
        bildobj.Numberofapartmentsonthefloor = prompt("Number of apartments on the floor");

        document.write("<h1>" + " " + bildobj.name + " " + bildobj.compony + " " + bildobj.Severalfloor + " " + bildobj.Numberofapartmentsonthefloor + "</h1>")


    }
}
getNumbersAndCreateObjects();

function createElemnts() {
    var numberfromuser = +prompt("enter number");
    for (var i = 0; i < numberfromuser; i++) {
        var shop = {};
        shop.name = prompt("enter name");
        shop.adress = prompt("enter adress");
        shop.numberDepartments = +prompt("enter Departments");
        shop.numberworking = +prompt("enter number working");
    }

    if (shop.numberworking > 10) {
        document.write("<h1>" + " " + shop.name + " " + shop.adress + " " + shop.numberDepartments + " " + shop.numberworking + "</h1>")
    }
}
createElemnts();


function createElemntsByUser() {
    var numberfromuser = +prompt("enter number");
    var userlist = document.getElementById("userlist")

    for (var i = 0; i < numberfromuser; i++) {

        var working = {};
        working.name = prompt("enter name");
        working.componys = prompt("enter componys");
        working.phone = prompt("enter phone");
        working.mobil = prompt("enter number mobil");
        working.email = prompt("enter email");
        var liElemnt = document.createElement("li");
        liElemnt.innerText = working.name;
        userlist.appendChild(liElemnt);
    }




}
createElemntsByUser();