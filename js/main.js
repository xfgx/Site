var $=jQuery.noConflict();jQuery(function($){
$("#bubble").each(function(){$(".cover").pobubble({color:"#ffffff",ammount:10,min:.1,max:.2,time:60,vertical:true,horizontal:true,style:'circle'});});$("#snow").each(function(){posnow();});$("#star").each(function(){postars($('.cover')[0]).init();});
$(".video").each(function(){$(".stop-button").click(function(){$(".stop-button").toggleClass('fa-play').toggleClass('fa-pause');
var videoBG=document.getElementById("video");if(videoBG.paused)
videoBG.play();else videoBG.pause();});
$(".volume-button").click(function(){$(".volume-button").toggleClass('fa-volume-off').toggleClass('fa-volume-up');$("video").prop('muted',!$("video").prop('muted'));});});});
function refresh(){
var count = Math.floor(Math.random() * videoArray.length);
document.getElementsByTagName('source')[0].src = "videos/" + videoArray[count];video.load();}
var videoArray = ["Big hvh media (no).mp4","[GAP] AMV - DIVA (Ecchi).mp4","];
