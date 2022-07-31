var hiddenHand = document.querySelector('#hiddenHand');
var handButton = document.querySelector('#handButton');
var body = document.getElementsByTagName('body');
var audio = document.querySelector('#audio');
var audiotest = document.querySelector('#sound');
function playAudio() {
    var audio = document.querySelector('#audio');
    console.log('hello');
    audio.play();
}

var id=null;
function moveHand() {
    var hiddenHand = document.querySelector('#hiddenHand');
    hiddenHand.setAttribute('style', 'visibility: visible;');
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 6);
    function frame() {
        if (pos == 275) {
            clearInterval(id);
            playAudio();
            var flash = document.querySelector('.flash');
            flash.setAttribute('style', 'visibility: visible;');
            flash.setAttribute('style', 'visibility: hidden;');
            window.location.href = "https://apps.apple.com/us/app/daze-cam/id1464359734?itsct=apps_box_link&itscg=30200";
        } else {
            pos++;
            hiddenHand.style.top = pos + 'px';
            
        }
    }
}

handButton.addEventListener('click', moveHand);
