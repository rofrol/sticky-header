

$(window).scroll(function () {
	    $('.shrink').toggleClass('tiny', $(document).scrollTop() > 0 && $(document).scrollTop() < 200);
	        $('.shrink').toggleClass('supertiny', $(document).scrollTop() >= 200);
});
