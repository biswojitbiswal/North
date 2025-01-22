document.getElementById('menuToggle').addEventListener('click', function() {
    const leftMenu = document.getElementById('leftMenu');
    
    leftMenu.classList.toggle("collapse")
});


function adjustPageSize() {
    // console.log(window)
    const screenWidth = window.innerWidth;
    // console.log(screenWidth)

    document.body.style.transform = 'scale(1)';
    document.body.style.transformOrigin = 'top left';

    if (screenWidth >= 992 && screenWidth <= 1600) {
        document.body.style.transform = 'scale(0.9)';
    } else if (screenWidth >= 700 && screenWidth <= 767) {
        document.body.style.transform = 'scale(0.8)';
    } else if (screenWidth >= 600 && screenWidth < 700) {
        document.body.style.transform = 'scale(0.75)';
    } else if (screenWidth <= 600) {
        document.body.style.transform = 'scale(0.5)';
    }
}

window.addEventListener('load', adjustPageSize);
window.addEventListener('resize', adjustPageSize);
