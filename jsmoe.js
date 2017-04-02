$(document).ready(function()
{var easing=1
var easing_effect='easeOutBounce';var animation_speed=500
var slider_width=$('#content-moe').width();$('#btn-moe').click(function()
{var is_collapsed=$(this).css("margin-left")==slider_width+"px"&&!$(this).is(':animated');var sign=(is_collapsed)?'-':'+';if(!$(this).is(':animated'))
{if(easing)$('.willSlide').animate({"margin-left":sign+'='+slider_width},animation_speed,easing_effect);else $('.willSlide').animate({"margin-left":sign+'='+slider_width},animation_speed);}
(is_collapsed)?$('.willSlide').removeClass('expanded'):$('.willSlide').addClass('expanded');});});