const container = document.createElement('div');
container.classList.add('container');
function generateCard(Name, Age) {

    const card = document.createElement('div');
    card.classList.add('card');

    const name = document.createElement('span');
    name.innerText = `name : ${Name}`;

    const age = document.createElement('span');
    age.innerText = `age : ${Age}`;

    card.appendChild(name);
    card.appendChild(age);

    return card;
}



container.appendChild(generateCard('mammad', 32));

document.body.appendChild(container);