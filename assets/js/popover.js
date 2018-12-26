console.log("javascript popup.js link works");



$("#selectable li" ).hover(
    function() {
       $(this).find("img").fadeIn(1000);
    }, function() {
       $(this).find("img").fadeOut(1000);
    }
);





// $(document).ready(function() {
//     $('#selectable li').hover(function(){
//         $(this).find('img').toggle();
//     });
// });
