import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
const imageMarkup = createImageMarkup(galleryItems);

gallery.insertAdjacentHTML("beforeend", imageMarkup);
gallery.addEventListener("click", onPhotoClick);

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250
});

function createImageMarkup(galleryItems) {
	return galleryItems
		.map(({ preview, description, original }) => {
			return `
			<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img class="gallery__image" 
                    	src="${preview}" 
                    	alt="${description}"
					/>
                </a>
            </li>`;
		})
		.join("");
}

function onPhotoClick(event) {
	event.preventDefault();
	if (event.target.nodeName !== "IMG") {
		return;
	}
}


