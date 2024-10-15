

function resizeMe() {
    let me = document.getElementById("me");
    let parentDiv = me.parentElement;
    
    let divWidth = parentDiv.offsetWidth;
    let divHeight = parentDiv.offsetHeight;

    let imgWidth = me.naturalWidth;
    let imgHeight = me.naturalHeight;

    let imgAspectRatio = imgWidth / imgHeight;
    let divAspectRatio = divWidth / divHeight;

    if (imgAspectRatio > divAspectRatio) {
        // Image is wider than the container
        me.style.width = divWidth + "px";
        me.style.height = "auto";
    } else {
        me.style.height = divHeight + "px";
        me.style.width = "auto";
    }
}

resizeMe();

window.addEventListener('resize', resizeMe);