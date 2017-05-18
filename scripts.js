(function() {
	console.log('in scripts.js');
	init();
})();

function init() {
	console.log('in init()');
	createHeader();
	createContent();
}

function createHeader() {
	const template =
	`Header`;

	document.getElementById('header').innerHTML = template;
}

function createContent() {
	const prices = [
	{
		label: 'car',
		price: '$123.45'
	},
	{
		label: 'fish',
		price: '$223.45'
	},
	{
		label: 'chicken',
		price: '$323.45'
	}];

	const template = 
		`<ul>
		${prices.map( item => 
			`<li><div class="label">${item.label}</div>
			<div class="price">${item.price}</div></li>` ).join('')}
		</ul>`;

	document.getElementById('content').innerHTML = template;
}