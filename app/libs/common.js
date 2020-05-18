$(document).ready(() => {
  // Ajax push mesege http://api.jquery.com/jquery.ajax/
  $('form').submit(function () {
    const th = $(this);
    $.ajax({
      type: 'POST',
      url: 'mail.php', // Change
      data: th.serialize(),
    }).done(() => {
      $('.forms-calldecor .success').addClass('active');
      setTimeout(() => {
        // Done Functions
        $('.forms-calldecor .success').removeClass('active');
        th.trigger('reset');
        $.magnificPopup.close();
      }, 3000);
    });
    return false;
  });
});
