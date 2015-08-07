window.onscroll = function() { 
	var th = $('#cards')[0].scrollHeight;
	if(scrollY >= 0.9 * th){
		$('audio')[0].pause();

	}	else	{
		$('audio')[0].play();

	}
}