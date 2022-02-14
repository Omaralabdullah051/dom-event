// 2nd system 
function makered() {
    document.body.style.backgroundColor = 'red';
}

//3rd system
//handle blue button click by setting function name
const blueButton = document.getElementById('make-blue-button');
//just set the name of the function
blueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

//4th system
//handle event using anonymous function
const greenButton = document.getElementById('make-green-button');
//anonymous function(it is used for only one time)
greenButton.onclick = function () {
    document.body.style.backgroundColor = 'green';
}

//5th system
//handle event by using add eventlisneter
const goldenButton = document.getElementById('make-goldenrod');
goldenButton.addEventListener('click', makeGoldenRod);
function makeGoldenRod() {
    document.body.style.backgroundColor = 'goldenrod';
}

//6th system
//addEventLisneter
const hotPinkButton = document.getElementById('make-hotpink');
hotPinkButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink';
})

//7th system ( direct shortcut )addEventlisneter
document.getElementById('light-blue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
})