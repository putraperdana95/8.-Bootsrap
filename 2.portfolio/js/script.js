// event pada saat link di klik
$('.page-scroll').on('click', function(e) {

    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap elemen ybs
    var elemenTujuan = $(tujuan);

    // pindahkan scroll
    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1000, 'easeInOutExpo');

    e.preventDefault();
});


// prallax

// about
$(window).on('load', function(){
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    // Jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/9 +'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/6 +'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/3 +'%)'
    });

    // Portfolio
    if( wScroll > $('.portfolio').offset().top - 250 ){
        $('.portfolio .thumbnail').each(function(i){
            setTimeout(function() {
                $('.portfolio .thumbnail').eq(i).addClass('muncul')
            }, 300 * (i+1));
        });



        
    }


});