$(document).ready(function() {
  emailjs.init("");
  //emailJS
$(".submit").click(function(e) {
  e.preventDefault();
  sendEmail($("form.email"));
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

    emailjs.send('gmail', 'contactform', quoteParams).then( function(response) {
      alert("SUCCESS! Email was sent.", response.status, response.text);
      submit.attr("disabled", "disabled");
    }, function(error) {
      alert("ERROR, please try again.", error);
    });
    return false;
  };
});
