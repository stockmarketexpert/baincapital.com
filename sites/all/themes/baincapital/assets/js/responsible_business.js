$(document).ready(function () {
            $('#myTabIndustry').tabCollapse();             
        });        
    $(window).on('load resize',function(){
      if($(window).width() >= 768) {
        $('#myTabIndustry').on('shown-tabs.bs.tabcollapse', function(){

            if (!$('#myTabIndustry li').hasClass('active')) {
            $('#myTabIndustry li').first().addClass('active');
            $('#industryTabContent .tab-pane').first().addClass('active in');
            $('#industryTabContent .tab-pane').first().siblings().removeClass('active in');

            //$('#myTabContent #tab2').first().siblings().removeClass('active in');
          }
          var tab = $('#myTabIndustry li.active a').attr("href");
          var activeId = tab.slice(1);
          var divId = document.getElementById(activeId);
          $(divId).siblings().removeClass('active in');
          $(divId).addClass('active in');
            
        });
      }
        //var allContentHeight = $('.allContentWrapper').height();
        //$('.allContentWrap1').css('height' ,allContentHeight );
    });

    $(function() {
         $('#myTabIndustry li:first').addClass('active');
         $('#industryTabContent .tab-pane').first().addClass('active in');
    });
	$('.newsSlider').slick({
    infinite: false,
    slidesToShow: 3,
    //variableWidth: true,
	    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToScroll: 2,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 1
            }
        }
    ]
});		
var windowW = $(window).width();     
$(window).on('load', function(){
    setTimeout(function(){
        $('.eqheightNews').matchHeight();
    },200);
    setTimeout(function(){
        $('.eqheightNewsWrapper').matchHeight();
    },300);


});
$(window).resize(function(){

   if ($(window).width() != windowW) {

        windowW = $(window).width();
        setTimeout(function(){
            $('.eqheightNews').matchHeight();
        },200);
        setTimeout(function(){
            $('.eqheightNewsWrapper').matchHeight();
        },300);
    }
});
/*$(".sideStick").stick_in_parent({
					parent: '.allContentWrap1',
					offset_top: 100
});*/
//SMOOTH SCROLL
/*$(window).load(function() {
	smoothScroll.init({
	    offset: 20
	});
	    
	
});*/