var qb = {};



qb.App = (function() {

    function initApp() {
        transparentNav();
        sizing();

        $(window).resize(); //on page load
        //modal();
        form();
    }

    function sizing() {
        $(window).resize(function() {
            $("#header-hero").height($(window).height());
        });
    }

    function transparentNav() {
        // Transition effect for navbar
        $(window).scroll(function() {
            // checks if window is scrolled more than x, adds/removes solid class\
            if ($(this).scrollTop() > $(".header-hero").height() / 2 - ($(".navbar").height() * 2)) {
                // scrolls to end of header div
                $(".navbar").addClass('solid');
                // should also swap logo image to light version
            } else {
                $(".navbar").removeClass('solid');

            }
        });
    }


    function form() {
        //material contact form animation
        $('.contact-form').find('.form-control').each(function() {
            console.log("test");
            var targetItem = $(this).parent();
            if ($(this).val()) {
                $(targetItem).find('label').css({
                    'top': '10px',
                    'fontSize': '14px'
                });
            }
        })
        $('.contact-form').find('.form-control').focus(function() {
            $(this).parent('.input-block').addClass('focus');
            $(this).parent().find('label').animate({
                'top': '10px',
                'fontSize': '14px'
            }, 300);
        })
        $('.contact-form').find('.form-control').blur(function() {
            if ($(this).val().length == 0) {
                $(this).parent('.input-block').removeClass('focus');
                $(this).parent().find('label').animate({
                    'top': '25px',
                    'fontSize': '18px'
                }, 300);
            }
        })
    }



    /* ------------------------------------------------- */
    return {
        init: function() {
            initApp();
        }
    }

})();

$(document).ready(function($) {
    new qb.App.init();
});

function test() {
    console.log("HIHIHIH");
}