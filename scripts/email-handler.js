$(document).ready(function() {
  emailjs.init("user_dh4TohIa1ElFkNMSMgka8");
  //emailJS
$(".submit").click(function(e) {
  e.preventDefault();
  sendEmail($("form.email"));
  $('.submit').attr("disabled", true);
  alert("sending.. please allow up to 30 seconds.")
});
  function sendEmail(form) {
    var submit = $("#submit"),
      agreed     = false;

    if( $(".agreement").is(":checked") ) {
     agreed = true;
    } else { agreed = false };
    var quoteParams = {
      first_name:  form[0][0].value,
      last_name:   form[0][1].value,
      email:       form[0][2].value,
      mobile:      form[0][3].value,
      description: form[0][4].value,
      issueType:   form[0][5].value,
      agreed:      agreed
    }

    emailjs.send('gmail', 'repairs', quoteParams).then( function(response) {
      alert("SUCCESS! Email was sent.", response.status, response.text);
      $('.submit').attr("disabled", true);
    }, function(error) {
      console.log(error);
      alert("ERROR, please try again.", error);
    });
    return false;
  };
});
