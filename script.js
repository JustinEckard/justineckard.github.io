jQuery(function() {
    // Hide all "More Details" sections initially
    $('.more-details').hide();

    $('.more-details-button').on('click touchstart', function() {
      const moreDetailsSection = $(this).closest('.work-item').find('.more-details');
      moreDetailsSection.slideToggle();

      $(this).find('.fa-solid.fa-angle-down').toggleClass('fa-rotate-180');
    });
  });