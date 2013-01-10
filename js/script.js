document.body.classList.remove('site-left-aligned');
var tmp = setInterval(function(){
    if(document.getElementById('watch7-video-container').style.backgroundColor == 'rgb(0, 0, 0)')document.body.classList.add('black-video-background');
    if(document.getElementById('watch7-player').classList.contains('player-root'))clearInterval(tmp);
},1000);
