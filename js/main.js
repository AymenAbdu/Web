$(document).ready(function () {
  $("#contactForm, #loginForm, #registerForm").on("submit", function (e) {
    e.preventDefault();

    var form = this;
    var valid = true;

    $(form).find("input, textarea").each(function () {
      if (!this.value.trim()) valid = false;
    });

    if (form.id === "registerForm") {
      var password = $("#password").val();
      var confirm = $("#confirmPassword").val();
      if (password !== confirm) valid = false;
    }

    if (!form.checkValidity()) valid = false;

    if (!valid) {
      ToastNotify.error("يرجى إعادة الإدخال");
      return;
    }

    ToastNotify.success("مرحبًا بك في متجر LUXURY");
    form.reset();
  });

  // Ajax: تفاصيل الهاتف الأول
  $("#phone1DetailsBtn").on("click", function () {
    $.ajax({
      url: "phone1-modal.html",
      method: "GET",
      success: function (data) {
        $("#phone1Modal .modal-content").html(data);
        $("#phone1Modal").modal("show");
      },
      error: function () {
        ToastNotify.error("تعذر تحميل التفاصيل");
      }
    });
  });

  // Ajax: تفاصيل الهاتف الثاني
  $("#phone2DetailsBtn").on("click", function () {
    $.ajax({
      url: "phone2-modal.html",
      method: "GET",
      success: function (data) {
        $("#phone2Modal .modal-content").html(data);
        $("#phone2Modal").modal("show");
      },
      error: function () {
        ToastNotify.error("تعذر تحميل التفاصيل");
      }
    });
  });
});
