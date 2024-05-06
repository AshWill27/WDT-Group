$(document).ready(function() {
    // Toggle FAQ answers
    $('.faq-question').click(function() {
      $(this).toggleClass('open');
      $(this).next('.faq-answer').slideToggle();
    });
  
    // Filter FAQs by category
    $('.faq-category-btn').click(function() {
      var category = $(this).data('filter');
      if (category === 'all') {
        $('.faq-item').show();
      } else {
        $('.faq-item').hide();
        $('.faq-item[data-category="' + category + '"]').show();
      }
      $('.faq-category-btn').removeClass('active');
      $(this).addClass('active');
    });
  });
  