
let ul = document.getElementById('band');

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

let sortedString = bands.sort((a,b)=> a-b);

sortedString.forEach((items) => {
	let li = document.createElement('li');
	li.innerText = `${items}`;
	ul.append(li);
})


