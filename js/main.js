$(document).ready(function(){


	$(document).on('contextmenu', function(){
		return false;
	});

	$(document).on('mousedown', function(event){
		event.preventDefault();

		console.log(event.which);

		if (event.which == 3) {

			$('.hidden').removeClass('shown');

			if ($(event.target).is('img')) {
				$('.saveimg, .newtabs').addClass('shown');
			} else if ($(event.target).is('a')) {
				$('.newtabs').addClass('shown');
			}
			console.log(event.pageY, event.pageX);

			$('#context').css({
				top: event.pageY,
				left: event.pageX
			});

			$('#context').fadeIn();
			return false;
		}

		$('#context').fadeOut();

		/*switch(event.which){
			case 1:
				console.log("left click");
				break;

			case 2:
				console.log("Middle click");
				break;

			case 3:
				console.log("Right click");
				break;
		}*/

	});


	$('[data-trigger="dropdown"]').on('mouseenter', function(){
		console.log("ok");
		var submenu = $(this).parent().find('.submenu');
		submenu.fadeIn(500);

		$('.profile-menu').on('mouseleave', function(){
			submenu.fadeOut(500);

		});

		console.log("removed");

	});

	$('[href="https://google.com"]').on('click', function(event){
		console.log("Linking...");
		event.preventDefault();

	});


	$('#prepend, #append, #replace').on('click', function(e){

		var el = $(e.currentTarget);
		var action = el.attr('id');
		var content = $('.text').val();


		if (action == "prepend") {
			console.log("prepending...");
			$('#main').prepend(content);
		} else if (action == "append") {
			console.log("appending...");
			$('#main').append(content);
		} else if (action == "replace") {
			console.log("replacing...");
			$('#main').html(content);
		}

		$('.text').val("");

	});













});

