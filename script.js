//your JS code here. If required.

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

let ul = document.querySelector('ul');

bands.sort((a,b) => a-b);
for(let t of bands){
	let li = document.createElement('li');
	li.innerText = t;
	ul.append(li)
}



