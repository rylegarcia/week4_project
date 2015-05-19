$(function(){

  $('.preview a').on('click',function(e){
  	e.preventDefault();
    var src = $(this).data('src');
    $('img.previewFull').attr('src',src);
  });

 $('a.peeps').on('click', function(e) {
		e.preventDefault();
		var shots = $(this).data('full');
		var img = '<img src="' + shots + '">';
		$('main.full').html(img);
	});


 	$(".drag-it").draggable({scroll: false});

 	$(".resize").resizable();

 	//Don't mind this the thing below, I tried making a reload button
 	// document.location.reload();

}); //End of document ready function 