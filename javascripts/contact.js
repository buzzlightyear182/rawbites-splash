$(function() {
  $("#contactForm").validate({
  submitHandler: function(form) {
    $.ajax({
      url: "//formspree.io/hello@rawbites.com.ph",
      method: "POST",
      data: {
        name: $(form).find("input[name='name']").val(),
        _replyto: $(form).find("input[name='_replyto']").val(),
        message: $(form).find("textarea[name='message']").val()
      },
      dataType: "json",
      success: function() {
        $("#submit-success").fadeIn();
        $("#contactForm .form-control").val('');
      },
      error: function() {
        $("#submit-errors").fadeIn();
      }
    });
  }
});
})
;
