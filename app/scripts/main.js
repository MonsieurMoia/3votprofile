//Jquery

$( document ).ready(function() {

 	//When an app modal fades in , blur the background
   $('.app-modal').on('show.bs.modal', function (e) {
  		$('.page-3vot').addClass('blur');
	})
   //When an app modal hides, unblur the background
   $('.app-modal').on('hidden.bs.modal', function(e) {
   		$('.page-3vot').removeClass('blur');
   })


   $('.appstore-nav-3vot').on('affix.bs.affix', function (e) {
  		$('.appstore-nav-3vot').addClass('appstore-nav-affix');
  		$('.profile-info-3vot').addClass('appstore-sidebar-affix');
	})

   $('.appstore-nav-3vot').on('affixed-top.bs.affix', function (e) {
  		$('.appstore-nav-3vot').removeClass('appstore-nav-affix');
  		$('.profile-info-3vot').removeClass('appstore-sidebar-affix');
	})


   
 
});