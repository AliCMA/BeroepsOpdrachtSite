const mytitle = document.getElementById("mytitle");
const myimage = document.getElementById("myimage");
const myinput = document.getElementById("myinput");

let directionButtons = {
    "noord": document.getElementById('knopNoord'),
    "oost": document.getElementById('knopOost'),
    "zuid":  document.getElementById('knopZuid'),
    "west": document.getElementById('knopWest')
}

let current_index = 0;


let lokaties =[ // array
    { // 0 = object
        "titel":"Scheepvaartsmusuem",
        "image":"img/interactievelogo.jpg",
        
    },
    {  //1 = object 
        "titel":"Location 1",
        "image":"img/1.jpg",
      
    },    
    {
        "titel":"Location 2",
        "image":"img/2.jpg",
        
    },
    {
        "titel":"Location 3",
        "image":"img/3.jpg",
        
    },
    {
        "titel":"Location 4",
        "image":"img/4.jpg",
            
        
    },
    {
        "titel":"Location 5",
        "image":"img/5.jpg",
       
    },
    {
        "titel":"Location 6",
        "image":"img/6.jpg",
        
    },
    {
        "titel":"Location 7",
        "image":"img/7.jpg",
      
    },
    {
        "titel":"Location 8",
        "image":"img/8.jpg",
        
    },
    {
        "titel":"Location 9",
        "image":"img/9.jpg",
    },
    {
        "titel":"Location 10",
        "image":"img/10.jpg",
       
    },
    {
        "titel":"Location 11",
        "image":"img/11.jpg",
       
    }

]



//mytitle.innerHTML = "dit is gevoegd door java";
//myimage.src = "img/1.jpg";

function show(index){
    mytitle.innerHTML = lokaties[index].titel;
    myimage.src = lokaties[index].image;
    current_index = index;

    //knoppen opnieuw berekenen
    updateDirections();
}

function updateDirections(){

    let possible = lokaties[current_index].directions;

    let possible_keys = Object.keys(possible);

    console.log(possible);
    console.log(possible_keys);

    let button_keys = Object.keys(directionButtons);
    console.log(button_keys);

    for(const key of button_keys){
        directionButtons[key].style.visibility = "hidden";
    }

    for(const key of possible_keys){
        directionButtons[key].style.visibility = 'visible';
    }

}

function getinput(){
    show(myinput.value);
    //console.log(myinput.value)
    myinput.value = "";
    myinput.focus();
}

function goDirection(direction){
    let punt_index = lokaties[current_index].directions[direction];
    show(punt_index)
}

show(0)