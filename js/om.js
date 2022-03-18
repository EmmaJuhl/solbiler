
  
//Video// 
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;

function onYouTubePlayerAPIReady() {
  player = new YT.Player('ytplayer', {
    height: '360',
    width: '640',
    videoId: 'KyrcWohjfNQ',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  })
}

/* Player kontrolleres af funktioner */
function onPlayerReady(event) {
  console.log("player is ready");
  event.target.pauseVideo();
}

function playItSam(event) {
  console.log("player is ready");
  event.target.playVideo(); // event from player
}

function onPlayerStateChange() {
  console.log("player state change");

  if (event.data == YT.PlayerState.PLAYING && !done) {
    //setTimeout(stopVideo, 6000);
    done = true;
  }
}


/* is element visible? if ok playVideo() */
var elementet = document.getElementById("synlig");

window.addEventListener("scroll", function() {

  if (elFllVsbl(elementet)) {
    console.log("play video");
    player.playVideo(); // with player you can manipulate the video
  } else {
    console.log("pause video")
    player.pauseVideo();
  }
}); // end eventlistener

function elFllVsbl(el) {
  return (el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().bottom < window.innerHeight);
}


const tekst = document.querySelectorAll(".overlag")

let observer = new IntersectionObserver((entries => {
  if(entries[0]['intersectionRatio'] > 0) {
    entries[0].target.classList.add("vis");
    observer.unobserve(entries[0].target);
  }
}, { rootMargin: "0px 0px -70px 0px"}));

tekst.forEach(teks => {
  observer.observe(teks)
});

/* panorama billede --- panellum opsætning */
type=('text/javascript2', {src="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js"}),

pannellum.viewer('panorama', {
  "type": "equirectangular",
  "panorama": "https://pannellum.org/images/alma.jpg"
});


