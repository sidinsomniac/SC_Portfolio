const timeRandomizer = (multiplier, delay) => {
    return Math.floor((Math.random() * multiplier) + delay);
};

const addStars = (htmlElement) => {
    for (var i = 0; i < 100; i++) {
        const star = `
    <div class="star" style="animation: twinkle ${timeRandomizer(5, 2)}s linear ${timeRandomizer(5, 2)}s infinite; top:${Math.random() * window.innerHeight}px; left:${Math.random() * window.innerWidth}px;"></div>
    `;
        htmlElement.innerHTML += star;
    }
};

export default addStars;