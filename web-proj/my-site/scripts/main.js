let myImage = document.querySelector('img');
myImage.onclick=function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/manhatten.jpg'){
        myImage.setAttribute('src', 'images/japan.jpg')
    } else{
        myImage.setAttribute('src', 'images/manhatten.jpg')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName){
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent ='mozilla ' +myName;
    }
}

if (!localStorage.getItem('name')){
    setUserName();
}else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozzilla ' + storedName;
}
myButton.onclick= function(){
    setUserName();
}
