const myTitle = document.getElementById("myTitle");

const myImage = document.getElementById("myImage");

const myInput = document.getElementById("myInput")



let lokaties =[

{

   "titel":"Locatie 1",

   "image":"img/s-1.jpg"

},

{

   "titel":"Locatie 2",

   "image":"img/2.jpg"

},

{

   "titel":"Locatie 3",

   "image":"img/3.jpg"

},

{

   "titel":"Locatie 4",

   "image":"img/4.jpg"

},

{

   "titel":"Locatie 5",

   "image":"img/5.jpg"

},

{

   "titel":"Locatie 6",

   "image":"img/6.jpg"

},

{

   "titel":"Locatie 7",

   "image":"img/7.jpg"

},

{

   "titel":"Locatie  8",

   "image":"img/8.jpg"

},

{

   "titel":"Locatie 9",

   "image":"img/9.jpg"

},

{

   "titel":"Locatie 10",

   "image":"img/10.jpg"

},

{

   "titel":"Locatie 11",

   "image":"img/11.jpg"

}

]




//myTitle.innerHTML = "dit is door de script toegevoegd";

//myImage.src = "img/1.jpg";




function show(index){

   myTitle.innerHTML = lokaties[index].titel;

   myImage.src = lokaties[index].image;

}




function getinput(){

   show(myInput.value);

   //console.log(myInput.value)

   myInput.value = "";

   myInput.focus();

}