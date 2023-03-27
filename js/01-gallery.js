import { galleryItems } from './gallery-items.js';
// Change code below this line

const ulElements = document.querySelector('ul');
const imageContainer = document.querySelector('.gallery');
const elements = galleryItems.map(({preview, original, description }) => 
 
`<li class="gallery__item">
<a  class="gallery_link" href='${original}'>
<img 
	class="gallery__image" 
	src= '${preview}' 
	data-source='${original}' 
	alt=${description}
/>
</a>	
</li>`
);

imageContainer.insertAdjacentHTML('afterbegin', elements.join(''));
imageContainer.addEventListener('click', onPicclick);

const modalPic = basicLightbox.create(
	`<img width="1280" height="auto" src="">`, {
		onShow: (modalPic) => {
			window.addEventListener('keydown', onEscKeyPress);
		},
		onClose: (modalPic) => {
			window.removeEventListener('keydown', onEscKeyPress);
		},
	}
);

function onPicclick(event) {
	event.preventDefault();
	const datasetSource = event.target.dataset.source;
	if(!datasetSource) return;
	modalPic.element().querySelector('img').src = datasetSource;
	modalPic.show();
};

function onEscKeyPress(event){
	if(event.code !== 'Escape') return;
	modalPic.close();
};