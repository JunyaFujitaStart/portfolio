$(document).ready(function() {

  $('#form').submit(function(event) {
    var formData = $('#form').serialize();
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeV9vHGMReyGn1BnuAvWEPPxIEcl1Z5mkd95hZcYGV71fQCpQ/formResponse",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function() {
          $(".end-message").slideDown();
          $(".button").fadeOut();
          //window.location.href = "thanks.html";
        },
        200: function() {
          $(".false-message").slideDown();
        }
      }
    });
    event.preventDefault();
  });

});


// new Vue({
//   el: '#demo',
//   data: {
//     show: true
//   }
// })