$(document).ready(() => {
  // $('form').submit(function () { // Change
  //   const th = $(this);
  //   $.ajax({
  //     type: 'POST',
  //     url: 'send.php', // Change
  //     data: th.serialize(),
  //   });
  //   return false;
  // });

  // Ajax push mesege http://api.jquery.com/jquery.ajax/
  $('form').submit(function () {
    const th = $(this);
    $.ajax({
      type: 'POST',
      url: 'mail.php', // Change
      data: th.serialize(),
    }).done(() => {
      $('.contact-form .success').addClass('active');
      setTimeout(() => {
        // Done Functions
        $('.contact-form .success').removeClass('active');
        th.trigger('reset');
        $.magnificPopup.close();
      }, 3000);
    });
    return false;
  });
});
