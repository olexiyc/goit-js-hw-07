import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imageContainer = document.querySelector('.gallery');

const elements = galleryItems.map(({preview, original, description }) => 
 
`<li class="gallery__item">
<a  class="gallery_link" href='${original}'>
<img 
	class="gallery__image" 
	src= '${preview}' 
	data-source='${original}' 
	alt='${description}'
/>
</a>	
</li>`
);

imageContainer.insertAdjacentHTML('afterbegin', elements.join(''));

const lightbox = new SimpleLightbox ('.gallery a',
{
    captionsData: 'alt',
    cationDelay: 250,
});