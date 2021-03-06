	$(document).ready(function () {
      $(".button-collapse").sideNav(); 
      $(".dropdown-trigger").dropdown();
      $("select").material_select();
// Makes drinks in teh drop down add cocktail menus requird and re populates the fields when a cocktail is edited //
    validateMaterializeSelect();
    function  validateMaterializeSelect() {
        let classValid = {"border-bottom": "1px solid #4caf50", "box-shadow": "0 1px 0 0 #4caf50"};
        let classInvalid = {"border-bottom": "1px solid #f44336", "box-shadow": "0 1px 0 0 #f44336"};
        if ($("select.validate").prop("required")) {
            $("select.validate").css({"display": "block", "height": "0", "padding": "0", "padding": "0", "width": "0","position": "absolute" });
        }
        $(".select-wrapper input.select-dropdown").on("focusin", function() {
            $(this).parent(".select-wrapper").on("change", function() {
                if ($(this).children("ul").children("li.selected:not(.disabled)").on("click", function (){ })) {
                    $(this).children("input").css(classValid);
                }
            });
        }).on("click", function() {
          if  ($(this).parent(".select-wrapper").children("ul").children("li.selected:not(.disabled)").css("background-color") === "rgba(0, 0, 0, 0.08)"){
             $(this).parent(".select-wrapper").children("input").css(classInvalid);
           } else {
               $(".select-wrapper input.select-dropdown").on("focusout", function() {
                   if ($(this).parent(".select-wrapper").children("select").prop("required")) {
                       if($(this).css("border-bottom")!= "1px solid rgb(76, 175, 80)") {
                           $(this).parent(".select-wrapper").children("input").css(classInvalid);
                       }
                   }
               });
           }
            
      });
    }
    });
  
// Fades out flash messages after 5 seconds //
function fade_out() {
  $(".flashes").fadeOut().empty();
}
  setTimeout(fade_out, 5000); 