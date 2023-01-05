function urlWrapper() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    let darkmode = params.darkmode;
    let since = params.since;
    let image_paint = params.image_paint;
    if (darkmode != null) {
        setDarkmode();
        document.getElementById("darkmode-toggle").checked = true;
    }
    if (since != null) {
        sinceDate = FLIRT_DATE;
        document.getElementById("since-text").textContent = "— Flirt Since 28/11/2021 09:26 —";
    } else {
        sinceDate = RELATIONSHIP_DATE;
        document.getElementById("since-text").textContent = "— In Relationship Since 03/02/2022 18:00 —";
    }
    if (image_paint != null) {
        imageIndex = 1;
        document.getElementById("image-polaroid").src = "images/polaroid_paint.png";
    } else {
        imageIndex = 0;
        document.getElementById("image-polaroid").src = "images/polaroid_raw.jpg";
    }
}