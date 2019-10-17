var crixus = 0;
var commodus = 0;
var marcusAttilus = 0;
var priscus = 0;




var warriorList = ["crixus", "commodus", "marcusAttilus", "priscus"];


console.log(warriorList);


var warriorDiv = $('<div>').attr('id', 'warriorOptions');
$(document.body).append(warriorDiv);

for (var i=0; i < warriorList.length; i++) {
    
    var newWarriorDiv = $('<div>').text(warriorList[i]).addClass('warrior');
    
    $('#warriorOptions').append(newWarriorDiv)

    }

    $( ".warrior" ).on( "click", function() {
        console.log( $( this ).text() );
      });

      

      


      

