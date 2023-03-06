const colorPicker = document.querySelector('#color-picker');
const superdiv = document.querySelector('.super-div');

const savedColor = localStorage.getItem('selectedColor');
if (savedColor) {
    superdiv.style.backgroundColor = savedColor;
	colorPicker.value = savedColor;
}

colorPicker.addEventListener('input', function() {
	const selectedColor = colorPicker.value;
    superdiv.style.backgroundColor = selectedColor;

    localStorage.setItem('selectedColor', selectedColor);
});



function toggleAccordion(header) {
	// Obtener el cuerpo del acordeón
	const body = header.nextElementSibling;

	// Alternar la clase 'show' en el cuerpo del acordeón
	body.classList.toggle('show');
}
