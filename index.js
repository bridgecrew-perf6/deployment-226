const form = document.querySelector('form')
const p = document.querySelector('p')

function handleSubmit(evt) {
	evt.preventDefault();
	// console.log('form submit');
	form.style.display='none'
    p.style.display='block'
}

form.addEventListener('submit', handleSubmit);
p.style.display='none'