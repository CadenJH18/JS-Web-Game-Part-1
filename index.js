//bonus add grass
let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)


//newImage
function newImage(src, position, left, bottom) {
    let element = document.createElement('img')
    element.src = src;
    element.style.position = position;
    element.style.left = left;
    element.style.bottom = bottom;
    document.body.append(element);
    element.;
}

//create green character
newImage("assets/green-character.gif", "fixed", "100px", "100px");

//create pine tree
newImage("assets/pine-tree.png", "fixed", "450px", "200px");

//tree
newImage("assets/tree.png", "fixed", "200px", "300px");

//pillar
newImage("assets/pillar.png", "fixed", "350px", "100px");

//crate
newImage("assets/crate.png", "fixed", "150px", "200px");

//well
newImage("assets/well.png", "fixed", "500px", "425px");




//newItem
function newItem(src, position, left, bottom) {
    let element = document.createElement('img')
    element.src = src;
    element.style.position = position;
    element.style.left = left;
    element.style.bottom = bottom;
    document.body.append(element);

    element.addEventListener('dblclick', function(){
        element.remove()
    })
}


//add sword
newItem("assets/sword.png", "fixed", "500px", "405px")


//add shield
newItem("assets/sheild.png", "fixed", "165px", "185px")

//add staff
newItem("assets/staff.png", "fixed", "600px", "100px")