$(document).ready(function() {
    // $('.owl-carousel').owlCarousel({
    //     // autoplay: true,
    //     center: true,
    //     loop: true,
    //     dots: false,
    //     rtl: true,
    //     items: 3,
    //     mouseDrag: false,
    //     responsiveClass: true,
    //     responsive: {
    //         0: {
    //             items: 1,
    //             dots: false,
    //             autoplay: true,
    //             nav: true
    //         },
    //         600: {
    //             items: 2,
    //             dots: true
    //         },
    //         1700: {
    //             items: 3,
    //             dots: true
    //         }

    //     }

    // });
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 200) {
            $(".navbar").addClass("fixed-top dropShadow bg-white");
        } else {
            $(".navbar").removeClass("fixed-top dropShadow bg-white");
        }
    });

});
window.onload = function() {
    $(".loader").fadeOut("5000", function() {
        $("body").css("overflow-y", "auto");
        $(".over").fadeOut("3000");
    });
};
if ($('.wheel-map').length) {
    $('.wheel-map').each(function() {
        initialize(this);
    });
}
$('.fa-chevron-down').click(function() {
    $('.top-emerg').toggleClass('closed');

});

function initialize(_this) {

    var stylesArray = {
        //style 1
        'style-1': [{
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            },
            {
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#bdbdbd"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dadada"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#c9c9c9"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            }
        ]


    };

    var styles, map, marker, infowindow,
        lat = $(_this).attr("data-lat"),
        lng = $(_this).attr("data-lng"),
        contentString = $(_this).attr("data-string"),
        image = $(_this).attr("data-marker"),
        styles_attr = $(_this).attr("data-style"),
        zoomLevel = parseInt($(_this).attr("data-zoom"), 10),
        myLatlng = new google.maps.LatLng(lat, lng);


    // style_1
    if (styles_attr == 'style-1') {
        styles = stylesArray[styles_attr];
    }
    // custom
    if (typeof hawa_style_map != 'undefined' && styles_attr == 'custom') {
        styles = hawa_style_map;
    }
    // or default style

    var styledMap = new google.maps.StyledMapType(styles, { name: "Styled Map" });

    var mapOptions = {
        zoom: zoomLevel,
        disableDefaultUI: true,
        center: myLatlng,
        scrollwheel: false,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
    };

    map = new google.maps.Map(_this, mapOptions);

    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: image
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });

}
$('.parteners').owlCarousel({
    loop: false,
    margin: 30,
    rtl: true,
    items: 0,
    nav: true,
    dots: false,
    center: false,
    responsiveClass: true,
    navText: ["<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
    ],
    responsive: {
        0: { items: 1, dots: true, nav: false },
        480: { items: 2 },
        768: { items: 3 },
        1200: { items: 4 }
    }
});
$('.about2').owlCarousel({
    loop: false,
    margin: 30,
    rtl: true,
    items: 1,
    nav: false,
    dots: true,
    center: false
});
$('.offers').owlCarousel({
    loop: true,
    margin: 30,
    rtl: true,
    items: 0,
    nav: true,
    dots: false,
    center: false,
    responsiveClass: true,
    navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
    ],
    responsive: {
        0: { items: 1, nav: false, dots: true },
        480: { items: 2, nav: false, dots: true },
        768: { items: 2, nav: false, dots: true },
        991: { items: 3 },
        1200: { items: 3 }
    }
});
$('.teams').owlCarousel({
    loop: true,
    margin: 30,
    rtl: true,
    items: 0,
    nav: true,
    dots: false,
    center: false,
    responsiveClass: true,
    navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
    ],
    responsive: {
        0: { items: 1, nav: false, dots: true },
        480: { items: 2, nav: false, dots: true },
        768: { items: 2, nav: false, dots: true },
        991: { items: 3 },
        1200: { items: 3 }
    }
});
$('.header').owlCarousel({
    loop: true,
    items: 1,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    center: false,
    animateOut: 'fadeOut',
    responsiveClass: true,
    navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
    ],
    responsive: {
        0: { items: 1, nav: false, dots: true },
        1240: { items: 1, nav: true, dots: false },

    }
});
$('.parts').owlCarousel({
    loop: true,
    items: 1,
    nav: false,
    dots: true,
    autoplay: false,
    center: false,
    responsiveClass: true,

});

$('.image').on('mousemove', function(event) {
    // This gives you the position of the image on the page
    var bbox = event.target.getBoundingClientRect();

    // Then we measure how far into the image the mouse is in both x and y directions
    var mouseX = event.clientX - bbox.left;
    var mouseY = event.clientY - bbox.top;

    // Then work out how far through the image as a percentage the mouse is
    var xPercent = (mouseX / bbox.width) * 100;
    var yPercent = (mouseY / bbox.height) * 100;

    // Then we change the `transform-origin` css property on the image to center the zoom effect on the mouse position
    //event.target.style.transformOrigin = xPercent + '% ' + yPercent + '%';
    // It's a bit clearer in jQuery:
    $(this).css('transform-origin', (xPercent + '% ' + yPercent + '%'));
    // We add the '%' units to make sure the string looks exactly like the css declaration it becomes.

});
// If you want it to automatically trigger on hover
$('.image').on('mouseenter', function() {
    $(this).addClass('zoom-in');
    $(this).removeClass('normal-zoom');
});

// and stop when not hovering
$('.image').on('mouseleave', function() {
    $(this).addClass('normal-zoom');
    $(this).removeClass('zoom-in');
});
$('#exampleModal').on('hide.bs.modal', function(e) {
    document.getElementById("video").pause()
})
$('#exampleModal').on('shown.bs.modal', function(e) {
    document.getElementById("video").play()
})


$('.formap button').on('click', function() {
    $('.formap button.active').removeClass('active');
    $(this).addClass('active');
});
$(window).scroll(function() { if ($(this).scrollTop() >= 100) { $('.scrolltop').addClass("show"); } else { $('.scrolltop').removeClass("show"); } })
$('.scrolltop').click(function() { $('body,html').animate({ scrollTop: 0 }, 300) })
$(document).ready(function() {
    $(document).click(function(event) {
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true) {
            $(".navbar-collapse").removeClass("show")
        }

    });
    $(window).scroll(function() {
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true) {
            $(".navbar-collapse").removeClass("show")
        }
    })
});