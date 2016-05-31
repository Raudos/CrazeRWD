$(document).on("ready", function() {
  //$davai();
  //$opa();
  $event();
  /*$("div").attr("title", function(index, val) {
    console.log(val);
    return "Bla" + index;
  })*/
})

function $davai() {
  $("#bigHand").before(
    function(index) {
      return $("<img/>").attr("src", "img_" + this.id.substr(-3) + ".png");
    }
  )
}
function $opa() {
  $("div").each(function(index, element) {
    console.log(element);
    var val = $(element).attr("class");
    if(val == undefined) {
      val = "brak atrybutu";
    }
    //console.log("element nr " + index + ": " + val);
  })
}
function $event() {
  $("header").on("click", function(event) {
    for (val in event) {
      if (!$.isFunction(event[val])) {
        console.log("event." + val + " = " + event[val]);
      }
    }
  })
}
