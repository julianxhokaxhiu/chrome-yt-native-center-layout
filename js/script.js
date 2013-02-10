var blackBgFix = setInterval(function(){
    if(document.getElementById('watch7-video-container').style.backgroundColor > ''){
        if(document.getElementById('watch7-video-container').style.backgroundColor == 'rgb(0, 0, 0)')document.body.classList.add('black-video-background');
        else if(document.getElementById('watch7-video-container').style.backgroundColor == 'rgb(38, 0, 30)')document.body.classList.add('purple-video-background');
    }
    if(document.getElementById('watch7-player').classList.contains('player-root'))clearInterval(blackBgFix);
},1000);
var sidebarFix = setInterval(function(){
    if(document.body.classList.contains('sidebar-collapsed')){
        document.body.classList.add('sidebar-expanded');
        document.body.classList.remove('sidebar-collapsed');
    }
},1);
document.body.classList.remove('site-left-aligned');
document.body.classList.remove('flex-width-enabled');
