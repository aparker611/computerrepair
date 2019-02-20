$(document).ready(function() {
    var $submit = $("#submit"),
        $inputs = $('#fname, #lname, #email, #phone, #issue, #selectissue, #agreement');

    function checkEmpty() {

         //filter over the empty inputs

        return $inputs.filter(function() {
            return !$.trim(this.value);
        }).length === 0;
    }

    $inputs.on('blur', function() {
        $submit.prop("disabled", !checkEmpty());
    }).blur(); // trigger an initial blur
});
