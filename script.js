 let ul = document.getElementById('bands');

 const bands = [
		'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean',
		'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans',
		'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
	];

	// Function to remove 'a', 'an', and 'the' from the beginning of band names
	function removeArticle(band) {
		return band.replace(/^(a|an|the)\s+/i, '');
	}

	// Sort the bands, ignoring 'a', 'an', and 'the'
	let sortedBands = bands.sort((a, b) => {
		let bandA = removeArticle(a).toLowerCase();
		let bandB = removeArticle(b).toLowerCase();
		if (bandA < bandB) return -1;
		if (bandA > bandB) return 1;
		return 0;
	});

	// Create list items for each band and append them to the unordered list
	sortedBands.forEach((band) => {
		let li = document.createElement('li');
		li.innerText = band;
		ul.append(li);
	});