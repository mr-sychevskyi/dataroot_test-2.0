$(function () {

// POP-UP	
    $('.request__modal').hide();

    $('.btn-pop').on("click", function () {
        $('.request__modal').show(250);
        $('.overlay').css('display', 'flex');
    });

    $('.request__modal-exit').on("click", function () {
        $('.request__modal').hide(250);
        $('.overlay').css('display', 'none');
    });

    
// POP-UP TABS
    $('.request__modal .select-group select:eq(1)').hide();
    
    $('.request__modal .tabs-group #tab2').on("click", function () {
        $('.application-form > .select-group select:eq(0)').hide();
        $('.application-form > .select-group select:eq(1)').show();
    });
    $('.request__modal .tabs-group #tab1').on("click", function () {
        $('.application-form > .select-group select:eq(1)').hide();
        $('.application-form > .select-group select:eq(0)').show();
    });
 
	
 // MENU_HAMBURGER   
    $(".hamburger__icon").click(function () {
        $('.hamburger__content, .overlay-hamburger').slideToggle(400);
        
        if ( $('.hamburger__icon img').attr('src') === 'img/hamburger-1.png' ) {
            $('.hamburger__icon img').attr('src', 'img/hamburger-2.png');
            $('.hamburger__menu').css('margin', '8px 0');
//            $('body').css('overflow', 'hidden');
        } else {
            $('.hamburger__icon img').attr('src', 'img/hamburger-1.png');
            $('.hamburger__menu').css('margin', '12px 0');
            $('body').css('overflow', 'auto');
        }
    });

       
// SELECT_ICON	
//    $(".select-group select").on("click", function () {
//        $('this').toggleClass('select-icon'); 
//    });
	
	
// TABS	
	$('.tabs_item').on("click", function (e) {
		e.preventDefault();
		
		let item = $(this).closest('li'),
			contentItem = $('.offers__list'),
			counter = item.index();
        
		contentItem.eq(counter)
            .addClass('active')
			.siblings()
			.removeClass('active');
        
		$('.tabs_item').removeClass('active');
		$(this).addClass('active');		
    });
	

// SLIDER CONTROLS	
	(function dotsToVisible() {
		for ( i = 0; i < $('.soc-apps__item').length; i++ ) {
			$('.soc-apps__controls').append('<span class="dot"></span>');  
		}
		
		$('.dot:first').addClass('active');	
	}());
	
	
// SLIDER	
	$(`.dot`).on("click", function(e) {
		e.preventDefault();
		
		let contentItem = $('.soc-apps__item'),
			counter = $(this).index();
        
		if ( counter == 0 ) {
			contentItem.css('transform', 'translateX(0px)');	
		} else { 
            contentItem.css('transform', 'translateX(-100%)'); 
        }

		$('.dot').removeClass('active');
		$(this).addClass('active');	
    });
	
});
