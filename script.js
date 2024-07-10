jQuery(function() {
    $('.more-details').hide();

    $('.more-details-button').on('click ', function() {
      const moreDetailsSection = $(this).closest('.info-item').find('.more-details');
      moreDetailsSection.slideToggle();

      $(this).find('.fa-solid.fa-angle-down').toggleClass('fa-rotate-180');
    });
  });