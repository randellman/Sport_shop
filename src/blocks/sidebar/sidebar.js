$(document).ready(function() {
   $("#sidebar").mmenu({
      // options
      extensions: {
         "all": ["border-full", "fx-menu-slide", "fx-listitems-slide", "pagedim-black"],
         "(min-width: 992px)": ["position-front"]
      }
   }, {
      offCanvas: {
         pageSelector: "#page-wrap"
      }
   });
   
   var API = $("#sidebar").data( "mmenu" );

   $("#side-button").click(function() {
      API.open();
   });
});
