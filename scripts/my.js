var HistItem;
$( document ).ready(function() {

var template = Handlebars.compile( $('#template').html() );
$('.updates').html( template(cards) );
firstPos();



  $("ul").on("click", "li", function(event){
    if (event.altKey) {
       if(event.shiftKey){
         	$('.updates').append( template([{type: 'wide'}]) );
       }else{
       		$('.updates').append( template([{type: 'narrow'}]) );
       }
       HistItem=((isNaN(parseInt(parseInt(window.location.href.split('#')[1]))) ? 0 : parseInt(parseInt(window.location.href.split('#')[1]))+1))
       window.location.hash=HistItem;
    }else{
    	  $(this).remove(); 
    	   
    }
    firstPos();
  });


});

function firstPos(){
if($( "li" ).length>1)$( "li" ).last().css( "left", "60px" );
$( "span" ).each(function( index ) { $( this ).html(index+1) ;});
}

$(window).on('popstate',function(event) {
   if(parseInt(HistItem) > parseInt(window.location.href.split('#')[1]))$( "li" ).last().remove();
});

