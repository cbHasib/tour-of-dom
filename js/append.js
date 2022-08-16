const placesList = document.getElementById('places-list');
const li = document.createElement('li');
li.innerText = 'Pahartoli';
placesList.appendChild(li);



const mainContainer = document.getElementById('main-container');
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'biriany';
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText = 'Borhani';
ul.appendChild(li2);
const li3 = document.createElement('li');
li3.innerText = 'Kacchi';
ul.appendChild(li3);
const li4 = document.createElement('li');
li4.innerText = 'Juice';
ul.appendChild(li4);

section.appendChild(ul);

mainContainer.appendChild(section);



//====================================


const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>Dress Section</h1>
<ul>
<li>T-shirt</li>
<li>Lungi</li>
</ul>
`
mainContainer.appendChild(sectionDress);