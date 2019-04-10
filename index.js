
    jQuery('.text2, .text3, .text4, .text5').hide();// Hide all elements you want fading except for the first
    
    var $elements = jQuery('.text1, .text2, .text3, .text4, .text5');// add all elements including the first to cycle through
    
    function anim_loop(index) {
    $elements.eq(index).delay(2000).fadeIn(1000, function() {
    var $self = jQuery(this);
    setTimeout(function() {
    $self.fadeOut(2000);
    anim_loop((index + 1) % $elements.length);
    }, 3000);
    });
    }
    
    anim_loop(0);
