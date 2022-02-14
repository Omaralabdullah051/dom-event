// for 2nd ways(common way)
function makeBlueColor() {
    document.body.style.backgroundColor = 'blue';
}
//for 3rd ways
const green = document.getElementById('make-green');
green.onclick = makeGreenColor;
function makeGreenColor() {
    document.body.style.backgroundColor = 'green';
}
//for 4th ways
const yellow = document.getElementById('make-yellow');
yellow.onclick = function () {
    document.body.style.backgroundColor = 'yellow';
}
//for 5th ways
const gray = document.getElementById('make-gray').addEventListener('click', makeGrayColor);
function makeGrayColor() {
    document.body.style.backgroundColor = 'gray';
}
//for 6th ways
const orange = document.getElementById('make-orange').addEventListener('click', function () {
    document.body.style.backgroundColor = 'orange';
})
//for 7th ways(direct shortcut- most common way)
document.getElementById('make-brown').addEventListener('click', function () {
    document.body.style.backgroundColor = 'brown';
})

// for input-field and display input
document.getElementById('submit-button').addEventListener('click', function () {
    const inputField = document.getElementById('name-input');
    const p = document.createElement('p');
    p.innerText = inputField.value;
    inputField.value = '';
    const parent = document.getElementById('input-div');
    parent.appendChild(p);

})

//for comment box and display comment
document.getElementById('post-button').addEventListener('click', function () {
    const commentInput = document.getElementById('comment-area');
    const paragraph = document.createElement('p');
    paragraph.innerText = commentInput.value;
    commentInput.value = '';
    const parentSecond = document.getElementById('comment-div');
    parentSecond.appendChild(paragraph);

})

//for simple delete confirmation button

//click button
document.getElementById('delete-button').addEventListener('click', function () {
    document.getElementById('secrete').style.display = 'none';
})
//focus on input-field
document.getElementById('input-delete').addEventListener('focus', function () {
    document.body.style.backgroundColor = 'lightcoral';
})
//blur
document.getElementById('input-delete').addEventListener('blur', function () {
    document.body.style.backgroundColor = 'white';
})
//keyup and removeAttribute
document.getElementById('input-delete').addEventListener('keyup', function (event) {
    const deleteButton = document.getElementById('delete-button');

    if (event.target.value == 'delete') {
        deleteButton.removeAttribute('disabled');
    }
    else {
        deleteButton.setAttribute('disabled', true);
    }
})
//change for paste text in input
document.getElementById('input-delete').addEventListener('change', function () {
    const textPaste = document.getElementById('input-delete');
    console.log(textPaste.value);
    textPaste.value = '';
})


// event delegate process 
document.getElementById('add-items').addEventListener('click', function () {
    const list = document.createElement('li');
    list.innerText = 'something is better than nothing';
    const parentThird = document.getElementById('item-container');
    parentThird.appendChild(list);
})

document.getElementById('item-container').addEventListener('click', function (event) {
    event.target.parentNode.removeChild(event.target);

})

// another delete confirmation button 
document.getElementById('delete-confirmation-button').addEventListener('click', function () {
    document.getElementById('delete-text').style.display = 'none';
})

document.getElementById('delete-confirmation-input').addEventListener('focus', function () {
    const orangeSection = document.getElementById('orange');
    orangeSection.style.backgroundColor = 'orange';
})
document.getElementById('delete-confirmation-input').addEventListener('blur', function () {
    const orangeSection = document.getElementById('orange');
    orangeSection.style.backgroundColor = 'white';
})
document.getElementById('delete-confirmation-input').addEventListener('keyup', function (event) {
    const deleteConfirmationButton = document.getElementById('delete-confirmation-button');
    if (event.target.value == 'delete') {
        deleteConfirmationButton.removeAttribute('disabled');
    }
    else {
        deleteConfirmationButton.setAttribute('disabled', true);
    }
})
document.getElementById('delete-confirmation-input').addEventListener('change', function () {
    const inputDelete = document.getElementById('delete-confirmation-input');
    console.log(inputDelete.value);
    inputDelete.value = '';
})
