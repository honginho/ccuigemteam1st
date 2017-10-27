/* effects.js */

$(function() {
    $("#navBar").hover(
        function() {
            $(".navIcon").css({
                'height': '8px',
                'margin': '8px 7px'
            });
        }, function() {
            $(".navIcon").css({
                'height': '7px',
                'margin': '7px 7px'
            });
        }
    );

    $(".closeBtn").hover(
        function() {
            $(".closeBtn").css({
                'color': 'rgba(255, 255, 255, .7)'
            });
        }, function() {
            $(".closeBtn").css({
                'color': 'rgba(255, 255, 255, 1)'
            });
        }
    );
});
