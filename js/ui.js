$(document).ready(function(){
	$("nav li").click(function(){
        $("nav li").removeClass("on");
        $(this).addClass("on");
    });
});

