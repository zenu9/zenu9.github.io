$(document).ready(function() {
    const scrollToTopButton = $("#scrollToTopButton");
  
    // Show the button when the user scrolls down 20px from the top of the document
    $(window).scroll(function() {
      if ($(this).scrollTop() > 20) {
        scrollToTopButton.fadeIn();
      } else {
        scrollToTopButton.fadeOut();
      }
    });
  
    scrollToTopButton.click(function() {
      $("html, body").animate({ scrollTop: 0 }, "slow");
    });
  });