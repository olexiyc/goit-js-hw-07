import { galleryItems } from './gallery-items.js';
// Change code below this line


// 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

const imageContainer = document.querySelector('.gallery');

const elements = galleryItems.map((galleryItems) => 
`<li class="gallery__item"><img class="gallery__image" src= ${galleryItems.preview} alt=${galleryItems.description}></li>`);

console.log(elements)
imageContainer.insertAdjacentHTML('afterbegin', elements);




// 2. Реалізація делегування на ul.gallery і отримання url великого зображення.

const imageContainerContent = document.querySelector('ul.gallery');
console.dir(imageContainerContent);

imageContainerContent.addEventListener('click', (event) => {
    console.log(event.target);

})



// 3. Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.

document.querySelector('ul.gallery').onclick = () => {

	basicLightbox.create(`
		<img width="1400" height="900" src="https://placehold.it/1400x900">
	`).show()

}

// 4. Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.




// 5. Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.





