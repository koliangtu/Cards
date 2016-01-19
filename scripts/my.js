var template;

$( document ).ready(function() {


  template = Handlebars.compile( $('#template').html() );
  loadContent();

  $("ul").on("click", "li", function(event){
    if (event.altKey) {
       if(event.shiftKey){
          cards.push({type: 'wide'});
         	$('.updates').append( template([{type: 'wide'}]) );
       }else{
          cards.push({type: 'wide'});
       		$('.updates').append( template([{type: 'narrow'}]) );
       }
    }else{
    	  cards.pop();
    }
    History.pushState(cards);
    loadContent();
  });


});

function loadContent(){

$('.updates').html( template(cards) );

}


(function(window,undefined){

History.Adapter.bind(window,'statechange',function(){
          // var State = History.getState(); 
          //cards = State.data;
          //loadContent();
    });
})(window);

