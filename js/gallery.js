/*Name this external file gallery.js*/
// Add tabindex dynamically to make images focusable
document.addEventListener("DOMContentLoaded", () => {
    // Add tabindex dynamically to make images focusable
    document.querySelectorAll('.preview').forEach((img) => {
        img.setAttribute('tabindex', '0'); // Makes images focusable
    });
});

function upDate(previewPic) {    

    // Select the element with id "image"
    let imageDiv = document.getElementById("image");

    // Update the background image
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;

    // Update the text content to the alt attribute of the previewPic
    imageDiv.textContent = previewPic.alt;
}

function unDo() {

    // Select the element with id "image"
    let imageDiv = document.getElementById("image");

    // Reset the background image
    imageDiv.style.backgroundImage = "url('')";

    // Reset the text content to the original text
    imageDiv.textContent = "Hover over an image below to display here.";
}

