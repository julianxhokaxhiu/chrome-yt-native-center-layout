var parent = null;
var blackBgFix = setInterval(function(){
    if(document.getElementById('player').style.backgroundColor > ''){
        if(document.getElementById('player').style.backgroundColor == 'rgb(0, 0, 0)')document.body.classList.add('black-video-background');
        else if(document.getElementById('player').style.backgroundColor == 'rgb(38, 0, 30)')document.body.classList.add('purple-video-background');
    }
    clearInterval(blackBgFix);
},1000);
var sidebarFix = setInterval(function(){
    if(document.body.classList.contains('sidebar-collapsed')){
        document.body.classList.add('sidebar-expanded');
        document.body.classList.remove('sidebar-collapsed');
    }
},1);
document.body.classList.remove('site-left-aligned');
document.body.classList.remove('flex-width-enabled');
