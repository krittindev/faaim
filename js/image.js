let imageIndex = 0;

function imageToggle(img) {
    if (imageIndex == 0) {
        imageIndex = 1;
        img.src = "images/polaroid_paint.png";
    } else {
        imageIndex = 0;
        img.src = "images/polaroid_raw.jpg";
    }
}