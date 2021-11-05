// SVG animation
function transitionHandler(entries, observer) {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.classList.add("transition");
            observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove("transition");
        }
    }
}

const transitionObserver = new IntersectionObserver(transitionHandler, {
    threshold: 0.1,
});

const svgs = document.querySelectorAll("svg");

for (const svg of svgs) {
  transitionObserver.observe(svg);
}

//video
function videoHandler(entries) {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.play();
        } else {
            entry.target.pause();
        }
    }
}

const videoObserver = new IntersectionObserver(videoHandler)
const video1 = document.getElementById("video1");
videoObserver.observe(video1);


//path animation
var textPath = document.querySelector('#text-path');

var textContainer = document.querySelector('#text-container');

var path = document.querySelector(textPath.getAttribute('href'));

var pathLength = path.getTotalLength();

function updateTextPathOffset(offset) {
    textPath.setAttribute('startOffset', offset);
}

updateTextPathOffset(pathLength);

function onScroll() {
    requestAnimationFrame(function () {
        var rect = textContainer.getBoundingClientRect();
        var scrollPercent = rect.y / window.innerHeight;
        updateTextPathOffset(scrollPercent * 1 * pathLength);
    });
}

document.querySelector(".MainContainer").addEventListener('scroll', onScroll);






