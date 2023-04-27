import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const imageMarkup = createImageMarkup(galleryItems);

gallery.insertAdjacentHTML("beforeend", imageMarkup);

gallery.addEventListener("click", onPhotoClick);

function createImageMarkup(galleryItems) {
	return galleryItems
		.map(({ preview, description, original }) => {
			return `
			<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img class="gallery__image" 
                    	src="${preview}" 
						data-source="${original}"
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
	console.log(event.target.dataset);
	const instance = basicLightbox.create(`
    <div class="modal">
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
    </div>
`);

	instance.show();
	basicLightbox
		.create(
			`
		<img src="${event.target.dataset.source}">
	`
		)
		.show();
}
