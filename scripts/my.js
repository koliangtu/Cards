var HistItem;
var template;

$( document ).ready(function() {


  template = Handlebars.compile( $('#template').html() );
  loadContent();

  $("ul").on("click", "li", function(event){
    if (event.altKey) {
       if(event.shiftKey){
         	$('.updates').append( template([{type: 'wide'}]) );
       }else{
       		$('.updates').append( template([{type: 'narrow'}]) );
       }
       HistItem=((isNaN(parseInt(parseInt(window.location.href.split('#')[1]))) ? 0 : parseInt(parseInt(window.location.href.split('#')[1]))+1))
       
    }else{
    	  $(this).remove(); 
    	  HistItem=((isNaN(parseInt(parseInt(window.location.href.split('#')[1]))) ? -1 : parseInt(parseInt(window.location.href.split('#')[1]))-1)) 
    }
    window.location.hash=HistItem;
    firstPos();
  });


});

function loadContent(){

$('.updates').html( template(cards) );
firstPos();
}

function firstPos(){
if($( "li" ).length>1)$( "li" ).last().css( "left", "60px" );
$( "span" ).each(function( index ) { $( this ).html(index+1) ;});
}

$(window).on('popstate',function(event) {

   if(parseInt(HistItem) > parseInt(window.location.href.split('#')[1])){
    $( "li" ).last().remove();
  }
   
   if(isNaN(parseInt(parseInt(window.location.href.split('#')[1])))){loadContent();}

});

