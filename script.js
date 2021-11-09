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

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  var textWrapper = document.querySelector('.ml4');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml4 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml4',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  var textWrapper = document.querySelector('.ml5');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml5 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml5',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  
//Billeder
window.addEventListener('scroll',onScroll);

var scroll = window.requestAnimationFrame ||
    function(callback) {window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.scroll');
function loop() {
  elementsToShow.forEach(function(element){
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });
  scroll(loop);
}
loop();
function isElementInViewport(el) {
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0
        && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
      }
      




