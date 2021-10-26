$(document).ready(function () {
    $("#left").click(function () {
        $("#bongoCat").animate({
            right: "+=100px",
        }, "linear", () => checkBoom());
    });
    $("#right").click(function () {
        $("#bongoCat").animate({
            right: "-=100px",
        }, "linear", () => checkBoom());
    });
    $("#top").click(function () {
        $("#bongoCat").animate({
            top: "-=100px",
        }, "linear", () => checkBoom());
    });
    $("#down").click(function () {
        $("#bongoCat").animate({
            top: "+=100px",
        }, "linear", () => checkBoom());
    });
});

const checkBoom = () => {
    let catPosition = $("#bongoCat").position()
    let blackHolePosition = $("#blackHole").position()
    if (catPosition.left > blackHolePosition.left && catPosition.top > blackHolePosition.top) {
        $({deg: 0}).animate({deg: 360}, {
            duration: 5000,
            easing: "linear",
            step: function (now) {
                $("#bongoCat").css({
                    'transform': 'rotate(' + now + 'deg)'
                });
            }
        });
        $("#bongoCat").animate({
            left: "+=200",
        }, 5000);
        $("#bongoCat").fadeOut("slow", function () {
            $("#deathMessage").animate({opacity:1}, 1000);
        });
    }
}

function AnimateRotate(angle) {
    let duration = 10000;
    setTimeout(function () {
        AnimateRotate(angle);
    }, duration)
    let $elem = $('#blackHole');

    $({deg: 0}).animate({deg: angle}, {
        duration: duration,
        easing: "linear",
        step: function (now) {
            $elem.css({
                'transform': 'rotate(' + now + 'deg)'
            });
        }
    });
}

AnimateRotate(360);

