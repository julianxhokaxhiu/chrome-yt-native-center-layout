var blackBgFix = setInterval(function(){
    if(document.getElementById('watch7-video-container').style.backgroundColor == 'rgb(0, 0, 0)')document.body.classList.add('black-video-background');
    if(document.getElementById('watch7-player').classList.contains('player-root'))clearInterval(blackBgFix);
},1000);
var sidebarFix = setInterval(function(){
    if(document.body.classList.contains('sidebar-collapsed')){
        document.body.classList.add('sidebar-expanded');
        document.body.classList.remove('sidebar-collapsed');
    }
},1);
document.body.classList.remove('site-left-aligned');
