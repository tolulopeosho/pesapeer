$(document).ready(function(){

    // hide our element on page load

    //FEATURES
    $('#feature-title').css('opacity', 0);
    $('#feature-title-01').css('opacity', 0);
    $('#feature-title-02').css('opacity', 0);
    $('#feature-title-03').css('opacity', 0);

    //BEST RATES
    $('#best-rates').css('opacity', 0);

    //FAQ
    $('#faq-box-01').css('opacity', 0);
    $('#faq-box-02').css('opacity', 0);
    $('#faq-box-03').css('opacity', 0);
    $('#faq-box-04').css('opacity', 0);
    $('#faq-box-05').css('opacity', 0);
    $('#faq-box-06').css('opacity', 0);



    //Initializing

    //FEATURES
    $('#feature-title').waypoint(function() {
        $('#feature-title').addClass('fadeInUp');
    }, { offset: '70%' });

    $('#feature-title-01').waypoint(function() {
        $('#feature-title-01').addClass('fadeInUp');
    }, { offset: '70%' });

    $('#feature-title-02').waypoint(function() {
        $('#feature-title-02').addClass('fadeInUp');
    }, { offset: '60%' });

    $('#feature-title-03').waypoint(function() {
        $('#feature-title-03').addClass('fadeInUp');
    }, { offset: '50%' });


    //BEST RATES
    $('#best-rates').waypoint(function() {
        $('#best-rates').addClass('fadeInUp');
    }, { offset: '80%' });


    //FAQ
    $('#faq-box-01').waypoint(function() {
        $('#faq-box-01').addClass('fadeInUp');
    }, { offset: '90%' });

    $('#faq-box-02').waypoint(function() {
        $('#faq-box-02').addClass('fadeInUp');
    }, { offset: '85%' });

    $('#faq-box-03').waypoint(function() {
        $('#faq-box-03').addClass('fadeInUp');
    }, { offset: '80%' });

    $('#faq-box-04').waypoint(function() {
        $('#faq-box-04').addClass('fadeInUp');
    }, { offset: '75%' });

    $('#faq-box-05').waypoint(function() {
        $('#faq-box-05').addClass('fadeInUp');
    }, { offset: '70%' });

    $('#faq-box-06').waypoint(function() {
        $('#faq-box-06').addClass('fadeInUp');
    }, { offset: '65%' });

});