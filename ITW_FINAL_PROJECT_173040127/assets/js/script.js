// event pada saat link di klik jalan
$('.page-scroll').on('click', function(e) {

	// ambil isi href jalan
	var href = $(this).attr('href');
	console.log(href);
	// tangkap elemen
	var elemenhref = $(href);

	// pindahkan scroll
	$('html, body').animate({
		scrollTop: elemenhref.offset().top - 50
	}, 1250, 'easeInOutExpo');

	e.preventDefault();


});
