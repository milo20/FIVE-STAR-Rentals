var qb = {};

qb.App = (function() {

    var $mobileNav;

    function initApp() {
        transparentNav();
        sizing();

        $(window).resize(); //on page load

    }

    function sizing() {
        $(window).resize(function() {
            console.log("resize");
            $("#header-hero").height($(window).height());
        });
    }

    function transparentNav() {
        // Transition effect for navbar
        $(window).scroll(function() {
            // checks if window is scrolled more than x, adds/removes solid class\
            if ($(this).scrollTop() > $(".header-hero").height() - ($(".navbar").height() * 2)) {
                // scrolls to end of header div
                $(".navbar").addClass('solid');
                // should also swap logo image to light version
            } else {
                $(".navbar").removeClass('solid');

            }
        });
    }


    /* ---> FADE IN Functions <-------------------------- */

    function fadeInHeader() {
        // run spinner
        makeWaves();


        // check if page is loaded
        $('.header-container').animate({
            'opacity': '1'
        }, 0);



        setTimeout(function() {

            $('.wave').animate({
                'opacity': '1'
            }, 100);

            $('.navbar').animate({
                'opacity': '1'
            }, 1000);

            if ($(window).width() <= 768) {

            } else {
                $('.wave').addClass('animated fadeInDown');
                $('.navbar').addClass('animated fadeInDown');
            }

        }, 500);

        setTimeout(function() {
            $('.header').animate({
                'opacity': '1'
            }, 2500);
        }, 1500);
    }


    function showAllSections() {
        showSection($("#projects"), $("#projects-content"), 500);
        showSection($("#my-links"), $("#my-links-content"), 500);
        showSection($("#skills"), $("#skills-content"), 650);
        showSection($("#about"), $("#about-content"), 500);
        showSection($("#contact"), $("#contact-content"), 600);

        barChart();
    }

    function showSection(section, content, offset) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > (section.offset().top - offset)) {
                section.animate({
                    'opacity': '1'
                }, 1200);
                // animate content in for different sections
                console.log("content= " + content[0].id);
                switch (content[0].id) {
                    case "projects-content":
                    case "about-content":
                        content.addClass('animated fadeInUp');
                        break;
                    case "my-links-content":
                        animateLinks();
                        break;
                    case "skills-content":
                    case "contact-content":
                        break;
                }
            }
        });
    }

    function animateLinks() {
        $('#my-links-content div').each(function(i) {
            var $div = $(this);
            setTimeout(function() {
                $div.css('opacity', 1);
                $div.addClass('animated fadeInRight');
            }, i * 150);
        });
    }

    function hoverLink() {
        $('#my-links-content a').hover(
            function() {
                $(this).addClass('hvr-shrink');
            }
        );
    }

    /* ---> NAVBAR Functions <-------------------------- */

    function navLinkClick() {
        $('.nav-link').click(function() {
            if ($(window).width() <= 768) {
                // close nav menu if on mobile
                slideMobileNav();
            }
        });
        scrollToSection($(".nav-link"));
    }

    function navMenuClick() {
        $("#mobile-nav-toggler").click(function() {
            slideMobileNav();
        });

        $(".close").click(function() {
            slideMobileNav();
        });

        $("#slide-content").click(function() {
            if ($("#slide-content").hasClass("slideOver")) {
                slideMobileNav();
            }
        });
    }

    function slideMobileNav() {
        $(".wrap-wave").toggleClass("slideGraphic");

        $("#slide-menu").toggleClass("slideMenuToggle");
        $("#slide-content").toggleClass("slideOver");
        $(".navbar").toggleClass("nav-slide");
    }




    /* ---> SCROLL Functions <-------------------------- */

    function callToAction() {
        scrollToSection($(".cta-button"));
    }

    function scrollToSection(sourceClick) {
        sourceClick.click(function(event) {
            // animate scroll
            $('html, body').animate({
                scrollTop: ($(this.hash).offset().top - $(".navbar").height())
            }, 600);
        });
    }

    /* ---> Project Click Functions <-------------------------- */

    function project() {
        hoverProject($(".planets"), $(".planets-icon"));
        hoverProject($(".rubiks"), $(".rubiks-icon"));
        hoverProject($(".logos"), $(".logos-icon"));
        hoverProject($(".design"), $(".design-icon"));

        clickProject($("#planets-info"), $(".planets"));
        clickProject($("#rubiks-info"), $(".rubiks"));
        clickProject($("#logos-info"), $(".logos"));
        clickProject($("#design-info"), $(".design"));

        $(".info-close").click(function() {
            slideClose(checkVisible());
        });

    }

    function hoverProject(project, icon) {
        $(project).hover(
            function() {
                $(icon).addClass("hvr-bounce-in");
            }
        );
    }

    function clickProject(projectInfo, project) {

        $(projectInfo).hide();
        $(project).click(function() {
            checkVisible($(projectInfo));
            slideOrHide(projectInfo, checkVisible());
        });
    }

    function checkVisible() {
        var visibleProject;

        if ($("#planets-info").is(":visible")) {
            visibleProject = "planets-info";
        } else if ($("#rubiks-info").is(":visible")) {
            visibleProject = "rubiks-info";
        } else if ($("#logos-info").is(":visible")) {
            visibleProject = "logos-info";
        } else if ($("#design-info").is(":visible")) {
            visibleProject = "design-info";
        } else {
            visibleProject = "undefined";
        }
        return visibleProject;
    }

    function slideOrHide(clickedProject, visibleProject) {

        if (visibleProject == "undefined") { // no element is visible
            $(".work-sample").hide();
            $(".work-sample").fadeIn(1200);
            clickedProject.slideToggle(400);
            visibleProject = clickedProject[0].id;

            $("html, body").animate({ // open clicked element
                scrollTop: (getY(clickedProject))
            }, 600);

        } else if (visibleProject == clickedProject[0].id) { // or click X clicked element is already open
            slideClose(clickedProject[0].id);
        } else { // another element is already visible
            $("#" + visibleProject).hide();
            clickedProject.fadeIn(1000);
            $("html, body").animate({
                scrollTop: (getY(clickedProject))
            }, 600);
        }
    }

    function getY(project) {
        if ($(window).width() < 768) {
            return project.offset().top - 40;
        } else {
            return project.offset().top - 80;
        }
    }

    function slideClose(project) {
        var projectId = project.substring(0, (project.length - 5));
        console.log("proj = " + projectId);

        var projectLocation = $("." + projectId).parent().offset().top;
        $("#" + project).slideToggle(200);
        $("html, body").animate({
            scrollTop: (projectLocation - $(".navbar").height() - 20)
        }, 600);
    }

    /* ---> Helper Functions <-------------------------- */

    function barChart() {

        $(window).scroll(function() {
            var start = $("#skills").offset().top - 650;
            var stop = $("#about").offset().top - 500;
            if ($(window).scrollTop() >= start && $(window).scrollTop() <= stop) {
                $('.bar').each(function(i) {
                    var $bar = $(this);
                    setTimeout(function() {
                        $bar.css('width', $bar.attr('data-percent'));
                        $bar.css('transition', 'width 1s');
                    }, i * 100);
                });
            } else {
                $('.bar').each(function(i) {
                    var $bar = $(this);
                    setTimeout(function() {
                        $bar.css('width', 0);
                        $bar.css('transition', 'width 0.2s');
                    }, i * 100);
                });
            }
        });
    }


    function makeWaves() {

        var start;
        var add;
        var divide;

        if ($(window).width() <= 768) {
            //if mobile
            start = -12;
            add = 13;
            divide = 1.3;
            console.log("mobile");
        } else {
            start = 53;
            add = 5;
            divide = 1;
        }

        $('.wave').each(function(i) {
            var $wave = $(this);
            setTimeout(function() {
                var newHeight = $wave.attr('wave-height') / divide;
                $wave.css('height', newHeight + '%');
                $wave.css('left', start + '%');
                start = start + add;
            }, i * 100);
        });
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