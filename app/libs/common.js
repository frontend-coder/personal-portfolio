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


  $('form').submit((event) => {
    event.preventDefault();
    let validName = false;
    let validPhone = false;

    const name = $('#your_name').val();
    const phone = $('#your_phone').val();
    console.info(name);
    console.info(phone);

    if (name === '') {
      $('#your_name').parent().removeClass('has-succes').addClass('has-error');
    } else {
      $('#your_name').parent().removeClass('has-error').addClass('has-success');
      validName = true;
    }

    if (phone == '') {
      $('#your_phone').parent().removeClass('has-succes').addClass('has-error');
    } else {
      $('#your_phone').parent().removeClass('has-error').addClass('has-success');
      validPhone = true;
    }
    if (validName == true && validPhone == true) {
      $('form').unbind('submit').submit();
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
    }
  });


  // Ajax push mesege http://api.jquery.com/jquery.ajax/
  // $('form').submit(function () {
  //   const th = $(this);
  //   $.ajax({
  //     type: 'POST',
  //     url: 'mail.php', // Change
  //     data: th.serialize(),
  //   }).done(() => {
  //     $('.contact-form .success').addClass('active');
  //     setTimeout(() => {
  //       // Done Functions
  //       $('.contact-form .success').removeClass('active');
  //       th.trigger('reset');
  //       $.magnificPopup.close();
  //     }, 3000);
  //   });
  //   return false;
  // });
});
