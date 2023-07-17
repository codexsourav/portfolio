const d = new Date();
let year = d.getFullYear();


var typed = new Typed('#typaping', {
    strings: ['Full Stack  Developer.', 'Flutter Developer.', 'WEB Developer.'],
    typeSpeed: 90,
    lifeLike: true,
    waitUntilVisible: true,
    loop: true
});

$(document).ready(function () {
    $('#menubar-btn').click(function (e) { 
        e.preventDefault();
        $('#menu-box').css('display', 'flex');
    });
    $('#menubar-close').click(function (e) { 
        e.preventDefault();
        $('#menu-box').css('display', 'none');
    });
    
    // $('.closemenu a').click(function (e) { 
    //     e.preventDefault();
    // setTimeout(() => {
    //     $('#menu-box').css('display', 'none');
    // }, 500);
    // });
    
});